# Ejercicio de Nest.js

Este programa es una implementación sencilla de una interfaz con Nest.js, que permite la interacción con una base de datos de usuarios. No se trata de un CRUD completo, sino que permite sólo la adición y el listado de los contenidos de la base.

## Instalación

### 1. Credenciales
El usuario a ser usado por la aplicación puede tener cualquier nombre e incluso ser el usuario `root`, siempre y cuando tenga acceso a la base de datos `nest_app`. Ahora bien, a la hora de configurar el cliente MySQL, deberá completar un archivo `credentials.ts` en la carpeta `src/`. El archivo `credentials.template.ts` exporta una interfaz `Credentials` que provee el formato básico del objeto a exportar. Un ejemplo de `credentials.ts` sería:

```typescript
import Credentials from 'credentials.template'

export default credentials: Credentials {
    host: 'localhost:3306',
    user: 'nest-app',
    password: 'mypass',
    database: 'nest_app' // MANDATORY
}
```

### 2. Instalación de dependencias
Mediante `npm install` se instalan todos los paquetes necesarios para compilar y ejecutar el programa

## Uso
Por último, el programa se inicia mediante `npm run start`.
