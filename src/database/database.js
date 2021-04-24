import Sequelize from "sequelize";
//El nombre de la base de datos
//El nombre de usuario de la base de Datos
//La Contraseña de la base de Datos
export const sequelize = new Sequelize(
  // El usuario, la contraseña, la ubicacion, el puerto y el nombre de la base de Datos
  "postgres://postgres:WILDworld2017@localhost:5433/practica",
  /* `${process.env.DB_NAME}`,
  `${process.env.DB_USER}`,
  `${process.env.DB_PASSWORD}`, */
  /*  "practica",
  "postgres",
  "WILDworld2017" */ {
    //host: process.env.DB_HOST,
    dialect: "postgres",

    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
  }
  /* new Sequelize(
  "practica",
  "postgres",
  "WILDworld2017",
  {
    //la ubicacion de la base de Datos
    host: "localhost",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    
  } */
);
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "La conexión con la base de Datos se ha establecido correctamente."
    );
  })
  .catch((err) => {
    console.error(
      "Algo fallo, No se ha podido conectar a la base de datos:",
      err
    );
  });
