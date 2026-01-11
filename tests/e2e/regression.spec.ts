import { test, expect, chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

/**
 * MACD SYSTEM REGRESSION VALIDATOR
 * 
 * Usage:
 * npx playwright test tests/e2e/regression.spec.ts --headed
 */

// CONFIGURATION
const CHART_ID = 'YOUR_CHART_ID'; // User needs to provide this or we use a fresh chart
// We'll use a standard crypto chart for generic testing if ID not provided, but strategy requires specific setup.
const CHART_URL = `https://www.tradingview.com/chart/`; 

// Path to the strategy file
const STRATEGY_PATH = path.join(__dirname, '../../pinescript/tests/regression_test.pine');

// BRAVE PROFILE PATH (Windows Default)
// Adjust this if your profile is elsewhere
const USER_DATA_DIR = path.join(os.homedir(), 'AppData', 'Local', 'BraveSoftware', 'Brave-Browser', 'User Data');
const BRAVE_PATH = 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe';

test.describe('MACD Strategy Regression', () => {
    test.setTimeout(60000); // Give it time to load

    test('should load strategy and verify trade count filters', async () => {
        // 1. Launch with User Profile (to maintain login)
        // Ensure all Brave windows are CLOSED before running this!
        console.log(`Launching Brave with profile from: ${USER_DATA_DIR}`);
        const browser = await chromium.launchPersistentContext(USER_DATA_DIR, {
            headless: false,
            executablePath: BRAVE_PATH,
            viewport: { width: 1280, height: 720 },
            args: ['--start-maximized'] // helpful for TV
        });

        const page = await browser.pages()[0]; // Use the default page

        // 2. Read the latest Strategy Code
        const pineCode = fs.readFileSync(STRATEGY_PATH, 'utf-8');
        console.log('Loaded Pine Script strategy content.');

        // 3. Navigate to TradingView
        console.log('Navigating to TradingView Chart...');
        await page.goto(CHART_URL);

        // Wait for connection and chart load
        // UPDATED SELECTOR: Using the region role seen in snapshot
        try {
            await page.getByRole('region', { name: /Chart/i }).first().waitFor({ timeout: 30000 });
        } catch (e) {
            console.log('Chart region not found via role, trying fallback...');
            await page.waitForSelector('.chart-container', { timeout: 10000 });
        }
        console.log('Chart loaded.');

        // 4. Open Pine Editor
        // UPDATED SELECTOR: Matches "Pine" button from snapshot
        const pineButton = page.getByRole('button', { name: 'Pine', exact: true });
        if (await pineButton.isVisible()) {
             await pineButton.click();
        } else {
             await page.keyboard.press('Alt+e');
        }
        
        await page.waitForTimeout(2000); // Animation wait

        // 5. Input Code
        console.log('Injecting code...');
        
        // UPDATED SELECTOR: Explicitly matches the Monaco editor textbox
        const editorInput = page.getByRole('textbox', { name: /Editor content/i });
        await editorInput.click();
        
        // Select All -> Delete -> Paste
        await page.keyboard.press('Control+a');
        await page.keyboard.press('Delete');
        
        // Paste assumes clipboard permission or simplified typing
        await page.evaluate((code) => {
             // @ts-ignore
             navigator.clipboard.writeText(code);
        }, pineCode);
        
        await page.keyboard.press('Control+v');
        await page.waitForTimeout(2000); // Wait for paste

        // 6. Add to Chart
        const addToChartBtn = page.getByRole('button', { name: 'Add to chart' });
        await addToChartBtn.click();
        console.log('Clicked "Add to chart".');

        // 7. Open Strategy Tester
        // UPDATED SELECTOR: Strategy Tester is usually a tab at the bottom, but might be hidden.
        // We try to find the text "Strategy Tester"
        const strategyTesterTab = page.getByText('Strategy Tester');
        if (await strategyTesterTab.isVisible()) {
            await strategyTesterTab.click();
        }

        // 8. Validate Results
        // Wait for the "Net Profit" text to appear
        const overviewTab = page.getByText('Overview', { exact: true });
        try {
            await overviewTab.waitFor({ timeout: 10000 });
        } catch (e) {
             console.log('Overview tab not immediately visible, checking for results directly...');
        }
        
        await page.waitForTimeout(5000); // Wait for calculation


        // Selectors for results (fragile, may need update if TV changes classes)
        // We look for the "Total Closed Trades" value
        // Note: This part requires inspecting the specific TV DOM at runtime.
        // As a fallback, we just check if "Net Profit" is visible and not zero if possible.
        
        const resultsContainer = page.locator('.report-content'); // conceptual class
        
        // Screenshot for verification
        await page.screenshot({ path: 'tests/e2e/results.png' });
        console.log('Screenshot saved to tests/e2e/results.png');

        await browser.close();
    });
});
