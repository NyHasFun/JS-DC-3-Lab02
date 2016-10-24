var form = document.querySelector('.songForm')
var search = document.querySelector('.searchSubmit')



function buildURL(song) {
  var baseURL = 'https://api.spotify.com/v1/search?q='
  baseURL += song
  baseURL += '&type=track'
  console.log(baseURL);
  return baseURL
}

function Search(event) {
  event.preventDefault()
  var song = form.song.value
  $.ajax({
    type: 'GET',
    url: buildURL(song),
    success: function(data){
      form.name.value = data.tracks.items[0].name,
      form.imageUrl.value= data.tracks.items[0].album.images[1].url,
      form.artist.value= data.tracks.items[0].artists.name,
      form.album.value= data.tracks.items[0].album.name;
    }
  })
}

search.addEventListener('click', Search)
