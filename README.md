# Proyecto de Gestión de Tareas

Este proyecto es una aplicación de gestión de tareas construida con `React`, `Redux` y `Material-UI`. La aplicación permite crear, actualizar el estado de la tarea de completada a no completada , eliminar y visualizar tareas de manera eficiente. Además, la persistencia de datos se ha implementado con `Redux Persist` para garantizar que la información se mantenga a través de recargas de página.
La validacion de los datos se realizo directamente utilizando los componentes de validacion de materialUi

No fue necesario usar api ya que la persistencia la hice en redux persist y cuando se recarga la pagina se ven los datos pero le dejo el patron que uso para que pueda ver como lo uso


## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para la construcción de interfaces de usuario.
- **Redux**: Librería para el manejo del estado de la aplicación.
- **Redux Toolkit**: Conjunto de herramientas oficiales de Redux para facilitar la configuración y la administración de estado.
- **Redux Persist**: Permite que los datos del store de Redux persistan en el almacenamiento local, incluso después de recargar la página.
- **Material-UI**: Biblioteca de componentes UI para React que proporciona un conjunto de estilos y componentes personalizables.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone git@github.com:manuelalejandroleiva/ExamReactReduxPersist.git
   cd tu_repositorio
   npm install -g yarn 
   yarn install 
   yarn run dev

