import express, { Application } from "express";
import { connect } from "./infra/database";
import { errorMiddleware } from "./middlewares/error.middleware";
import { EventRoutes } from "./routes/event.routs";

class App{
    public app: Application;
    private eventRoutes = new EventRoutes()
    constructor() {
        this.app = express();
        this.middlewaresInitalize();
        this.initializeRoutes();
        this.interceptionError();
        connect();
    }
    initializeRoutes(){
        this.app.use('/events', this.eventRoutes.router)
    }
    interceptionError(){
        this.app.use(errorMiddleware)
    }
    middlewaresInitalize(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
    }
    listen(){
        this.app.listen(3333, ()=>console.log('Server in running'))
    }
}
export { App }