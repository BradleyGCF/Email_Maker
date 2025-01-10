# Temaplate-frontend

## Antes de hacer el commit correr en comando

```shell
yarn lint
```

para solucionar errores

# Resumen de la estructura de carpetas

- `src/assets`: Carpeta para archivos estáticos, cómo imágenes, videos, etc.

- `src/schemas`: Carpeta para los `schemas` de las validaciones de yup o zod.

- `src/modules/[module]/services`: Carpeta para las llamadas apis(en cuando usamos moralis) y también los endpoints de la API.

### Ejemplo:

```js
export function getData = async () => {
  const response = await fetch(Services.auth.logIn)
  const data = await response.json()
  return data
}
```

- `src/store`: Carpeta para las `stores` de la aplicación. Cuando las `stores` son demasiado grandes se podría mover las acciones a un archivo aparte cómo está en el ejemplo.

- `src/types`: Carpeta para los `tipos` de la aplicación. Se deben poner los tipos que son globales(que se utilizen el toda la app).

- `src/styles`: Carpeta para los `estilos`.

- `src/config`: Carpeta para las `variables de configuración` de la aplicación.

- `src/routes`: Carpeta para las `rutas del cliente` de la aplicación. Agregar las rutas en el archivo `index.ts`, cómo se muestra en el ejemplo y usarlo de la siguiente manera.

```jsx
import { Routes } from "@/routes";

<Link to={Routes.home}>Home</Link>;
```

### Ejemplo para la carpeta lib:

```js
// src/modules/core/lib
import { PrismaClient } from "@PrismaClient";

export const db = new PrismaClient();
```

# Descripción detallada de nuestra arquitectura

- 📂 `src`: Este es el directorio principal donde se almacenan todos los archivos de código fuente del proyecto
  - 📂 `assets`: Este directorio contiene todos los recursos estáticos como imágenes.
  - 📂 `layout`: Este directorio contiene todos los layouts de la página; cómo el `footer`, `header`.
  - 📂 `errors`: Este directorio contiene el Error Handler y el Custom Error factory.
  - 📂 `mockData`: Este directorio contiene archivos JSON para documentar y tipar las respuestas de la API. Ésto para un tipado rápido y poder documentar las respuestas del servidor. Se debe estructurar /mockData/[enpoint]/[nombre-endpoint].json. Ejemplo /mockData/users/getUserById.json.
  - 📂 `config` Configura y maneja variables de entorno.
    - 📄 `env.tsx`: configura y maneja variables de entorno para diferentes servicios, principalmente Moralis.
  - 📂 `modules`: Contenedor para agrupar las funcionalidades específicas de la aplicación, divididas en submódulos independientes.
    - 📂 `auth`: Gestiona todo lo relacionado con la autenticación y autorización de usuarios.
      - 📂 `adapters`: Aquí van las funciones que se encargan de adaptar o formatear los datos de que se van a utilizar en una vista.
      - 📂 `services`: Aquí gestionamos los endpoints y se realiza las peticiones a los endpoints. Esto facilita la gestión de cambios en los endpoints al tener un único punto de referencia que puede ser actualizado sin necesidad de modificar múltiples archivos.
        - 📄 `index.ts`: Define objetos que actúan como una especie de mapa a los nombres de funciones o endpoints en Moralis, como signUp y update. Esto mejora la legibilidad y mantenimiento del código.
      - 📂 `components`: Alberga los componentes específicos de este módulo de autenticación.
        - 📄 `LoginInForm.tsx`: Formulario de inicio de sesión del usuario.
        - 📄 `SignUpForm`: Formulario de registro de usuario.
      - 📂 `hooks`: Contiene hooks de React que encapsulan lógica y estado del módulo para manejar efectos y estado limpiamente.
        - 📄 `useLogIn.tsx`: Este hook está diseñado para manejar el proceso de inicio de sesión de los usuarios. Utiliza Moralis.
        - 📄 `useSignUp.tsx`: Este hook maneja el registro de nuevos usuarios, también utilizando Moralis para interactuar con el backend.
      - 📂 `lib`: Aquí albergamos bibliotecas de código, clases y constantes que son esenciales para el módulo pero que no se cuentan como utilidades.
        - 📄 `index.tsx`
      - 📂 `schemas`: Esta carpeta esta diseñada para centralizar las validaciones de formularios relacionadas con la autenticación de usuarios.
        - 📄 `auth.schemas.ts`: Este archivo define las reglas de validación para los formularios de inicio de sesión `(signInSchema)` y registro `(signUpSchema)` usando la biblioteca `yup`
        - 📄 `index.tsx`: Este archivo actúa como un punto de exportación para los esquemas definidos en `auth.schemas.ts`
      - 📂 `utils`: Incluye funciones de utilidad genéricas que pueden ser usadas en todo el módulo.
        - 📄 `Ejemplo`: Funciones para validar formularios o datos de entrada del usuario.
          Herramientas para formatear fechas, números, o strings.
          Utilidades para manejar estados complejos o lógicas recurrentes.
    - 📂 `core`: Contiene la lógica fundamental o las utilidades centrales que son esenciales para el funcionamiento de toda la aplicación.
      - 📂 `components`: Contiene componentes que son fundamentales para la aplicación y que se utilizan en múltiples lugares del proyecto.
        - 📄 `Carousel.tsx`
        - 📄 `Footer`
        - 📄 `Navbar`
        - 📄 `Modal`
      - 📂 `hooks`: Contiene hooks de React que encapsulan lógica de toda la app.
        - 📄 `useSession.tsx`: Este hook se utiliza para acceder a la información del usuario almacenada en un estado global, gestionado aquí por useUserStore. Este tipo de hook es común en aplicaciones React para centralizar el acceso a datos frecuentemente necesarios en varios componentes..
      - 📂 `icons`: Esta carpeta suele contener componentes de iconos o utilidades relacionadas con los iconos utilizados en toda la aplicación.
        - 📄 `index.tsx`
      - 📂 `lib`:Incluye bibliotecas de código, configuraciones y otras abstracciones que no son específicas de la UI pero son cruciales para las operaciones del core de la aplicación.
      - 📄 `index.tsx`:
      - 📂 `ui`: Aquí agrupamos componentes de interfaz de usuario (UI) que son más especializados y reutilizables en toda la aplicación.
        - 📂 `button`
        - 📄 `primaryButton.tsx`
        - 📄 `secondaryButton.tsx`
        - 📂 `input`
        - 📄 `dialog.tsx`
      - 📂 `utils`: Incluye funciones de utilidad genéricas que pueden ser usadas en todo el core (toda la aplicación).
        - 📄 `className.ts`: Este archivo define dos funciones útiles para manejar clases CSS de una manera más dinámica y eficiente en los componentes.
        - 📄 `formatDate.ts`: Este archivo proporciona una función para formatear fechas utilizando la API Intl.DateTimeFormat.
        - 📄 `formatNumber.ts`: Similar a formatDate, esta función maneja el formateo de números.
        - 📄 `index.ts`: Este archivo actúa como un punto de exportación para todas las utilidades definidas en otros archivos de la carpeta.
      - 📂 `user`: Gestiona todo lo relacionado con el usuario.
        - 📂 `components`: Esta carpeta contiene componentes de React específicos para el módulo de usuario.
        - 📄 `profile.tsx`: componente de React utilizado para mostrar y gestionar el perfil del usuario.
        - 📂 `hooks`: Contiene hooks personalizados relacionados con el módulo de usuario.
        - 📄 `useUser.tsx`: Este es un hook para actualizar la información del usuario.
        - 📂 `types`: Esta carpeta define tipos de TypeScript específicos para el módulo de usuario.
        - 📄 `index.d.ts`: Esto contiene definiciones de tipos relacionadas con las operaciones de usuario.
  - 📂 `routes`: Contenedor para organizar y manejar rutas.
    - 📂 `guard`: Contiene la protección de rutas.
      - 📄 `adminRoutes.tsx`: Este archivo define un componente que se utiliza para proteger las rutas de admin, asegurando que solo los usuarios ADMIN autenticados puedan acceder a ellas.
      - 📄 `isLogged.tsx`: Este archivo define un componente que se utiliza para proteger las rutas en donde es necesario que el usuario este autenticado.
    - 📄 `index.ts`: Este archivo maneja las definiciones de rutas como constantes, lo cual es una buena práctica para evitar errores tipográficos.
    - 📄 `routes.tsx`: Este archivo configura las rutas de la aplicación utilizando la biblioteca react-router-dom y maneja la carga diferida de los componentes con `lazy` y `Suspense`. También gestiona de forma global los errores con la librería react-errror-boundary.
  - 📂 `screens`: Esta carpeta contiene los componentes que actúan como vistas o páginas principales en la aplicación.
    - 📄 `home.tsx`: Página de inicio de la aplicación.
    - 📄 `notFoundPage.tsx`: Página de error mostrada cuando se navega a una ruta que no existe en la aplicación.
    - 📄 `errorPage.tsx`: Página de error mostrada como fallback cuando el ErrorBoundary global captura errores no capturados por otros ErrorBoundary.
    - 📄 `loggedExampleScreen.tsx`: Página de ejemplo para mostrar una ruta protegida en la aplicación.
  - 📂 `store`: Utilizamos zustand para manejar el estado global en la aplicación.
    - 📄 `index.ts`: Exportamos todo desde el store de usuario, facilitando su importación y uso en otras partes de la aplicación.
    - 📂 `user`: Contiene el estado y acciones para gestionar la información del usuario.
    - 📄 `actions.ts`: Aquí van las acciones del store si éste es muy grande.
    - 📄 `index.ts`: Define el store del usuario utilizando zustand. Aquí defines el estado inicial y las acciones, como setUser, que permite actualizar el estado del usuario.
  - 📂 `styles`: Aquí manejamos los estilos globales de la app.
    - 📄 `globals.css`
  - 📂 `types`: Este es un lugar centralizado para definir y manejar los tipos TypeScript que se utilizan a lo largo de toda la aplicación.
    - 📄 `index.d.ts`: Este archivo actúa como un punto de exportación para todos los tipos definidos en la carpeta types. Al usar `export * from './user'`, haces que el tipo User sea accesible desde fuera de la carpeta types simplemente importándolo desde types, lo que simplifica las importaciones en otros archivos de la aplicación.
    - 📄 `user.d.ts`: Aquí defines el tipo User, que actualmente sólo incluye un campo email de tipo string. Este archivo puede ser expandido con más propiedades según las necesidades de la aplicación.

# Importante

El hook `useSession` en las carpeta `/core/hooks` contiene la información de la sesión del usuario, cómo el id, email, username.
El hook `useAuth` en las carpeta `/core/hooks` se utiliza para redireccionar a los usuario.

- Mirar los 2 hooks anteriores mencionados para entender su funcionamiento y modificar según las necesidades del proyecto.

# Tailwind

Para agregar colores a tailwind ir a src/styles/globals y

```css
@layer base {
  :root {
    --tertiary: 0 0 0;
  }
}
```

Y agregarlo en el tailwind.config.js

```javascript
theme: {
  extend: {
    colors: {
      tertiary: DEFAULT: "rgba(var(--tertiary) / <alpha-value>)";
    }
  }
}
```

# Usamos el plugin de Tailwind: daisyUI

`Dentro de esta libreria podemos encontrar muchisimos componentes que pueden acelerar el proceso de maquetado en los proyectos. Aqui les dejo el link de la documentacion: https://daisyui.com/components/`

# Para los íconos se usará la libreria Heroicons

`Dentro de esta librería se encuentran todos los iconos que se usaran y de los que UX/UI tomará de referencia para los proyectos. Link de la documentación: https://github.com/tailwindlabs/heroicons`

# Buenas practicas para escribir commits antes de subir sus cambios

` 1. Usa el verbo imperativo (Add, Change, Fix, Remove, …) Por ejemplo, Add significa que se añade un nuevo archivo, Change significa que se modifica un archivo existente y Fix significa que se arregla un bug..`

### Ejmplos

```
…add a new search feature
…fix a problem with the topbar
…change the default system color
…remove a random notification
```
