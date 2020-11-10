import * as UI from "./interfaz.js";

export default class API {
  constructor(artist, song) {
    this.artist = artist;
    this.song = song;
  }

  requestAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const { lyrics } = res;
        if (lyrics == "") {
          UI.divMsgs.textContent = "No se encontró la letra.";
          UI.divMsgs.classList.add("error");

          setTimeout(() => {
            UI.divMsgs.textContent = "";
            UI.divMsgs.classList.remove("error");
          }, 3000);
          return;
        }
        UI.divResult.textContent = lyrics;
        UI.headingResult.textContent = this.song;
      });
  }
}
