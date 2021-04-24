import Tarea from "../models/Tareas";

//funcion para obtener todas las Tareas registradas
export async function obtenerTareas(req, res) {
  try {
    const tareas = await Tarea.findAll({
      atributos: ["id", "nombre", "estado", "proyectoid"],
      order: [["id", "DESC"]],
    });
    res.json({
      data: tareas,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: " Algo Salio Mal",
      data: {},
    });
  }
}

//Funcion para obtener el id de una Tarea en expecifico
export async function obtenerIdTarea(req, res) {
  try {
    const { id } = req.params;
    const tarea = await Tarea.findOne({ where: { id } });
    res.json(tarea);
  } catch (error) {
    res.status(500).json({
      mensaje: " Algo Salio Mal",
      data: {},
    });
  }
}

//Funcion para registrar una nueva Tarea
export async function crearTarea(req, res) {
  //Extraer los parametros
  const { nombre, estado, proyectoid } = req.body;
  try {
    const TareaDB = await Tarea.create(
      {
        nombre,
        estado,
        proyectoid,
      },
      {
        fields: ["nombre", "estado", "proyectoid"],
      }
    );
    if (TareaDB) {
      return res.json({
        ok: true,
        mensaje: "Creado Correctamente",
        data: TareaDB,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: " Algo Salio Mal",
      data: {},
    });
  }
}
//funcion para actualizar una Tarea en especifico
export async function actualizarTarea(req, res) {
  try {
    const { id } = req.params;
    const { nombre, estado, proyectoid } = req.body;

    const Tareas = await Tarea.findOne({
      atributos: ["id", "nombre", "estado", "proyectoid"],
      where: { id },
    });
    const actualizarTarea = await Tarea.update(
      {
        nombre,
        estado,
        proyectoid,
      },
      {
        where: { id },
      }
    );
    return res.json({
      mensaje: "Tarea Actualizado Correctamente",
      data: actualizarTarea,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: " Algo Salio Mal No Se elimino el Tarea ",
    });
  }
}

//funcion para eliminar una Tarea en especifico
export async function eliminarTarea(req, res) {
  try {
    const { id } = req.params;
    const borrarFila = await Tarea.destroy({ where: { id } });
    res.json({
      mensaje: "Se elimino Correctamente  ",
      numero: borrarFila,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: " Algo Salio Mal No Se elimino el Tarea ",
    });
  }
}
//Funcion para obtener todas las tareas de un proyecto en especifico
export async function obtenerTareaxProyecto(req, res) {
  try {
    const { proyectoid } = req.params;
    const tareas = await Tarea.findAll({
      atributos: ["id", "estado", "proyectoid", "nombre"],
      where: { proyectoid },
    });
    res.json({
      tareas,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: " Algo Salio Mal No Se elimino el Tarea ",
    });
  }
}
