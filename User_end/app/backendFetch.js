function createLocalSongElement(audioURL) {
	const audioElement = new Audio(audioURL);

	audioElement.addEventListener("loadedmetadata", function () {
		// Create the main container div
		const localSongDiv = document.createElement("div");
		localSongDiv.classList.add("localSong");

		// Create the first inner div
		const firstDiv = document.createElement("div");

		// Create the play button
		const playButton = document.createElement("button");
		playButton.classList.add("play-song-list");
		const playIcon = document.createElement("i");
		const pauseIcon = document.createElement("i");
		playIcon.classList.add("fa-solid", "fa-play");
		pauseIcon.classList.add("fa-solid", "fa-pause");
		playButton.appendChild(playIcon);
		playButton.appendChild(pauseIcon);
		firstDiv.appendChild(playButton);

		// Create the album photo
		const albumPhoto = document.createElement("img");
		albumPhoto.classList.add("album_photo");
		albumPhoto.setAttribute("alt", "album");
		albumPhoto.src = extractAlbumImage(audioURL);
		firstDiv.appendChild(albumPhoto);

		// Create the song details div
		const songDetailsDiv = document.createElement("div");
		songDetailsDiv.classList.add("song_details");

		// Create the song title span
		const titleSpan = document.createElement("span");
		titleSpan.classList.add("Title");
		titleSpan.textContent = audioElement.title;

		songDetailsDiv.appendChild(titleSpan);

		// Create the artist span
		const artistSpan = document.createElement("span");
		artistSpan.classList.add("artist");
		artistSpan.textContent = audioElement.artist;
		songDetailsDiv.appendChild(artistSpan);

		firstDiv.appendChild(songDetailsDiv);

		// Create the second inner div
		const secondDiv = document.createElement("div");

		// Create the playtime span
		const playtimeSpan = document.createElement("span");
		playtimeSpan.classList.add("playtime");
		playtimeSpan.textContent = audioElement.duration;
		secondDiv.appendChild(playtimeSpan);

		// Create the add to playlist button
		const addToPlaylistButton = document.createElement("button");
		addToPlaylistButton.classList.add("addToPlayList");
		const addToPlaylistIcon = document.createElement("i");
		addToPlaylistIcon.classList.add("fa-solid", "fa-music");
		const plusSpan = document.createElement("span");
		plusSpan.innerText = "+";
		addToPlaylistIcon.appendChild(plusSpan);
		addToPlaylistButton.appendChild(addToPlaylistIcon);
		secondDiv.appendChild(addToPlaylistButton);

		// Append the inner divs to the main container div
		localSongDiv.appendChild(firstDiv);
		localSongDiv.appendChild(secondDiv);

		return localSongDiv;
	});
}
