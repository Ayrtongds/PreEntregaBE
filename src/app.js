const express = require("express");
const productRouter = require("./routes/products.router.js");
const cartRouter = require("./routes/carts.router.js");
const app = express();
const PUERTO = 8080;
const viewsRouter = require("./routes/views.router.js");

const socket = require("socket.io");
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(express.json());
app.use(express.static("./src/public"));

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/", viewsRouter);

const httpServer = app.listen(PUERTO, () => {
  console.log(`Escuchando en el http://localhost:${PUERTO}`);
});

const io = socket(httpServer);

io.on("connection"),
  () => {
    console.log("Un cliente se conecta");
  };
