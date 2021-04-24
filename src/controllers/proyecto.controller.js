import Proyecto from "../models/Proyecto";

//funcion para obtener todos los proyectos registrados
export async function obtenerProyectos(req, res) {
  try {
    const proyectos = await Proyecto.findAll();
    res.json({
      data: proyectos,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: " Algo Salio Mal",
      data: {},
    });
  }
}

//Funcion para obtener el id de un proyecto en expecifico
export async function obtenerIdProyecto(req, res) {
  try {
    const { id } = req.params;
    const proyecto = await Proyecto.findOne({ where: { id } });
    res.json({
      proyecto,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: " Algo Salio Mal",
      data: {},
    });
  }
}

//funcion para insertar los proyectos dentro de la base de datos
export async function crearProyecto(req, res) {
  //Extraer los parametros
  const { nombre, prioridad, descripcion, fecha_entrega } = req.body;
  try {
    const proyectoDB = await Proyecto.create(
      {
        nombre,
        prioridad,
        descripcion,
        fecha_entrega,
      },
      {
        fields: ["nombre", "prioridad", "descripcion", "fecha_entrega"],
      }
    );
    if (proyectoDB) {
      return res.json({
        ok: true,
        mensaje: "Creado Correctamente",
        data: proyectoDB,
      });
    }
  } catch (error) {
    res.status(500).json({
      mensaje: " Algo Salio Mal",
      data: {},
    });
  }
}

//Funcion para actualizar un proyecto
export async function actualizarProyecto(req, res) {
  try {
    const { id } = req.params;
    const { nombre, prioridad, descripcion, fecha_entrega } = req.body;

    const proyectos = await Proyecto.findAll({
      atributos: ["id", "nombre", "prioridad", "descripcion", "fecha_entrega"],
      where: { id },
    });
    if (proyectos.length > 0) {
      proyectos.forEach(async (proyecto) => {
        await proyecto.update({
          nombre,
          prioridad,
          descripcion,
          fecha_entrega,
        });
      });
    }
    return res.json({
      mensaje: "Proyecto Actualizado Correctamente",
      data: proyectos,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: " Algo Salio Mal No Se elimino el Proyecto ",
    });
  }
}

//funcion para eliminar un proyecto en especifico
export async function eliminarProyecto(req, res) {
  try {
    const { id } = req.params;
    const borrarFila = await Proyecto.destroy({ where: { id } });
    res.json({
      mensaje: "Se elimino Correctamente  ",
      numero: borrarFila,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: " Algo Salio Mal No Se elimino el Proyecto ",
    });
  }
}
