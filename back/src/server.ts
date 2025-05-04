import express from "express";
import morgan from "morgan";
import cors from "cors";
import indexRouter from "./routes/indexRoutes"


const server = express();

server.use(morgan("dev")); // esto sirve para ver qué peticiones llegan al servidor, lo que facilita la depuración y el monitoreo.
server.use(cors());        // esto se usa para que el frontend pueda acceder a un backend en otro dominio.
server.use(express.json());// esto convierte el body en un objeto de javascript

server.use(indexRouter);

export default server;