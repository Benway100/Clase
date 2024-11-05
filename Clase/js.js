// Función para registrar usuario
function register() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
  
    // Verificar si ya existe un usuario con ese nombre
    if (localStorage.getItem(username)) {
      alert("El usuario ya existe. Intente con otro nombre de usuario.");
    } else {
      // Guardar la información del usuario en localStorage
      localStorage.setItem(username, password);
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
    }
  }
  
  // Función para iniciar sesión
  function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    // Verificar las credenciales del usuario
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      alert("Inicio de sesión exitoso.");
      // Aquí puedes redirigir a la página de inicio u otra página segura
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  }
  