export function keyup() {
    const history = document.querySelector(".console-history");
    const consoleInput = document.querySelector(".console-input");

    function Add(inp, output) {
        const Output = output instanceof Array ? `[${output.join(",")}]` : output.toString();
        const inputLog = document.createElement("div");
        const outputLog = document.createElement("div");

        inputLog.classList.add("console-input-log");
        outputLog.classList.add("console-output-log");

        inputLog.textContent = `>${inp}`;
        outputLog.textContent = Output;

        history.append(inputLog, outputLog);
    }

    consoleInput.addEventListener("keyup", e => {
        const code = consoleInput.value.trim();

        if (code.length === 0) {
            return;
        }

        if (e.key === "Enter") {
            try {
                Add(code, eval(code));
            } catch (err) {
                Add(code, err);
            }
            consoleInput.value = "";
            history.scrollTop = history.scrollHeight;
        }
    })
}