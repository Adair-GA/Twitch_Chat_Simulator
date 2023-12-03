const comentariosDePersecucion = [
  "Primeerooo",
  "Llevaba demasido tiempo esperando bro.",
  "Por fin tenemos lo que nos merecemos",
  "Saludas?",
  "Que estudias?",
  "Nunca te he imaginado siendo universitario",
  "Bro, que precha",
  "Primerooo",
  "Os va bien? Se me congela la imagen",
  "Habla mas alto, no se escucha",
  "Te quierooo",
  "Dale duro a la uni tio"
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

let x = false;

setInterval(() => {
    if (x) {
      return;
    }
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

}, 1500);

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function stop_chat(){
    x = !x;
}
  