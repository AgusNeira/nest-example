# Ejercicio de Nest.js

Este programa es una implementación sencilla de una interfaz con Nest.js, que permite la interacción con una base de datos de usuarios. No se trata de un CRUD completo, sino que permite sólo la adición y el listado de los contenidos de la base.

## Instalación

### 1. Configuración de MySQL
Para correr este programa se debe tener a disposición un servidor MySQL y una base de datos llamada 'nest_app'. Para la inicialización de la misma se recomienda usar el script `SQL_INIT.sql`, de la siguiente forma:

```bash
$mysql -u <user> < SQL_INIT.sql
```
Nótese que para esto se utiliza un usuario, que bien puede ser dedicado para el proyecto o bien el `root`, siempre y cuando éste tenga una contraseña.

### 2. Credenciales
El usuario a ser usado por la aplicación puede tener cualquier nombre e incluso ser el usuario `root`, siempre y cuando tenga acceso a la base de datos `nest_app`. Ahora bien, a la hora de configurar el cliente MySQL, deberá completar un archivo `credentials.ts` en la carpeta `db/`. El archivo `credentials.template.ts` exporta una interfaz `Credentials` que provee el formato básico del objeto a exportar. Un ejemplo de `credentials.ts` sería:

```typescript
import Credentials from 'credentials.template'

export default credentials: Credentials {
    host: 'localhost:3306',
    user: 'nest-app',
    password: 'mypass',
    database: 'nest_app' // MANDATORY
}
```
