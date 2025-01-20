fetch('assets/data/homedata.json')
  .then(response => response.json())
  .then(data => {
    const recommendedForYouSection = document.getElementById('recommended-section');
    recommendedForYouSection.innerHTML = '';
    data.recommendedForYou.forEach(song => {
      const songDetails = document.createElement('div');
      songDetails.className = 'column';
      const image = document.createElement('img');
      image.src = song.image;
      image.alt = song.name;
      const songInfo = document.createElement('div');
      songInfo.className = 'song-info';
      const songName = document.createElement('h5');
      songName.textContent = song.name;
      const artistName = document.createElement('p');
      artistName.textContent = song.artist;
      songInfo.appendChild(songName);
      songInfo.appendChild(artistName);
      const audio = document.createElement('audio');
      audio.controls = true;
      const source = document.createElement('source');
      source.src = song.url;
      source.type = 'audio/mp3';
      audio.appendChild(source);
      songDetails.appendChild(image);
      songDetails.appendChild(songInfo);
      songDetails.appendChild(audio);
      recommendedForYouSection.appendChild(songDetails);
      audio.addEventListener('play', () => {
        image.classList.add('rotate');
      });
      audio.addEventListener('pause', () => {
        image.classList.remove('rotate');
      });
    });
  })
  .catch(error => console.error('Error:', error));
