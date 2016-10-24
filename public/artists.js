var form = document.querySelector('.artistForm')
var search = document.querySelector('.searchSubmit')



function buildURL(artist) {
  var baseURL = 'https://api.spotify.com/v1/search?q='
  baseURL += artist
  baseURL += '&type=artist'
  console.log(baseURL);
  return baseURL
}

function Search(event) {
  event.preventDefault()
  var artist = form.artist.value
  $.ajax({
    type: 'GET',
    url: buildURL(artist),
    success: function(data){
      form.artist.value = data.artists.items[0].name,
      form.imageUrl.value= data.artists.items[0].images[2].url,
      form.spotifyId.value= data.artists.items[0].id,
      form.genres.value= data.artists.items[0].genres;
    }
  })
}

search.addEventListener('click', Search)
