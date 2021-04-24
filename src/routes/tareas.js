import { Router } from "express";
import {
  actualizarTarea,
  crearTarea,
  eliminarTarea,
  obtenerIdTarea,
  obtenerTareas,
  obtenerTareaxProyecto,
} from "../controllers/tarea.controller";
const router = Router();

//Ruta de Crear una nueva Tarea
router.post("/", crearTarea);
//Ruta de Obtener todas las tareas
router.get("/", obtenerTareas);
//Ruta de  obtener el id de una tarea
router.get("/:id", obtenerIdTarea);
//Ruta para eliminar el id de una tarea
router.delete("/:id", eliminarTarea);
//Ruta para actualizar una tarea en especifico
router.put("/:id", actualizarTarea);
//Obtener la ruta de los proyectos de cada tarea en especifico
router.get("/proyecto/:proyectoid", obtenerTareaxProyecto);
export default router;
