# maakabhosadaaag

A VS Code extension that plays a custom sound whenever a terminal command fails (exits with a non-zero code).

## Setup

1. Drop your sound file at `sounds/error.mp3`
2. Install the extension
3. Run a failing command in the integrated terminal — hear the sound

## Settings

| Setting | Default | Description |
|---|---|---|
| `maakabhosadaaag.enabled` | `true` | Enable or disable the error sound |
| `maakabhosadaaag.volume` | `1.0` | Volume level 0–1 (macOS only) |

## Requirements

- VS Code 1.93+
- A sound file at `sounds/error.mp3`
- macOS: `afplay` (built-in)
- Linux: `paplay` or `aplay`
- Windows: PowerShell
