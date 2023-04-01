"use strict";

const $showsList = $("#showsList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");
const $ul = $('#episodesList');


/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(val) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.
  const res = await axios.get(`https://api.tvmaze.com/singlesearch/shows/?q=${val}`)
  console.log(res.data);
    const id = res.data.id;
    const name = res.data.name;
    const summary = res.data.summary;
    const img = res.data.image.medium;
    const imdb = res.data.externals.imdb;
    console.log(res.data.id);
    console.log(imdb)
    return[
      {
        id,
        name,
        summary,
        img,
        imdb
        
      }
    ]
  }



/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();
  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="card">
           <img
              src="${show.img}"
              alt="https://tinyurl.com/tv-missing"
              class="card-img-top">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button id = "episode-btn" class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>
       </div>
      `);
    $showsList.append($show);
    if(show.img === null){
      console.log(yes)
      $('.card-img-top').add('src', "https://tinyurl.com/tv-missing");
    }
  
    $(document).on('click','#episode-btn', async function(){
    const episodesData = await getEpisodesOfShow(show.id);
    populateEpisodes(episodesData);
    })
}

  
}



/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);
  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

 async function getEpisodesOfShow(val) { 
    const res = await axios.get(`https://api.tvmaze.com/shows/${val}/episodes`);
    const episodes = [];
    for(let info of res.data){
    const id = info.id;
    const name = info.name;
    const season = info.season;
    const number = info.number;
    episodes.push({
      id,
      name,
      season,
      number
    })
  }
  console.log(episodes)
  return episodes;
  

 }

/** Write a clear docstring for this function... */

 function populateEpisodes(episodes) {
  $ul.empty();
  for(let episode of episodes){
    const $newEpisode = $('<li>');
    $newEpisode.text(`${episode.name} (Season ${episode.season}, number ${episode.number})`)
    $ul.append($newEpisode);
  }
  $episodesArea.show();
  }

 