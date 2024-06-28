const ranking = [
    "&#9733;&#9734;&#9734;&#9734;&#9734;", // 1 star
    "&#9733;&#9733;&#9734;&#9734;&#9734;", // 2 stars
    "&#9733;&#9733;&#9733;&#9734;&#9734;", // 3 stars
    "&#9733;&#9733;&#9733;&#9733;&#9734;", // 4 stars
    "&#9733;&#9733;&#9733;&#9733;&#9733;"  // 5 stars
];
const deportes = [
    {
        deporte: "Fútbol",
        descripcion: "El fútbol es un deporte de equipo jugado entre dos conjuntos de once jugadores cada uno y algunos árbitros que se ocupan de que las normas se cumplan correctamente. Es ampliamente considerado el deporte más popular del mundo, pues lo practican unos 270 millones de personas.",
        requiere: "Balón, cancha, porterías, jugadores",
        ranking: ranking[4-1],
        tipo: "balon",
    },
    {
        deporte: "Baloncesto",
        descripcion: "El baloncesto es un deporte de equipo que se puede desarrollar tanto en pista cubierta como en descubierta, en el que dos conjuntos de cinco jugadores cada uno, intentan anotar puntos, también llamados canastas o dobles y/o triples introduciendo un balón en un aro colocado a 3,05 metros del suelo del que cuelga una red.",
        requiere: "Balón, cancha, aro, jugadores",
        ranking: ranking[3-1],
        tipo: "balon",
    },
    {
        deporte: "Voleibol",
        descripcion: "El voleibol, vóleibol, volibol, balonvolea o simplemente vóley (del inglés: volleyball), es un deporte que se juega con una pelota y en el que dos equipos, integrados por seis jugadores cada uno, se enfrentan sobre un área de juego separada por una red central.",
        requiere: "Balón, cancha, red, jugadores",
        ranking: ranking[4-1],
        tipo: "balon",
    },
    {
        deporte: "Tenis",
        descripcion: "El tenis es un deporte de raqueta que se puede practicar de forma individual o entre dos parejas (dobles). El objetivo del juego es golpear la pelota de tal manera que el adversario no pueda devolverla correctamente.",
        requiere: "Raqueta, pelotas, red, cancha, jugadores",
        ranking: ranking[5-1],
        tipo: "balon",
    },
    {
        deporte: "Natación",
        descripcion: "La natación es el movimiento y desplazamiento a través del agua mediante el uso de las extremidades corporales y por lo general sin utilizar ningún instrumento artificial. La natación es una actividad que puede ser útil y recreativa.",
        requiere: "Piscina, traje de baño, gorro, gafas, jugadores",
        ranking: ranking[4-1],
        tipo: "acuatico",
    },
    {
        deporte: "Atletismo",
        descripcion: "El atletismo es un deporte que abarca numerosas disciplinas agrupadas en carreras, saltos, lanzamientos, pruebas combinadas y marcha.",
        requiere: "Pista, implementos, jugadores",
        ranking: ranking[4-1],
        tipo: "atletismo",

    },
    {
        deporte: "Ciclismo",
        descripcion: "El ciclismo es un deporte en el que se compite utilizando una bicicleta. El ciclismo en ruta, en pista y en montaña son las modalidades más populares.",
        requiere: "Bicicleta, casco, guantes, jugadores",
        ranking: ranking[2-1],
        tipo: "atletismo",
    }
]

export default {
    deportes,
    deportesBalon : deportes.filter( d => d.tipo === "balon"),
    deportesAcuaticos: deportes.filter( d => d.tipo === "acuatico"),
    deportesAtletismo: deportes.filter( d => d.tipo === "atletismo"),
};