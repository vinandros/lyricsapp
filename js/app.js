import * as UI from "./interfaz.js";
import API from "./api.js";

UI.formSearch.addEventListener("submit", searchSong);

function searchSong(e) {
  e.preventDefault();

  const artist = document.querySelector("#artista").value;
  const song = document.querySelector("#cancion").value;

  if (artist === "" || song === "") {
    UI.divMsgs.textContent = "Error, todos los campos son obligatorios.";
    UI.divMsgs.classList.add("error");

    setTimeout(() => {
      UI.divMsgs.textContent = "";
      UI.divMsgs.classList.remove("error");
    }, 3000);

    return;
  }

  const api = new API(artist, song);
  api.requestAPI();
  console.log(api);
}
