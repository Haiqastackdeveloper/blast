document.addEventListener("DOMContentLoaded", () => {
  const trendingContent = document.getElementById("trending-content");

  // Fetch data from the JSON file
  fetch("assets/data/index.json")
    .then(response => response.json())
    .then(data => {
      renderTrendingSongs(data);
    })
    .catch(error => console.error("Error loading JSON:", error));
  
  // Render Trending Now section
  function renderTrendingSongs(songs) {
    trendingContent.innerHTML = songs
      .map(
        song => `
        <div class="col">
          <div class="card">
            <img src="${song.thumbnail}" class="card-img-top" alt="${song.title}">
            <div class="card-body">
              <h5 class="card-title">${song.title}</h5>
              <p class="card-text">${song.artist}</p>
              <button class="btn btn-danger" onclick="playSong('${song.audio}', '${song.title}', '${song.artist}', '${song.thumbnail}')">Play</button>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  // Audio Player Setup
  const audioPlayer = document.getElementById("audioPlayer");
  const playerLine = document.getElementById("playerLine");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const currentSongThumbnail = document.getElementById("currentSongThumbnail");
  const currentSongTitle = document.getElementById("currentSongTitle");
  const currentArtist = document.getElementById("currentArtist");
  const seekBar = document.getElementById("seekBar");


window.playSong = (songSrc, songTitle, artistName) => {
  audioPlayer.src = songSrc;
  audioPlayer.play();
  playerLine.style.display = "flex";
  currentSongTitle.textContent = songTitle;
  currentArtist.textContent = artistName;
  // currentSongThumbnail.src = thumbnail;
  playPauseBtn.textContent = "⏸️"; 
};

  // Function to toggle play/pause
  window.togglePlay = () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.textContent = "⏸️"; // Pause icon
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = "⏯️"; // Play icon
    }
  };
  window.adjustVolume = (volume) => {
    audioPlayer.volume = volume;
  };
  // Function to handle seek bar
  audioPlayer.addEventListener("timeupdate", () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekBar.value = progress || 0;
  });

  seekBar.addEventListener("input", () => {
    audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
  });

  // Function to download the song
  window.downloadSong = () => {
    const link = document.createElement("a");
    link.href = audioPlayer.src;
    link.download = currentSongTitle.textContent;
    link.click();
  };
});
