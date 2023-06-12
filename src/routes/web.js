import express  from "express";
import chatbotcontroller from "../controllers/chatbotcontroller";



let router = express.Router();

let initWebRouters = (app) =>{
    router.get ("/",chatbotcontroller.test);
    router.get("/webhook", chatbotcontroller.getwebhook);
    router.post("/webhook", chatbotcontroller.postwebhook);

    return app.use("/",router);
};

module.exports = initWebRouters; 
