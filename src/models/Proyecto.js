import Sequelize from "sequelize";
import { sequelize } from "../database/database";
import Tarea from "./Tareas";
//Definimos una constante para guardar el modelo Proyecto
const Proyecto = sequelize.define(
  "proyectos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: Sequelize.TEXT,
    },
    prioridad: {
      type: Sequelize.INTEGER,
    },
    descripcion: {
      type: Sequelize.TEXT,
    },
    fecha_entrega: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);
Proyecto.hasMany(Tarea, { foreignKey: "proyectoid", sourceKey: "id" });
Tarea.belongsTo(Proyecto, { foreignKey: "proyectoid", sourceKey: "id" });

export default Proyecto;
