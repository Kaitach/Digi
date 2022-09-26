const digiName = document.getElementById("digiName");
const data = document.getElementById("data");
const API_URL = "https://digimon-api.vercel.app/api/digimon/name/";
const busca = document.getElementById("buscador");
const btn = document.getElementById("btn");
function onYouTubeIframeAPIReady() { var e = document.getElementById("youtube-audio"), t = document.createElement("img"); t.setAttribute("id", "youtube-icon"), t.style.cssText = "cursor:pointer;cursor:hand", e.appendChild(t); var a = document.createElement("div"); a.setAttribute("id", "youtube-player"), e.appendChild(a); var o = function (e) { var a = e ? "IDzX9gL.png" : "quyUPXN.png"; t.setAttribute() }; e.onclick = function () { r.getPlayerState() === YT.PlayerState.PLAYING || r.getPlayerState() === YT.PlayerState.BUFFERING ? (r.pauseVideo(), o(!1)) : (r.playVideo(), o(!0)) }; var r = new YT.Player("youtube-player", { height: "0", width: "0", videoId: e.dataset.video, playerVars: { autoplay: e.dataset.autoplay, loop: e.dataset.loop }, events: { onReady: function (e) { r.setPlaybackQuality("small"), o(r.getPlayerState() !== YT.PlayerState.CUED) }, onStateChange: function (e) { e.data === YT.PlayerState.ENDED && o(!1) } } }) }

const addPower = (name, url) => {
    data.innerHTML +=  `
    <div class="col-5 col-md-5" class="card" style="width: 10rem;">
    <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <img class="card-img-top" src=${url} alt="Card image cap">
      <a href="javascript:ventanaSecundaria('https://digimon.fandom.com/es/wiki/${name}')" class="btn btn-primary">Mas Detalles</a>
    </div>` 
};

let datos =[]
const getData = () => {
    const promise = fetch("https://digimon-api.vercel.app/api/digimon")       
    promise.then((response) => {
        return  response.json();        
    }).then((dataJSON) => {
        datos = dataJSON
       
    });
  
}  
getData();

mostrarTodos = () => {
    data.innerHTML = "";
    datos.forEach((digi) => {
        addPower(digi.name, digi.img);
    });
    btn.innerHTML = "";
};

buscador.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    const searchString = e.target.value.toLowerCase();
    const filteredCharacters = datos.filter((character) => {
      return (
        character.name.toLowerCase().includes(searchString) 
      );
    });
    data.innerHTML = "";
    filteredCharacters.forEach((character) => {
      addPower(character.name, character.img);
    });
    if (filteredCharacters.length === 0) {
      const errorMessage = document.createElement("marquee");
      errorMessage.textContent = `No se encontro el digimon ${searchString}`;
      data.appendChild(errorMessage);
    }
    if (searchString   === "") {
      data.innerHTML = "";    }  
    
});
  

  
function ventanaSecundaria (URL){ 
    window.open(URL,"ventana1","width=640,height=730,scrollbars=NO") 
 } 

