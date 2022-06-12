/**
 * @class A mini SPA router module.
 */
class Router {
    /**
     * 
     * @param {Object} app MVC app
     */
    constructor(app) {
        this.app = app;
        this.Get = this.get.bind(this);
        window.addEventListener("DOMContentLoaded", this.Get);
        window.addEventListener("popstate", this.Get);
        window.addEventListener("hashChange", this.Get);
    }

    /**
     * Loads Route
     * @param {String} view page
     * @param {String} url route
     * @returns false.
     */
    get(view, url) {
        window.history.pushState(null, null, url);
        this.app.RenderView(view);
        return false
    }
}

export default Router;