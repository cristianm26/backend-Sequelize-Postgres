import express, { json } from "express";
import morgan from "morgan";

//Importar Rutas
import proyectoRoutes from "./routes/proyectos";
import tareaRoutes from "./routes/tareas";

//Inicia la app
const app = express();
//Middlewares
app.use(morgan("dev"));
app.use(json());

//rutas
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareaRoutes);
export default app;
