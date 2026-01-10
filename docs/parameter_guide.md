# MACD Money Map - Parameter Tuning Guide

## 📊 Overview

This guide helps you optimize the MACD Money Map parameters for different instruments and market conditions.

---

## 🔧 Core MACD Parameters

### Standard Settings
| Parameter | Default | Range | Purpose |
|-----------|---------|-------|---------|
| Fast Length | 12 | 8-15 | Responsiveness |
| Slow Length | 26 | 20-30 | Smoothing |
| Signal Length | 9 | 7-12 | Signal line smoothing |
| Source | Close | OHLC | Price input |

### When to Adjust

**Faster Settings (10, 22, 7):**
- Shorter timeframes (5m, 15m)
- High volatility markets
- Scalping strategies
- ⚠️ More signals, more false positives

**Slower Settings (14, 30, 11):**
- Longer timeframes (4H, Daily)
- Low volatility markets
- Position trading
- ⚠️ Fewer signals, better quality

---

## 📏 Distance Threshold Tuning

### The Challenge
The "distance from zero" threshold varies dramatically by instrument price and volatility.

### Method 1: ATR-Based (Recommended)

```
Threshold = ATR(14) × Multiplier

Multipliers by Asset Class:
- Crypto: 1.5 - 2.0 (high volatility)
- Forex: 0.8 - 1.2 (moderate volatility)
- Equities: 1.0 - 1.5 (varies by stock)
- Indices: 1.0 - 1.3 (moderate volatility)
```

**Advantages:**
- Automatically adjusts to volatility
- Works across different price levels
- No manual recalibration needed

### Method 2: Percentage-Based

```
Threshold = Price × Percentage

Percentages by Asset Class:
- Crypto: 0.5% - 1.0%
- Forex: 0.1% - 0.2%
- Equities: 0.3% - 0.5%
```

### Method 3: Fixed Value (Simplest)

Use visual inspection to determine appropriate values:

| Instrument | Suggested Threshold | Notes |
|------------|---------------------|-------|
| BTC/USD | 500 - 1000 | Adjust for price level |
| ETH/USD | 25 - 50 | Scale with price |
| EUR/USD | 0.0010 - 0.0020 | Relatively stable |
| GBP/USD | 0.0015 - 0.0025 | More volatile |
| SPY | 0.3 - 0.7 | Low volatility ETF |
| QQQ | 0.5 - 1.0 | More volatile than SPY |
| AAPL | 0.8 - 1.5 | Mega-cap, moderate vol |
| TSLA | 2.0 - 5.0 | High volatility |

### Calibration Process

1. **Add MACD to chart** with standard settings
2. **Identify recent ranging periods** (chop zones)
3. **Measure MACD values** during those periods
4. **Set threshold above** the chop zone range
5. **Backtest** to validate threshold catches good signals

---

## ⏱️ Confirmation Candle Settings

### Default: 2-3 Candles

**Fewer Candles (1-2):**
- Faster entry
- More signals
- Higher false positive rate
- Better for: Strong trends, lower timeframes

**More Candles (3-4):**
- Slower entry
- Fewer signals
- Lower false positive rate
- Better for: Choppy markets, higher timeframes

### Timeframe-Based Recommendations

| Timeframe | Suggested Candles | Reasoning |
|-----------|-------------------|-----------|
| 5m | 2 | Fast-moving, need quick entries |
| 15m | 2-3 | Balance speed and confirmation |
| 1H | 2-3 | Standard setting |
| 4H | 3 | More time, more confirmation |
| Daily | 2 | Each candle is significant |

---

## 🔄 Divergence Detection Parameters

### Pivot Detection
| Parameter | Default | Range | Effect |
|-----------|---------|-------|--------|
| Left Bars | 5 | 3-10 | Lookback for swing high/low |
| Right Bars | 2 | 1-5 | Confirmation bars |
| Lookback Period | 10 | 5-20 | How far back to compare |

**Tighter Settings (3, 1, 5):**
- Detects more divergences
- Includes minor divergences
- More signals, more noise

**Looser Settings (10, 3, 20):**
- Detects fewer divergences
- Only major divergences
- Fewer signals, higher quality

---

## 📊 Histogram Pattern Parameters

### The Flip
| Parameter | Default | Range |
|-----------|---------|-------|
| Min Consecutive Bars | 4 | 3-6 |

**Lower (3 bars):** More flips detected, some may be weak
**Higher (5-6 bars):** Fewer flips, but stronger signals

### The Shrinking Tower
| Parameter | Default | Range |
|-----------|---------|-------|
| Min Shrinking Bars | 3 | 2-5 |
| Shrink Threshold | 50% | 30-70% |

**Sensitivity Trade-off:**
- Lower min bars + lower threshold = More signals
- Higher min bars + higher threshold = Stronger signals

### The Zero Bounce
| Parameter | Default | Range |
|-----------|---------|-------|
| Bounce Threshold | 10% of typical range | 5-20% |

---

## 🕐 Multi-Timeframe Settings

### Timeframe Multiplier
| Setting | Description |
|---------|-------------|
| 4x (Default) | Standard multiplier |
| 3x | More responsive, more noise |
| 5x | Smoother, but may miss turns |

### Recommended Hierarchies

**Scalping (High Frequency):**
```
Trigger: 1m or 5m
Setup: 15m
Bias: 1H
```

**Day Trading (Standard):**
```
Trigger: 15m or 1H
Setup: 4H
Bias: Daily
```

**Swing Trading:**
```
Trigger: 4H
Setup: Daily
Bias: Weekly
```

---

## ⚖️ Risk Management Parameters

### Position Sizing
| Parameter | Conservative | Moderate | Aggressive |
|-----------|--------------|----------|------------|
| Risk per Trade | 0.5% | 1% | 2% |
| Max Daily Loss | 2% | 3% | 5% |
| Max Open Trades | 2 | 3 | 5 |

### Stop Loss Buffer
| Market Type | ATR Multiplier |
|-------------|----------------|
| Low Volatility | 0.5 ATR |
| Normal | 1.0 ATR |
| High Volatility | 1.5 ATR |

### Target Settings
| Approach | Target 1 | Target 2 |
|----------|----------|----------|
| Conservative | 1.5R | 2R |
| Standard | 2R | 3R |
| Aggressive | 2.5R | Trail |

---

## 🧪 Optimization Process

### Step 1: Baseline Test
1. Use default parameters
2. Backtest 100+ trades
3. Record metrics

### Step 2: Single Variable Testing
1. Change ONE parameter at a time
2. Test same period
3. Compare to baseline

### Step 3: Sensitivity Analysis
Test parameter ranges:
```
Parameter: Distance Threshold
Test values: 0.5x, 0.75x, 1x, 1.25x, 1.5x of default
Record: Win rate, Profit factor, # of trades
```

### Step 4: Walk-Forward Testing
1. Optimize on Period A
2. Test on Period B (unseen)
3. If results hold, parameters are robust

### Step 5: Live Paper Trading
- Test optimized parameters in real-time
- Minimum 4 weeks
- Track slippage and real-world execution

---

## ⚠️ Optimization Warnings

### Over-Optimization Signs
- ❌ Parameters only work on specific date range
- ❌ Results too good to be true (>80% win rate)
- ❌ Very few trades in backtest (<50)
- ❌ Extreme parameter values

### Best Practices
- ✅ Use large sample sizes (100+ trades)
- ✅ Test across multiple market conditions
- ✅ Keep parameters within reasonable ranges
- ✅ Accept that no parameters work all the time
- ✅ Review and adjust quarterly

---

## 📋 Parameter Checklist by Instrument

### Crypto Setup
```
MACD: 12, 26, 9
Distance: ATR(14) × 1.5
Confirmation: 2 candles
Divergence Lookback: 8
Min Flip Bars: 4
Risk: 1% per trade
Stop: 1.5 ATR buffer
```

### Forex Setup
```
MACD: 12, 26, 9
Distance: ATR(14) × 1.0
Confirmation: 2-3 candles
Divergence Lookback: 10
Min Flip Bars: 4
Risk: 1% per trade
Stop: 1.0 ATR buffer
```

### Equities Setup
```
MACD: 12, 26, 9
Distance: ATR(14) × 1.2
Confirmation: 2 candles
Divergence Lookback: 10
Min Flip Bars: 4
Risk: 1% per trade
Stop: 1.2 ATR buffer
```

---

*Document Version: 1.0*  
*Last Updated: January 2026*
