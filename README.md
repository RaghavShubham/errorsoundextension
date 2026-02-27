# maakabhosadaaag

**Your terminal messed up. Now it's personal.**

A VS Code extension that plays a sound every time a command in your integrated terminal exits with a non-zero code. Think of it as emotional damage for your shell.

You typo'd `git psuh`? Sound.
`npm install` failed for the 47th time? Sound.
You ran `rm -rf /` and somehow survived? ...Sound.

No judgement. Just accountability.

---

## Features

- Automatically detects failed terminal commands (non-zero exit codes)
- Plays a sound so you can't just pretend it didn't happen
- Works on **macOS**, **Linux**, and **Windows**
- Configurable volume (because sometimes you need it loud, sometimes your manager is behind you)
- Toggle it on/off without uninstalling (for the faint of heart)

## Installation

1. Install from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Daijoubu.maakabhosadaaag)
2. That's it. There is no step 2. Go break something.

## Settings

| Setting | Default | Description |
|---|---|---|
| `maakabhosadaaag.enabled` | `true` | Enable or disable the sound. Coward mode. |
| `maakabhosadaaag.volume` | `0.5` | Volume level from `0` (silent regret) to `1` (full disappointment). macOS only. |

You can change these in **Settings** > search for `maakabhosadaaag`.

## Platform Support

| Platform | Audio Backend | Status |
|---|---|---|
| macOS | `afplay` (built-in) | Works out of the box |
| Linux | `paplay` / `aplay` | Requires PulseAudio or ALSA |
| Windows | PowerShell `SoundPlayer` | Works out of the box |

## Requirements

- VS Code **1.93** or later
- A working audio output (headphones count, speaker-blasting in the office is encouraged)

## FAQ

**Q: Can I use my own sound?**
A: Replace `sounds/error.mp3` in the extension directory with your own MP3. Want your mom's voice? A sad trombone? The Windows XP shutdown sound? Go wild.

**Q: Why is it called maakabhosadaaag?**
A: Because that's what you say when your code doesn't work.

**Q: Is this a joke extension?**
A: The sound is a joke. The pain is real.

**Q: It's too loud / too quiet.**
A: Adjust `maakabhosadaaag.volume` in settings. On macOS, `0` is silence and `1` is "the whole office knows you messed up".

## Contributing

Found a bug? Ironic.

Open an issue or PR at [GitHub](https://github.com/shubhamraghav/errorsoundextention).

## License

[MIT](LICENSE) - Do whatever you want. Just like your terminal commands.
