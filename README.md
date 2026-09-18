# ETHUSDC Mobile Net Risk Calculator

## Fee model
- Entry fee: 0%
- TP fee: 0%
- Stop taker fee: 0.04%
- Default stop slippage: 8.725691 bps
- Default net risk: 3 USDC
- Default target: 2R

## Entry modes
Given High H and Low L:
- High 1/3 = L + 2/3 × (H-L)
- 1/2 = L + 1/2 × (H-L)
- Low 1/3 = L + 1/3 × (H-L)
- Fixed = manual entry price

## Best iPhone use
Recommended: host this folder on any HTTPS static host (e.g. GitHub Pages), open in Safari, then Share → Add to Home Screen.
The included service worker caches the app for offline use after the first successful load.

This tool calculates only. It does not submit Binance orders.
