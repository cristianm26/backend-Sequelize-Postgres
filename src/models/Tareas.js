import Sequelize from "sequelize";
import { sequelize } from "../database/database";

//Definimos una constante para guardar el modelo Tarea
const Tarea = sequelize.define(
  "tareas",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: Sequelize.TEXT,
    },
    estado: {
      type: Sequelize.BOOLEAN,
    },
    proyectoid: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

export default Tarea;
