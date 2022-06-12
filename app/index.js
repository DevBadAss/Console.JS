import { keyup } from "../Controllers/Console.js";
import MVC from "../Dependencies/MVC-JS/MVC.js";
import Router from "../Dependencies/MVC-JS/Router.js";
import Render from "../Dependencies/ReqJS/Render.js";


const app = new MVC("app");
const router = new Router(app);
const AppUI = new Worker("../Worker/App.js", { type: "module" });
const routes = {
    "home": "console"
}

app.addView({
    name: "home",
    model: {},
    view(model) {
        AppUI.addEventListener("message", msg => {
            Render("app", msg.data.app, {
                datatype: "text",
                id: 0,
                resolve: (res) => {
                    keyup();
                }
            }, true);
        });
    },
    controller(model) {

    }
});

router.get("home", routes["home"]);