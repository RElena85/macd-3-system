# MACD Money Map - Alert Configuration Guide

## 📢 Alert System Overview

This guide explains how to configure TradingView alerts for the MACD Money Map strategy.

---

## 🎯 Alert Tiers

### Tier 1: Setup Alerts (Watchlist)
**Purpose:** Notify when potential setups are forming

| Alert Name | Condition | Priority |
|------------|-----------|----------|
| `MACD Approaching Qualified Zone` | MACD moving away from zero, nearing threshold | Low |
| `Divergence Forming` | Price/MACD divergence detected | Medium |
| `MTF Alignment Shifting` | Higher TF changing direction | Medium |

### Tier 2: Entry Alerts (Action Required)
**Purpose:** Signal when entry conditions are met

| Alert Name | Condition | Priority |
|------------|-----------|----------|
| `LONG ENTRY: A+ Setup` | All systems aligned for long | High |
| `LONG ENTRY: A Setup` | Strong long setup confirmed | High |
| `SHORT ENTRY: A+ Setup` | All systems aligned for short | High |
| `SHORT ENTRY: A Setup` | Strong short setup confirmed | High |
| `Reversal Entry Triggered` | Divergence + Histogram confirm | High |

### Tier 3: Management Alerts
**Purpose:** Trade management notifications

| Alert Name | Condition | Priority |
|------------|-----------|----------|
| `Take Partial Profit` | 2R target reached | High |
| `Move Stop to Breakeven` | After partial profit taken | Medium |
| `Trail Stop Signal` | Conditions for trailing | Medium |
| `Exit Signal: Opposite Cross` | MACD crossed against position | High |

---

## 📝 Alert Message Templates

### Entry Alert Template
```
📈 MACD MONEY MAP - {{direction}} ENTRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 Grade: {{grade}}
📊 Instrument: {{ticker}}
⏰ Timeframe: {{interval}}

✅ SYSTEMS CHECK:
{{trend_status}} Trend: Zero Line ({{macd_value}})
{{setup_status}} Setup: {{setup_type}}
{{trigger_status}} Trigger: {{histogram_pattern}}
{{structure_status}} Structure: {{level_type}} @ {{level_price}}

💰 TRADE PARAMETERS:
Entry: {{close}}
Stop: {{stop_price}}
Target 1: {{target_1}} (2R)
Risk: {{risk_amount}}

📊 Score: {{score}}/8
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Setup Alert Template
```
👀 MACD MONEY MAP - SETUP FORMING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 {{ticker}} | {{interval}}
🔔 {{alert_type}}

Status: {{description}}
Action: Monitor for entry trigger

Current MACD: {{macd_value}}
Distance: {{distance_from_zero}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Exit Alert Template
```
🚨 MACD MONEY MAP - EXIT SIGNAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 {{ticker}} | {{interval}}
⚠️ {{exit_type}}

Action Required: {{action}}
Current Price: {{close}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## ⚙️ TradingView Alert Configuration

### Step 1: Add Indicator to Chart
1. Open TradingView chart
2. Add MACD Money Map indicator
3. Configure indicator settings

### Step 2: Create Alert
1. Click "Alert" button (or press Alt+A)
2. Select "MACD Money Map" as condition source
3. Choose specific alert condition
4. Configure alert settings

### Step 3: Alert Settings

**Condition Options:**
```
- Long Entry Signal
- Short Entry Signal
- Divergence Alert
- Histogram Flip
- MTF Alignment Change
- Target 1 Reached
- Opposite Crossover
```

**Trigger Settings:**
- Once Per Bar Close (recommended)
- Once Per Bar
- Every time condition is true

**Expiration:**
- Open-ended (for permanent alerts)
- Specific date (for time-limited setups)

---

## 📱 Notification Channels

### TradingView Pro Features

| Channel | Setup |
|---------|-------|
| **Pop-up** | Always enabled |
| **Sound** | Select from TradingView sounds |
| **Email** | Link email in settings |
| **Mobile Push** | Install TradingView app |
| **Webhook** | Enter webhook URL |

### Webhook Integration

For automated execution or external logging:

```json
{
  "webhook_url": "https://your-webhook-endpoint.com/alert",
  "payload": {
    "strategy": "MACD_Money_Map",
    "signal": "{{strategy.order.action}}",
    "ticker": "{{ticker}}",
    "price": "{{close}}",
    "time": "{{time}}",
    "interval": "{{interval}}"
  }
}
```

---

## 📊 Alert Allocation Strategy

### TradingView Pro Limits
- **Total Alerts:** 400

### Recommended Allocation

**Primary Watchlist (10 instruments × 6 alerts = 60 alerts)**
```
Per Instrument:
- 1x Long Entry Alert
- 1x Short Entry Alert
- 1x Divergence Alert
- 1x Target Alert
- 1x Exit Alert
- 1x Setup Forming Alert
```

**Secondary Watchlist (20 instruments × 3 alerts = 60 alerts)**
```
Per Instrument:
- 1x Long Entry Alert
- 1x Short Entry Alert
- 1x Exit Alert
```

**Reserve:** 280 alerts for additional setups

---

## 🔔 Alert Conditions in Pine Script

### Entry Signal Condition
```pinescript
// Long Entry Condition
longEntryCondition = 
    trendBullish and              // System 1: Zero line
    crossoverQualified and        // System 1: Distance
    confirmationComplete and      // System 1: Candles
    mtfAligned and                // System 3: MTF
    histogramConfirmed            // System 3: Trigger

alertcondition(longEntryCondition, 
    title="Long Entry Signal", 
    message="LONG ENTRY: {{ticker}} @ {{close}}")
```

### Divergence Alert Condition
```pinescript
// Bullish Divergence Alert
bullishDivergence = 
    priceLowerLow and 
    macdHigherLow

alertcondition(bullishDivergence, 
    title="Bullish Divergence", 
    message="Bullish Divergence forming on {{ticker}}")
```

### Histogram Flip Condition
```pinescript
// Histogram Flip Alert
histogramFlip = 
    (histogram > 0 and histogram[1] <= 0) or
    (histogram < 0 and histogram[1] >= 0)

alertcondition(histogramFlip, 
    title="Histogram Flip", 
    message="Histogram flipped on {{ticker}}")
```

---

## ✅ Alert Testing Checklist

Before going live:

- [ ] Test each alert type fires correctly
- [ ] Verify message format is readable
- [ ] Confirm notifications reach all channels
- [ ] Test webhook payloads (if used)
- [ ] Set appropriate alert expiration
- [ ] Document which alerts are active

---

## 🔧 Troubleshooting

### Alert Not Firing
1. Check indicator is on chart
2. Verify alert condition is correct
3. Ensure "Once per bar close" is selected
4. Check alert hasn't expired

### Too Many Alerts
1. Review alert conditions for sensitivity
2. Increase distance threshold
3. Add additional filters
4. Remove duplicate alerts

### Missing Notifications
1. Check notification settings in TradingView
2. Verify email/phone settings
3. Check spam folder for emails
4. Ensure mobile app is installed

---

*Document Version: 1.0*  
*Last Updated: January 2026*
