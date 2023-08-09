import { Router } from "express"

class EventRoutes {
    public router: Router
    constructor() {
        this.router = Router()
        this.initRouters();
    }
    initRouters() {
        this.router.post('/')
    }
}

export { EventRoutes }