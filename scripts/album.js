// Example album
var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    { title: 'Blue', duration: '4:26' },
    { title: 'Green', duration: '3:14'},
    { title: 'Red', duration: '5:01' },
    { title: 'Pink', duration: '3:21'},
    { title: 'Magenta', duration: '2:15'}
  ]
};

//Another example album
var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_cover/02.png',
  songs: [
    { title: 'Hello, Operator?', duration: '1:01' },
    { title: 'Ring, ring, ring', duration: '5:01' },
    { title: 'Fits in your pocket', duration: '3:21' },
    { title: 'Can you hear me now?', duration: '3:14' },
    { title: 'Wrong phone number', duration: '2:15'}
  ]
};

//third example album

var albumAlex = {
  title: 'Humbug',
  artist: 'Arctic Monkeys',
  label: 'Domino',
  year: '2009',
  albumArtUrl: 'assets/images/album_cover/21.png',
  songs: [
    { title: 'My Propeller', duration: '3:27' },
    { title: 'Crying Lightning', duration: '3:43' },
    { title: 'Dangerous Animals', duration: '3:30' },
    { title: 'Secret Door', duration: '3:43' },
    { title: 'Potion Approaching', duration: '3:32'},
    { title: 'Fire and the Thud', duration: '3:57' },
    { title: 'Cornerstone', duration: '3:18' },
    { title: 'Dance Little Liar', duration: '4:43' },
    { title: 'Pretty Visitors', duration: '3:40' },
    { title: 'The Jeweller Hands', duration: '3:32'}
  ]
};

var createSongRow = function(songNumber, songName, songLength) {
  var template =
    '<tr class="album-view-song-item">'
  + ' <td class="song-item-number" data-song-number="' + songNumber +'">' + songNumber +'</td>'
  + ' <td class="song-item-title">' + songName + '</td>'
  + ' <td class="song-item-duration">' + songLength + '</td>'
  + '</tr>'
  ;

  return template;
};

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {
  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);

  albumSongList.innerHTML = '';

  for (var i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
  }
};

// Elements we'll be adding listeners to
var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');

// Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';

window.onload = function() {
  setCurrentAlbum(albumPicasso);

  songListContainer.addEventListener('mouseover', function(event) {
      if (event.target.parentElement.className === 'album-view-song-item') {
        event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
      }
  });

  for (var i = 0; i < songRows.length; i++) {
      songRows[i].addEventListener('mouseleave', function(event) {
        this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
      });
  }

  var albums = [albumPicasso, albumMarconi, albumAlex];
  var index = 1;
  albumImage.addEventListener("click", function(event){
      setCurrentAlbum(albums[index]);
      index++;
      if (index == albums.length) {
        index = 0;
      }
  });
};
