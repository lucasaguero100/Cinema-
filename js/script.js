// Objeto con las películas
const peliculas = {
  gladiator: {
    titulo: "Gladiator 2",
    imagen: "../img/Gladiator2.png",
    sinopsis: "La esperada secuela del clásico épico. Lucius enfrenta nuevos desafíos en el Imperio Romano.",
    ficha: [
      "Director: Ridley Scott",
      "Protagonistas: Paul Mescal, Pedro Pascal, Denzel Washington",
      "Género: Acción / Drama",
      "Duración: 2h 30min",
      "Estreno: 2026"
    ]
  },
  lilo: {
    titulo: "Lilo & Stitch",
    imagen: "../img/Lilo-Stitch.png",
    sinopsis: "Una niña hawaiana adopta a un extraño 'perro' que en realidad es un experimento extraterrestre.",
    ficha: [
      "Director:s Chris Sanders, Dean DeBlois",
      "Protagonistas: Daveigh Chase, Chris Sanders, Tia Carrere",
      "Género: Animación / Comedia / Familia",
      "Duración: 1h 25min",
      "Estreno: 2023"
    ]
  },
  "se-lo-que-hicieron": {
    titulo: "Se Lo Que Hicieron El Verano Pasado",
    imagen: "../img/seloquehiceronelveranopasado.png",
    sinopsis: "Un grupo de adolescentes es acechado por un misterioso asesino que conoce sus secretos más oscuros.",
    ficha: [
      "Director: Jim Gillespie", 
      "Protagonistas: Jennifer Love Hewitt, Sarah Michelle Gellar, Ryan Phillippe",
      "Género: Terror / Suspenso",
      "Duración: 1h 50min",
      "Estreno: 2025"
    ]
  },
  moana2: {
    titulo: "Moana 2: El Viaje Continúa",
    imagen: "../img/moana2.png",
    sinopsis: "Moana regresa para una nueva aventura en alta mar, enfrentando nuevos desafíos y descubriendo secretos ancestrales.",
    ficha: [
      "Director: Ron Clements, John Musker",
      "Protagonistas: Auli'i Cravalho, Dwayne Johnson, Rachel House",
      "Género: Animación / Aventura / Familia",
      "Duración: 1h 45min",
      "Estreno: 2024"
    ]
  },
  animalespeligrosos: {
    titulo: "Animales Peligrosos",
    imagen: "../img/animalespeligrosos.png",
    sinopsis: "Un grupo de amigos se embarca en una aventura para capturar imágenes de animales salvajes, pero pronto descubren que no están solos.",
    ficha: [
      "Director: Jane Smith",
      "Protagonistas: John Doe, Jane Roe, Max Mustermann",
      "Género: Suspenso",
      "Duración: 2h 10min",
      "Estreno: 2026"
    ]
  },
  avatar3: {
    titulo: "Avatar 2: El Camino del Agua",
    imagen: "../img/avatar3.png",
    sinopsis: "Jake Sully y Neytiri exploran nuevas regiones de Pandora mientras enfrentan amenazas tanto internas como externas.",
    ficha: [
      "Director: James Cameron",
      "Protagonistas: Sam Worthington, Zoe Saldana, Sigourney Weaver",
      "Género: Ciencia Ficción / Aventura",
      "Duración: 3h 15min",
      "Estreno: 2026"
    ]
  },
  toystory5: {
    titulo: "Toy Story 5",
    imagen: "../img/toystory.png",
    sinopsis: "Los juguetes favoritos de Andy enfrentan nuevos desafíos cuando un nuevo juguete llega a la habitación.",
    ficha: [
      "Director: Josh Cooley",
      "Protagonistas: Tom Hanks, Tim Allen, Annie Potts",
      "Género: Animación / Comedia / Familia",
      "Duración: 1h 40min",
      "Estreno: 2026"
    ]
  },
  zootopia2: {
    titulo: "Zootopia 2",
    imagen: "../img/Zootopia2.png",
    sinopsis: "Judy Hopps y Nick Wilde se embarcan en una nueva aventura para resolver un misterio en la ciudad de Zootopia.",
    ficha: [
      "Director: Jorgen Klubien",
      "Protagonistas: Ginnifer Goodwin, Jason Bateman, Idris Elba",
      "Género: Animación / Comedia / Aventura",
      "Duración: 1h 35min",
      "Estreno: 2025"
    ]
  },
  keeper: {
    titulo: "Keeper",
    imagen: "../img/Keeper.png",
    sinopsis: "Un thriller psicológico navideño donde una mujer debe proteger un secreto oscuro mientras enfrenta amenazas inesperadas.",
    ficha: [
      "Director: Jane Doe",
      "Protagonistas: Tatiana Maslany, Rossif Sutherland, Kett Turton, Erin Boyes, Claire Friesen, Logan Pierce, Glen Gordon, Gina Vultaggio, Erin Tipple",
      "Género: Terror / Suspenso",
      "Duración: 1h 50min",
      "Estreno: 2025"
    ]
  },
  "los-4-fantasticos": {
    titulo: "Los 4 Fantásticos",
    imagen: "../img/los-4-fantasticos.png",
    sinopsis: "El reinicio de la icónica franquicia de superhéroes, siguiendo las aventuras de Reed Richards, Sue Storm, Johnny Storm y Ben Grimm.",
    ficha: [
      "Director: Matt Shakman",
      "Protagonistas: John Krasinski, Emily Blunt, Miles Teller, Kate Mara",
      "Género: Acción / Ciencia Ficción / Aventura",
      "Duración: 2h 20min",
      "Estreno: 2025"
    ]
  },
  weapons : {
    titulo: "Weapons",
    imagen: "../img/weapons.png",
    sinopsis: "Un thriller de terror y misterio dirigido por Zach Cregger. La historia se centra en una pequeña ciudad estadounidense donde todos los alumnos de una misma clase, salvo uno, desaparecen misteriosamente la misma noche y a la misma hora.",
    ficha: [
      "Director: Zach Cregger",
      "Protagonistas: Josh Brolin, Julia Garner, Alden Ehrenreich, Austin Abrams, Benedict Wong, Amy Madigan, June Diane Raphael",
      "Género: Thriller / Terror",
      "Duración: 2h 08min",
      "Estreno: 2025"
    ]
  },
  sinners : {
    titulo: "Sinners",
    imagen: "../img/sinner.png",
    sinopsis: "Tratando de descubrir sus problemáticas vidas detrás, los hermanos gemelos regresan a su ciudad natal para comenzar de nuevo, solo para descubrir que un mal aún mayor los espera para darles la bienvenida nuevamente.",
    ficha: [
      "Director: Ryan Coogler",
      "Protagonistas: Michael B. Jordan, Miles caton , jack Oconnell , Cristhian Robinson, Kofi Siriboe, Shea Whigham",
      "Género: Thriller / Drama",
      "Duración: 1h 45min",
      "Estreno: 2025"
    ]
  },
   conjuro : {
    titulo: "El Conjuro 4",
    imagen: "../img/conjuro.png",
    sinopsis: "Los Warren enfrentan un último caso paranormal que pone a prueba no solo sus habilidades como investigadores, sino también su fe y su relación. La película promete ser la despedida definitiva de la pareja en la saga, con un tono más oscuro y emocional que las anteriores",
    ficha: [
      "Director: Michael Chaves",
      "Protagonistas: Vera Farmiga, Patrick Wilson, Ben Hardy, Mia Tomlison",
      "Género: Terror / Suspenso",
      "Duración: 2h 15min",
      "Estreno: 2025"
    ]
  } ,
  avatar : { 
    titulo: "Avatar 3: Fuego y Cenizas",
    imagen: "../img/avatar.jpeg",
    sinopsis: "La historia retoma los eventos tras Avatar: El camino del agua. Jake Sully y Neytiri enfrentan una nueva amenaza en Pandora: el clan Ash, una tribu Na’vi hostil con una cultura más oscura y guerrera. Su líder, Varang (interpretada por Oona Chaplin), desafía directamente a los protagonistas, generando un conflicto que pone en riesgo la unidad de los Na’vi y la supervivencia de su familia.",
    ficha: [
      "Director: James Cameron",
      "Protagonistas: Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Género: Acción / Ciencia Ficción / Aventura",
      "Duración: 3h 17min",
      "Estreno: 2025"
    ]
  }, 
   him : {
    titulo: "Him",
    imagen: "../img/him.png",
    sinopsis: "Un thriller psicológico que explora la obsesión y la identidad a través de la historia de un hombre que se enamora de una inteligencia artificial avanzada.",
    ficha: [
      "Director: George C. Wolfe",
      "Protagonistas: Adam Driver, Amanda Seyfried, Jenna Ortega",
      "Género: Thriller / Ciencia Ficción / Drama",
      "Duración: 2h 05min",
      "Estreno: 2025"
    ]
  }
};

// Obtener parámetro de la URL
const params = new URLSearchParams(window.location.search);
const peliculaId = params.get("pelicula");

// Cargar datos dinámicamente
if (peliculaId && peliculas[peliculaId]) {
  const peli = peliculas[peliculaId];
  document.getElementById("pelicula-img").src = peli.imagen;
  document.getElementById("pelicula-img").alt = peli.titulo;
  document.getElementById("pelicula-titulo").textContent = peli.titulo;
  document.getElementById("pelicula-sinopsis").textContent = peli.sinopsis;

  const fichaUl = document.getElementById("pelicula-ficha");
  fichaUl.innerHTML = "";
  peli.ficha.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    fichaUl.appendChild(li);
  });
} else {
  document.getElementById("pelicula-titulo").textContent = "Película no encontrada";
  document.getElementById("pelicula-sinopsis").textContent = "Lo sentimos, no hay información disponible.";
}

// Animaciones en scroll
document.addEventListener("scroll", () => {
  document.querySelectorAll("[data-animate]").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
