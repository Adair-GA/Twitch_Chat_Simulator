const comentariosDePersecucion = [
    "¡Ey, cuidao! Hay uno detrás de ti, amigo.",
    "¿Has visto a tu stalker número uno? ¡Qué creepy!",
    "Bro, alguien te sigue, ¿no ves al detective privado ahí?",
    "¿Estás en un juego de sigilo o te persiguen de verdad?",
    "¡Amigo, alerta roja! Alguien va siguiéndote, ¡mucho ojo!",
    "Si fuera tú, activaría el modo ninja, ¡hay un shadow en tu espalda!",
    "¡Mirando tu espalda, bro! Alguien va con intenciones sospechosas.",
    "Amigo, ¿quién es ese que te sigue? ¿Tu nuevo mejor amigo?",
    "¿Estás grabando un thriller o hay un paparazzi en la ciudad?",
    "¡Oye, parece que tu fan número uno está siguiendo tus pasos!",
    "¡Ey, streamer! ¿Hoy toca streaming de persecución?",
    "No quiero ser el aguafiestas, pero hay uno por ahí con cara de seguirte.",
    "¡Amigo, hay algo raro! Alguien te sigue, ¿es un extra de película?",
    "Hey, ¿alguien más ve a ese pato disfrazado de detective detrás de ti?",
    "Ey, streamer, ¿te persigue alguien o solo has ganado un nuevo seguidor en la vida real?",
    "¡OMG! ¿Has contratado a un asistente personal sin saberlo?",
    "Hey, streamer, parece que tienes tu propio reality show callejero. ¡A disfrutar!",
    "Maten a todos los gitanos"
  ];

  var gamerNames = [
    "ShadowHunter",
    "PixelWarrior",
    "CyberNinja",
    "SteelStorm",
    "BlazeKnight",
    "EpicGamer123",
    "LunaSpecter",
    "ThunderStriker",
    "QuantumRaider",
    "NeonPhantom",
    "NovaReaper",
    "RogueRaptor",
    "VelocityViper",
    "MysticWraith",
    "XenoBlade",
    "PhoenixFury",
    "RapidRenegade",
    "SilentSniper",
    "FrostbiteFalcon",
    "DarkDrifter",
    "VortexVagabond",
    "InfernoImpulse",
    "RadiantRevenant",
    "OmegaOutlaw"
  ];

setInterval(() => {
    const comentario = comentariosDePersecucion[Math.floor(Math.random() * comentariosDePersecucion.length)];
    const usuario = gamerNames[Math.floor(Math.random() * gamerNames.length)];
    const c = document.createElement("div");
    c.className = "message";
    
    const username = document.createElement("span");
    username.className = "username";
    username.innerText = usuario + ": ";
    username.style.color = getRandomColor(); // Set random color
    
    c.appendChild(username);
    
    const texto = document.createElement("span");
    texto.className = "text";
    texto.innerText = comentario;
    c.appendChild(texto);
    
    document.getElementById("message-list").appendChild(c);
    var objDiv = document.getElementById("message-list");
    objDiv.scrollTop = objDiv.scrollHeight;

}, 1000);

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



  