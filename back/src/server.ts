import express from "express";
import morgan from "morgan";
import cors from "cors";
import indexRouter from "./routes/indexRoutes"


const server = express();

server.use(morgan("dev")); // esto sirve para ver qué peticiones llegan al servidor, lo que facilita la depuración y el monitoreo.
server.use(cors({
  origin: [
    "https://lotus-spa-seven.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000",
  ],
  credentials: true,
}));                       // esto se usa para que el frontend pueda acceder a un backend en otro dominio.
server.use(express.json());// esto convierte el body en un objeto de javascript

// Health check endpoint — used by Render and the keep-alive ping
server.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

server.use(indexRouter);

export default server;