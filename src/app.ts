import express from "express";
import router from "./router/router";
import "dotenv/config";

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`~~ Le serveur a démarré sur: http://localhost:${port} ~~`);
});
