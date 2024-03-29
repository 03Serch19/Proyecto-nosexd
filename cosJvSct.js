 // JavaScript para agregar contenido dinámicamente
 document.addEventListener("DOMContentLoaded", function() {
  // Array de objetos de streamers y sus países
  let streamers = [
      { nombre: "Streamer 1", pais: "País 1", edad:"24" },
      { nombre: "Streamer 2", pais: "País 2", edad:"36"},
      { nombre: "Streamer 3", pais: "País 3", edad:"32"},
      { nombre: "Streamer 3", pais: "País 4", edad:"19"}
      // Añade más streamers según sea necesario
  ];

  let streamersSection = document.getElementById("streamers");

  // Itera sobre el array de streamers y crea elementos HTML para cada uno
  streamers.forEach(function(streamer) {
      let article = document.createElement("article");
      article.classList.add("streamer");

      let heading = document.createElement("h2");
      heading.textContent = streamer.nombre;

      let paragraph = document.createElement("p");
      paragraph.textContent = "País: " + streamer.pais;

      let paragraphAge = document.createElement("p");
      paragraphAge.textContent = "Edad: " + streamer.edad;

      article.appendChild(heading);
      article.appendChild(paragraph);
      article.appendChild(paragraphAge)
      streamersSection.appendChild(article);
  });
});