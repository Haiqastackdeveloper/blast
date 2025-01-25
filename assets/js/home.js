fetch('assets/data/homedata.json')
  .then(response => response.json())
  .then(data => {
    const trendingSection = document.getElementById('trending-section');
    trendingSection.innerHTML = '';
    data.trending.forEach(song => {
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
      trendingSection.appendChild(songDetails);
      audio.addEventListener('play', () => {
        image.classList.add('rotate');
      });
    })
      const chartSection = document.getElementById('chart-section');
      chartSection.innerHTML = '';
      data.chart.forEach(song => {
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
        chartSection.appendChild(songDetails);
        audio.addEventListener('play', () => {
          image.classList.add('rotate');
        });
      })
        const newReleasesSection = document.getElementById('newreleases-section');
        newReleasesSection.innerHTML = '';
        data.newReleases.forEach(song => {
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
          newReleasesSection.appendChild(songDetails);
          audio.addEventListener('play', () => {
            image.classList.add('rotate');
          });
      })
      audio.addEventListener('pause', () => {
        image.classList.remove('rotate');
      });
    })
  .catch(error => console.error('Error:', error))