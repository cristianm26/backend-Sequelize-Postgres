import { Router } from "express";
import {
  actualizarProyecto,
  crearProyecto,
  eliminarProyecto,
  obtenerIdProyecto,
  obtenerProyectos,
} from "../controllers/proyecto.controller";
const router = Router();

//Ruta de Crear un nuevo Proyecto
router.post("/", crearProyecto);
//Ruta de Obtener todos los proyectos
router.get("/", obtenerProyectos);
//Ruta de  obtener el id de un proyecto
router.get("/:id", obtenerIdProyecto);
//Ruta para eliminar el id de un Proyecto
router.delete("/:id", eliminarProyecto);
//Ruta para actualizar un producto en especifico
router.put("/:id", actualizarProyecto);
export default router;
