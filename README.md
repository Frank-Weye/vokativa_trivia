# Vokativa Trivia

## Descripción del Proyecto

Vokativa Trivia es una aplicación interactiva de preguntas y respuestas desarrollada con JavaScript vanilla. Este proyecto tiene como objetivo construir una experiencia simple y entretenida para los usuarios, con validación de respuestas y puntajes al finalizar cada trivia.

---

## Pasos para Desarrollar "Vokativa Trivia"

### 1. Configuración del Entorno

Antes de comenzar a codificar, asegúrate de tener el siguiente entorno listo:

- **Editor de código:** Visual Studio Code, Sublime Text o cualquier otro.
- **Navegador web:** Chrome, Firefox, o Edge para pruebas.
- **Servidor local (opcional):** Puedes usar extensiones como "Live Server" en VS Code para recargar automáticamente.
- **Git y Github:** Instala git localmente y crear cuenta en github. <br>
 **Git:**
  - https://git-scm.com/downloads (Windows)
  - https://kinsta.com/es/base-de-conocimiento/instalar-git/(Windows)
  <br>
   **Github:** Configuración para inicializar con Github.
   - https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Configurando-Git-por-primera-vez


---

### 2. Estructura del Proyecto

Crea los siguientes archivos y carpetas:

```
/vokativa-trivia
|-- index.html
|-- styles.css
|-- script.js
|-- data.js
```

#### Archivos Clave

1. **index.html:** Estructura base del HTML.
2. **styles.css:** Estilos para la interfaz de usuario.
3. **script.js:** Lógica principal de la aplicación.
4. **data.js:** Datos de las preguntas y respuestas (Opcional). Se puede agregar los datos directamente en el archivo script.js.

---

### 3. Creación del Archivo `data.js`

Define las preguntas, opciones y respuestas correctas en un archivo JSON. Ejemplo:

```javascript
const quizData = [
  {
    question: "¿En qué elemento HTML ponemos el código JavaScript?",
    options: {
      a: "<js>",
      b: "<script>",
      c: "<body>",
      d: "<link>"
    },
    correct: "b"
  },
  {
    question: "¿Qué atributo HTML se utiliza para hacer referencia a un archivo JavaScript externo?",
    options: {
      a: "src",
      b: "rel",
      c: "type",
      d: "href"
    },
    correct: "a"
  }
  // Agrega más preguntas aquí
];

export default quizData;
```

---

### 4. Diseño de la Interfaz (HTML y CSS)

#### index.html

Estructura básica del documento:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vokativa Trivia</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Todo Comienza en el HTML-->
</body>
</html>
```

#### styles.css

Estilo para los elementos:

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
  color: #333;
}
/*Continuar ....*/
```

---

### 5. Lógica en `script.js`

#### Importar Datos

```javascript
const quizContainer = document.getElementById("quiz-container");
const form = document.createElement("form");
//Continuar ....

```

---

### 6. Pruebas

- Abre el archivo `index.html` en un navegador.
- Asegúrate de que las preguntas se generan correctamente.
- Valida que las alertas se muestren al faltar respuestas.
- Comprueba que el formulario se reinicia después de enviar.

---

### 7. Opcional: Mejora con Funcionalidades

- Mostrar el puntaje final en pantalla en lugar de usar `alert()`.
- Agregar un temporizador para completar la trivia **(OPCIONAL)**.
- Implementar estilos personalizados **(OPCIONAL)**.

---

Con estos pasos, estarás listo para crear "Vokativa Trivia" y personalizarla según las necesidades del proyecto. ¡Diviértete desarrollando! 👩‍💻.

🌟Buena suerte!!! 🙌

