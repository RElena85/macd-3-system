# MACD Money Map - Complete Trading Rules

## 📋 Table of Contents
1. [Core Philosophy](#core-philosophy)
2. [System 1: Trend Rules](#system-1-trend-rules)
3. [System 2: Reversal Rules](#system-2-reversal-rules)
4. [System 3: Confirmation Rules](#system-3-confirmation-rules)
5. [Entry Rules](#entry-rules)
6. [Exit Rules](#exit-rules)
7. [Risk Management](#risk-management)
8. [Trade Grading](#trade-grading)

---

## Core Philosophy

### The Three Pillars
1. **Don't trade every crossover** - Quality over quantity
2. **Don't guess reversals** - Divergence is an alert, not an entry
3. **Respect higher timeframes** - One signal lies, three tell the truth

### What Causes Most Losses
- ❌ Trading crossovers in the "chop zone" near zero
- ❌ Entering on divergence alone without confirmation
- ❌ Ignoring higher timeframe direction
- ❌ Entering mid-candle instead of at close

---

## System 1: Trend Rules

### 1.1 Zero Line Rule (THE LAW)

| MACD Position | Allowed Trades | Forbidden Trades |
|---------------|----------------|------------------|
| Above Zero | LONGS ONLY | ❌ No Shorts |
| Below Zero | SHORTS ONLY | ❌ No Longs |

**NO EXCEPTIONS** - This is non-negotiable.

### 1.2 Crossover Detection

**Bullish Crossover:**
- MACD line crosses ABOVE Signal line
- Occurs when MACD > 0 = Valid long setup

**Bearish Crossover:**
- MACD line crosses BELOW Signal line
- Occurs when MACD < 0 = Valid short setup

### 1.3 Distance Qualification (Chop Zone Avoidance)

**The Problem:** Crossovers near zero line occur in ranging markets → whipsaws

**The Solution:** Only trade crossovers FAR from zero

| Instrument Type | Minimum Distance | Example |
|-----------------|------------------|---------|
| Crypto (BTC) | ±500+ | MACD > 500 for longs |
| Forex (EURUSD) | ±0.0015+ | MACD < -0.0015 for shorts |
| Equities | ±0.5+ | Varies by stock price |

**Dynamic Method:** Use ATR-based threshold
```
Threshold = ATR(14) × Multiplier
- Crypto: Multiplier = 1.5
- Forex: Multiplier = 1.0
- Equities: Multiplier = 1.2
```

### 1.4 Confirmation Delay

**Rule:** Wait 2-3 candles after crossover before entry

**Why:** Reduces false signals from temporary spikes

**Implementation:**
1. Crossover detected → Start counting
2. Count 2-3 candles
3. Verify crossover still valid (MACD still in correct position)
4. If valid → Proceed to entry checklist
5. If invalidated → Cancel signal

---

## System 2: Reversal Rules

### 2.1 Divergence (ALERT - Not Entry)

**Bullish Divergence:**
- Price makes **Lower Low**
- MACD makes **Higher Low**
- Meaning: Selling momentum weakening
- Status: **ALERT** - Potential bottom forming

**Bearish Divergence:**
- Price makes **Higher High**
- MACD makes **Lower High**
- Meaning: Buying momentum weakening
- Status: **ALERT** - Potential top forming

⚠️ **CRITICAL:** Divergence alone is NOT an entry signal. Wait for histogram trigger.

### 2.2 Histogram Patterns (THE TRIGGER)

#### Pattern A: The Flip
**Definition:** First histogram bar in opposite direction after 4+ consecutive bars

**Bullish Flip:**
- 4+ red (negative) histogram bars
- First green (positive) bar appears
- = Momentum regime shift to bullish

**Bearish Flip:**
- 4+ green (positive) histogram bars
- First red (negative) bar appears
- = Momentum regime shift to bearish

#### Pattern B: The Shrinking Tower
**Definition:** 3+ consecutive bars getting smaller (same color)

**Shrinking Red (Bullish Signal):**
- Red bars progressively smaller
- Selling momentum exhausting
- Prepare for potential long

**Shrinking Green (Bearish Signal):**
- Green bars progressively smaller
- Buying momentum exhausting
- Prepare for potential short

**Threshold:** Consider significant when bars shrink > 50% from peak

#### Pattern C: The Zero Bounce
**Definition:** Histogram approaches zero but doesn't cross, then moves away

**Interpretation:**
- This is a **CONTINUATION** signal, not reversal
- Shows trend strength remains
- Can add to existing position or hold

### 2.3 Reversal Entry Combination

```
REVERSAL ENTRY = Divergence (Alert) + Histogram Pattern (Trigger)
```

**Entry Sequence:**
1. Identify divergence forming
2. Set alert status
3. Wait for histogram pattern (Flip or Shrinking Tower)
4. Pattern appears → Entry triggered
5. Execute per entry rules

---

## System 3: Confirmation Rules

### 3.1 Triple Timeframe Stack

**"One timeframe shows a signal; three show the truth."**

| Role | Timeframe | Signal Type | Purpose |
|------|-----------|-------------|---------|
| Bias | Daily | Zero Line Position | Direction filter |
| Setup | 4H | Crossover/Divergence | Trade identification |
| Trigger | 1H | Histogram Pattern | Entry timing |

**Timeframe Selection (4x Rule):**
| Your Trading TF | Check These |
|-----------------|-------------|
| 15m | 1H, 4H |
| 1H | 4H, Daily |
| 4H | Daily, Weekly |
| Daily | Weekly, Monthly |

### 3.2 Alignment Requirement

**HARD RULE:** All three timeframes must agree

| Bias TF | Setup TF | Trigger TF | Action |
|---------|----------|------------|--------|
| ✅ Bullish | ✅ Bullish | ✅ Bullish | LONG |
| ✅ Bearish | ✅ Bearish | ✅ Bearish | SHORT |
| Any mismatch | - | - | **NO TRADE** |

### 3.3 Price Structure Filter

**Signals improve at key levels:**

- ✅ Crossover AT support → Higher quality long
- ✅ Crossover AT resistance → Higher quality short
- ✅ Divergence + Strong candle pattern (hammer, engulfing) = "A+" trade

**For Breakouts:**
1. ❌ Don't enter on trendline break alone
2. ✅ Wait for price to break
3. ✅ Then wait for MACD confirmation
4. ✅ Enter on MACD signal after break

---

## Entry Rules

### 5-Point Entry Checklist

Before ANY entry, verify:

- [ ] **1. Bias confirmed** - Higher TF MACD supports direction
- [ ] **2. Setup identified** - Valid crossover or divergence
- [ ] **3. Distance qualified** - Far enough from zero (trend trades)
- [ ] **4. Timeframes aligned** - All 3 agree
- [ ] **5. Trigger present** - Histogram confirms

### Entry Timing

**RULE:** Enter at candle CLOSE only

- ❌ Never enter mid-candle
- ✅ Wait for candle to complete
- ✅ Verify signal still valid at close
- ✅ Execute entry

---

## Exit Rules

### Stop Loss Placement

**Long Trade:**
```
Stop = Recent Swing Low - (ATR × Buffer)
Buffer = 0.5 to 1.0 ATR
```

**Short Trade:**
```
Stop = Recent Swing High + (ATR × Buffer)
Buffer = 0.5 to 1.0 ATR
```

### Take Profit Strategy

**Standard: 2R Target**
- Calculate risk (Entry - Stop)
- Target = Entry + (2 × Risk)

**Partial Profit System:**
1. At 2R → Take 50% profit
2. Move stop to breakeven on remaining 50%
3. Trail remainder with opposite MACD crossover

### Trailing Stop Options

| Method | Description | Best For |
|--------|-------------|----------|
| Opposite Crossover | Exit when MACD crosses against you | Trend trades |
| ATR Trail | Trail by ATR × multiplier | Volatile markets |
| Structure | Trail to swing points | Clean trends |

---

## Risk Management

### Position Sizing

```
Position Size = (Account Risk $) / (Entry - Stop)

Example:
- Account: $10,000
- Risk per trade: 1% = $100
- Entry: $50.00
- Stop: $48.00
- Risk per share: $2.00
- Position Size: $100 / $2.00 = 50 shares
```

### Risk Rules

| Rule | Value |
|------|-------|
| Max risk per trade | 1-2% of account |
| Max daily loss | 3-5% of account |
| Max open positions | 3-5 |
| Max correlation | Don't load up on same sector |

---

## Trade Grading

### Grade Definitions

| Grade | Criteria | Action |
|-------|----------|--------|
| **A+** | All 3 TFs aligned + At S/R + Histogram confirms + Strong candle pattern | Full position, high conviction |
| **A** | All 3 TFs aligned + Histogram confirms | Full position |
| **B** | 2 TFs aligned + Histogram confirms | Reduced position or pass |
| **C** | Single TF signal only | **NO TRADE** |

### Scoring System (Optional)

| Component | Points |
|-----------|--------|
| Trend System signal | +2 |
| Reversal System signal | +3 |
| Each aligned timeframe | +1 |
| At key structure level | +1 |
| Strong candle pattern | +1 |
| Distance qualified | +1 |

**Minimum to trade: 5 points**

---

## Quick Reference Card

### Long Setup
```
✅ Daily MACD > 0 (Bias)
✅ 4H Bullish Crossover/Divergence (Setup)
✅ 1H Histogram Flip/Pattern (Trigger)
✅ At support level (Structure)
✅ Far from zero (Distance)
→ ENTER LONG at candle close
→ Stop below swing low
→ Target 2R
```

### Short Setup
```
✅ Daily MACD < 0 (Bias)
✅ 4H Bearish Crossover/Divergence (Setup)
✅ 1H Histogram Flip/Pattern (Trigger)
✅ At resistance level (Structure)
✅ Far from zero (Distance)
→ ENTER SHORT at candle close
→ Stop above swing high
→ Target 2R
```

---

*Document Version: 1.0*  
*Last Updated: January 2026*
