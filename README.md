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
  - https://kinsta.com/es/base-de-conocimiento/instalar-git/ (Windows)<br>
  
   **Github:** Configuración para inicializar con Github.   <br>
   - https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Configurando-Git-por-primera-vez


---

### 2. Estructura del Proyecto

Crea los siguientes archivos y carpetas:

```
/vokativa-trivia
|-- index.html
|-- styles.css
|-- script.js
```

#### Archivos Clave

1. **index.html:** Estructura base del HTML.
2. **styles.css:** Estilos para la interfaz de usuario.
3. **script.js:** Lógica principal de la aplicación.

---

### 3. Array de Objetos (DEMO) - Usar tu creatividad y cambiar de temática.

Define las preguntas, opciones y respuestas correctas. Ejemplo:

```javascript
const quizData = [
    {
    question: "¿En qué elemento HTML ponemos el código JavaScript?",
    options: {
      a: "js",
      b: "script",
      c: "body",
      d: "link",
    },
    correct: "b",
  },
  {
    question: "¿Qué atributo HTML se utiliza para hacer referencia a un archivo JavaScript externo?",
    options: {
      a: "src",
      b: "rel",
      c: "type",
      d: "href",
    },
    correct: "a",
  },
  {
    question: "¿Cómo escribirías 'Hola' en un cuadro de alerta?",
    options: {
      a: 'msg("Hello");',
      b: 'alertBox("Hello");',
      c: 'document.write("Hello");',
      d: 'alert("Hello");',
    },
    correct: "d",
  },
  {
    question: 'JavaScript está directamente relacionado con el lenguaje de programación "Java"',
    options: {
      a: "True",
      b: "False",
    },
    correct: "b",
  },
  {
    question: "Una variable en JavaScript debe comenzar con qué carácter especial",
    options: {
      a: "@",
      b: "$",
      c: "#",
      d: "No Special Character",
    },
    correct: "d",
  },
];
```
---

### 4. Pruebas

- Abre el archivo `index.html` en un navegador.
- Asegúrate de que las preguntas se generan correctamente.
- Valida que las alertas se muestren al faltar respuestas.
- Comprueba que el formulario se reinicia después de enviar.

---

### 5. Opcional: Mejora con Funcionalidades

- Mostrar el puntaje final en pantalla en lugar de usar `alert()`.
- Agregar un temporizador para completar la trivia **(OPCIONAL)**.
- Implementar estilos personalizados **(OPCIONAL)**.

---

Con estos pasos, estarás listo para crear "Vokativa Trivia" y personalizarla según las necesidades del proyecto. ¡Diviértete desarrollando! 👩‍💻.

🌟Buena suerte!!! 🙌

