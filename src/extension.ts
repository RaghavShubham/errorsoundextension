import * as vscode from "vscode";
import { exec } from "child_process";
import * as path from "path";

let disposable: vscode.Disposable | undefined;

export function activate(context: vscode.ExtensionContext) {
  disposable = vscode.window.onDidEndTerminalShellExecution((e) => {
    const config = vscode.workspace.getConfiguration("maakabhosadaaag");
    if (!config.get<boolean>("enabled", true)) {
      return;
    }

    if (e.exitCode !== undefined && e.exitCode !== 0) {
      const selectedSound = config.get<string>("sound", "ma-ka-bhosda-aag");
      const soundPath = path.join(
        context.extensionPath,
        "sounds",
        `${selectedSound}.mp3`
      );
      playSound(soundPath, config.get<number>("volume", 1.0));
    }
  });

  context.subscriptions.push(disposable);
}

function playSound(soundPath: string, volume: number): void {
  let command: string;

  switch (process.platform) {
    case "darwin": {
      const vol = Math.round(volume * 255);
      command = `afplay -v ${vol} "${soundPath}"`;
      break;
    }
    case "linux":
      command = `paplay "${soundPath}" || aplay "${soundPath}"`;
      break;
    case "win32":
      command = `powershell -c "(New-Object Media.SoundPlayer '${soundPath}').PlaySync()"`;
      break;
    default:
      return;
  }

  exec(command, (err) => {
    if (err) {
      console.error("maakabhosadaaag: failed to play sound", err.message);
    }
  });
}

export function deactivate() {
  disposable?.dispose();
}
