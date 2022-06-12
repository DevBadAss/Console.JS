import MVC from "../MVC.js";
import HashRouter from "../HashRouter.js";
import Router from "../Router.js";


const app = new MVC("app");
const hash_router = new HashRouter(app);
const router = new Router(app);

app.addView({
    name: "models",
    model: {},
    view(model) {
        return "<span id='test'> you are dope</span>";
    },
    controller(model) {
        document.getElementById("test").onclick = () => {
            router.get("modelling", "#/gold")
        }
    }
});

app.addView({
    name: "modelling",
    model: {},
    view(model) {
        return "<span id='test'> good</span>";
    },
    controller(model) {
        document.getElementById("test").onclick = () => {
            router.get("models", "/")
        }
    }
});

router.get("modelling", "/#/gold")
    // hash_router.addRoute("modelling", "#/gold");

// hash_router.get("/gold")