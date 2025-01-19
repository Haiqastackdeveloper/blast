fetch('assets/data/data.json')
  .then(response => response.json())
  .then(data => {
    const trendingNowSection = document.getElementById('trending-now');
    trendingNowSection.innerHTML = '';
    const topChartsSection = document.getElementById('top-charts');
    topChartsSection.innerHTML = '';
    const newReleasesSection = document.getElementById('new-releases');
    newReleasesSection.innerHTML = '';
    const oldSongSection = document.getElementById('old-songs');
    oldSongSection.innerHTML = '';
    const topArtistSection = document.getElementById('top-artists');
    topArtistSection.innerHTML = '';
    const topSearchSection = document.getElementById('top-searched-songs');
    topSearchSection.innerHTML = '';
    const audioElements = [];

    data.trendingNow.forEach(song => {
      const songDetails = document.createElement('div');
      songDetails.className = 'song-details';
      const image = document.createElement('img');
      image.src = song.image;
      image.alt = song.name;
      const songInfo = document.createElement('div');
      songInfo.className = 'song-info';
      const songName = document.createElement('h5');
      songName.textContent = song.name;
      const artistName = document.createElement('p');
      artistName.textContent = song.artist;
      const audio = document.createElement('audio');
      audio.controls = true;
      const source = document.createElement('source');
      source.src = song.url;
      source.type = 'audio/mp3';
      audio.appendChild(source);
      songInfo.appendChild(songName);
      songInfo.appendChild(artistName);
      songInfo.appendChild(audio);
      songDetails.appendChild(image);
      songDetails.appendChild(songInfo);
      trendingNowSection.appendChild(songDetails);

      audioElements.push(audio);
    });

    data.topCharts.forEach(song => {
      const songDetails = document.createElement('div');
      songDetails.className = 'song-details';
      const image = document.createElement('img');
      image.src = song.image;
      image.alt = song.name;
      const songInfo = document.createElement('div');
      songInfo.className = 'song-info';
      const songName = document.createElement('h5');
      songName.textContent = song.name;
      const artistName = document.createElement('p');
      artistName.textContent = song.artist;
      const audio = document.createElement('audio');
      audio.controls = true;
      const source = document.createElement('source');
      source.src = song.url;
      source.type = 'audio/mp3';
      audio.appendChild(source);
      songInfo.appendChild(songName);
      songInfo.appendChild(artistName);
      songInfo.appendChild(audio);
      songDetails.appendChild(image);
      songDetails.appendChild(songInfo);
      topChartsSection.appendChild(songDetails);

      audioElements.push(audio);
    });

    data.newReleases.forEach(song => {
      const songDetails = document.createElement('div');
      songDetails.className = 'song-details';
      const image = document.createElement('img');
      image.src = song.image;
      image.alt = song.name;
      const songInfo = document.createElement('div');
      songInfo.className = 'song-info';
      const songName = document.createElement('h5');
      songName.textContent = song.name;
      const artistName = document.createElement('p');
      artistName.textContent = song.artist;
      const audio = document.createElement('audio');
      audio.controls = true;
      const source = document.createElement('source');
      source.src = song.url;
      source.type = 'audio/mp3';
      audio.appendChild(source);
      songInfo.appendChild(songName);
      songInfo.appendChild(artistName);
      songInfo.appendChild(audio);
      songDetails.appendChild(image);
      songDetails.appendChild(songInfo);
      newReleasesSection.appendChild(songDetails);

      audioElements.push(audio);
    });
    data.oldSongs.forEach(song => {
      const songDetails = document.createElement('div');
      songDetails.className = 'song-details';
      const image = document.createElement('img');
      image.src = song.image;
      image.alt = song.name;
      const songInfo = document.createElement('div');
      songInfo.className = 'song-info';
      const songName = document.createElement('h5');
      songName.textContent = song.name;
      const artistName = document.createElement('p');
      artistName.textContent = song.artist;
      const audio = document.createElement('audio');
      audio.controls = true;
      const source = document.createElement('source');
      source.src = song.url;
      source.type = 'audio/mp3';
      audio.appendChild(source);
      songInfo.appendChild(songName);
      songInfo.appendChild(artistName);
      songInfo.appendChild(audio);
      songDetails.appendChild(image);
      songDetails.appendChild(songInfo);
      oldSongSection.appendChild(songDetails);

      audioElements.push(audio);
    });
    data.topSearchedsongs.forEach(song => {
      const songDetails = document.createElement('div');
      songDetails.className = 'song-details';
      const image = document.createElement('img');
      image.src = song.image;
      image.alt = song.name;
      const songInfo = document.createElement('div');
      songInfo.className = 'song-info';
      const songName = document.createElement('h5');
      songName.textContent = song.name;
      const artistName = document.createElement('p');
      artistName.textContent = song.artist;
      const audio = document.createElement('audio');
      audio.controls = true;
      const source = document.createElement('source');
      source.src = song.url;
      source.type = 'audio/mp3';
      audio.appendChild(source);
      songInfo.appendChild(songName);
      songInfo.appendChild(artistName);
      songInfo.appendChild(audio);
      songDetails.appendChild(image);
      songDetails.appendChild(songInfo);
      topSearchSection.appendChild(songDetails);

      audioElements.push(audio);
    });
    audioElements.forEach(audio => {
      audio.addEventListener('play', () => {
        audioElements.forEach(otherAudio => {
          if (otherAudio !== audio) {
            otherAudio.pause();
          }
        });
      });
    });
    data.topArtist.forEach(artist => {
      const artistDetails = document.createElement('div');
      artistDetails.className = 'artist-details';
      const image = document.createElement('img');
      image.src = artist.image;
      image.alt = artist.name;
      const artistInfo = document.createElement('div');
      artistInfo.className = 'artist-info';
      const artistName = document.createElement('h5');
      artistName.textContent = artist.name;
      artistInfo.appendChild(artistName);
      artistDetails.appendChild(image);
      artistDetails.appendChild(artistInfo);
      topArtistSection.appendChild(artistDetails);
  });
  })
.catch(error => console.error('Error:', error));
