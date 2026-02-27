"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const child_process_1 = require("child_process");
const path = require("path");
let disposable;
function activate(context) {
    const soundPath = path.join(context.extensionPath, "sounds", "error.mp3");
    disposable = vscode.window.onDidEndTerminalShellExecution((e) => {
        const config = vscode.workspace.getConfiguration("maakabhosadaaag");
        if (!config.get("enabled", true)) {
            return;
        }
        if (e.exitCode !== undefined && e.exitCode !== 0) {
            playSound(soundPath, config.get("volume", 1.0));
        }
    });
    context.subscriptions.push(disposable);
}
function playSound(soundPath, volume) {
    let command;
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
    (0, child_process_1.exec)(command, (err) => {
        if (err) {
            console.error("maakabhosadaaag: failed to play sound", err.message);
        }
    });
}
function deactivate() {
    disposable?.dispose();
}
//# sourceMappingURL=extension.js.map