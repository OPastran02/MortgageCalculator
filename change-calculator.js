// Obtener referencias a los botones y divs
const btn1 = document.getElementById("third-party");
const btn2 = document.getElementById("owner-operators");
const div1 = document.getElementById("container-noi");
const div2 = document.getElementById("container-roi");

div2.style.display = "none";

// Asignar eventos click a los botones
btn1.addEventListener("click", function() {
  // Ocultar el div activo y mostrar el div 1
  div1.style.display = "none";
  div2.style.display = "block";
});

btn2.addEventListener("click", function() {
  // Ocultar el div activo y mostrar el div 2
  div2.style.display = "none";
  div1.style.display = "block";
});
