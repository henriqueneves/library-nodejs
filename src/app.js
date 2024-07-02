import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDatabase();

connection.on("error", (e) => {
    console.error(e);
});

connection.once("open", () => {
    console.log("Connected with database.");
})

const app = express();
routes(app);

export default app;