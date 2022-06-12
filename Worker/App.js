import UI from "../Dependencies/UI-JS/UI.js";

const app = new UI("<div class='console'><div class='console-history'><div class='console-input-log'>1 + 2</div><div class='console-output-log'>3</div></div><input type='text' class='console-input' autofocus spellcheck='false'></div>", { type: "text/html" });

const appUI = {
    "app": app.file
}

postMessage(appUI);