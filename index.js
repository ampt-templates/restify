import restify from "restify";
import { http } from "@ampt/sdk";

const app = restify.createServer();

app.get("/", (_req, res, next) => {
  res.send("Hello World");
  next();
});

http.node.use(app);
