CREATE TABLE IF NOT EXISTS proyectos(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre text NOT NULL CHECK (nombre <> ''),
    prioridad integer NOT NULL,
    descripcion text,
    fecha_entrega date NOT NULL
);

CREATE TABLE IF NOT EXISTS tareas(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    nombre text NOT NULL CHECK (nombre <> ''),
    estado boolean NOT NULL,
    proyectoId integer REFERENCES proyectos(id)
);

INSERT INTO proyectos (nombre, prioridad, descripcion, fecha_entrega)
VALUES ('Make a Web App', 1, 'Using Javascript', '2019-05-12');

INSERT INTO proyectos (nombre, prioridad, descripcion, fecha_entrega)
VALUES ('Make an App', 1, 'Using Dark', '2019-05-13');

INSERT INTO proyectos (nombre, prioridad, descripcion, fecha_entrega)
VALUES ('Make a Desktop App', 1, 'Using C++', '2019-05-14');

-- Insert task data
INSERT INTO tareas (nombre, estado, proyectoId)
VALUES ('Download Vuejs', false, 1);

INSERT INTO tareas (nombre, estado, proyectoId)
VALUES ('Create UI Web', false, 1);

INSERT INTO tareas (nombre, estado, proyectoId)
VALUES ('Download Flutter', false, 2);

INSERT INTO tareas (nombre, estado, proyectoId)
VALUES ('Design UI', false, 2);