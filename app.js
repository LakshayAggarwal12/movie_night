/*
 * Movie Night workshop starter.
 * Live demo: implement title search.
 * Student challenges: persistent watchlist, genre/rating filters, Surprise Me.
 */
const movieGrid=document.querySelector("#movieGrid");
const movieCount=document.querySelector("#movieCount");
const searchInput=document.querySelector("#searchInput");
const genreFilter=document.querySelector("#genreFilter");
const ratingFilter=document.querySelector("#ratingFilter");
const resetButton=document.querySelector("#resetButton");
const emptyResetButton=document.querySelector("#emptyResetButton");
const emptyState=document.querySelector("#emptyState");
const surpriseButton=document.querySelector("#surpriseButton");
const surpriseMessage=document.querySelector("#surpriseMessage");
const watchlistToggle=document.querySelector("#watchlistToggle");
const watchlistCount=document.querySelector("#watchlistCount");
const watchlistMessage=document.querySelector("#watchlistMessage");

// CHALLENGE 1: restore saved movie IDs from localStorage instead of starting empty.
let watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
let showingWatchlist=false;
let visibleMovies=[...movies];

function renderMovies(movieList){
  visibleMovies=movieList;
  movieGrid.innerHTML="";
  movieList.forEach(movie=>{
    const isSaved=watchlist.includes(movie.id);
    const card=document.createElement("article");
    card.className="movie-card";
    card.innerHTML=`
      <div class="poster ${movie.posterClass}" data-symbol="${movie.symbol}">
        <div><div class="poster-title">${movie.title}</div><span class="poster-year">${movie.year}</span></div>
      </div>
      <div class="card-body">
        <div class="card-meta"><span class="genre-tag">${movie.genre}</span><span class="rating">★ ${movie.rating.toFixed(1)} / 5</span></div>
        <h3 class="card-title">${movie.title}</h3>
        <div class="card-actions">
          <button class="watch-button ${isSaved?"is-saved":""}" type="button" data-watch-id="${movie.id}" aria-pressed="${isSaved}">${isSaved?"♥ In watchlist":"♡ Add to watchlist"}</button>
          <span class="details-label">${movie.year} FILM</span>
        </div>
      </div>`;
    movieGrid.appendChild(card);
  });
  movieCount.textContent=`${movieList.length} ${movieList.length===1?"film":"films"}`;
  emptyState.hidden=movieList.length!==0;
  movieGrid.hidden=movieList.length===0;
  const countElement=document.querySelector("#watchlistCount");
  if(countElement) countElement.textContent=watchlist.length;
}

function applyFilters(){
  /*
   * LIVE DEMO: implement case-insensitive title search using searchInput.value.
   * CHALLENGE 2: combine genre and minimum-rating filters here.
   * Keep this as the single function that decides which movies are displayed.
   */
  let result=[...movies];
  if(showingWatchlist) result=result.filter(movie=>watchlist.includes(movie.id));
  renderMovies(result);
}

function toggleWatchlist(movieId){
  const idx = watchlist.indexOf(movieId);
  if (idx !== -1) {
    watchlist.splice(idx, 1);
  } else {
    watchlist.push(movieId);
  }
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
  applyFilters();
}

function showSurpriseMovie(){
  /*
   * CHALLENGE 3:
   * Choose a random movie from the current filtered results.
   * Handle an empty result list without crashing.
   * Display the selected title in surpriseMessage.
   */
  surpriseMessage.hidden=false;
  surpriseMessage.textContent="Implement Surprise Me: choose from the current results.";
}

function showWatchlist(){
  showingWatchlist=!showingWatchlist;
  watchlistToggle.innerHTML=showingWatchlist
    ? `← All movies <span class="button-count">${watchlist.length}</span>`
    : `♡ Watchlist <span id="watchlistCount" class="button-count">${watchlist.length}</span>`;
  applyFilters();
  watchlistMessage.hidden=false;
  watchlistMessage.textContent=showingWatchlist?"Viewing your watchlist.":"Viewing the full movie collection.";
}

movieGrid.addEventListener("click",event=>{
  const button=event.target.closest("[data-watch-id]");
  if(!button)return;
  toggleWatchlist(Number(button.dataset.watchId));
});

searchInput.addEventListener("input",applyFilters);
genreFilter.addEventListener("change",applyFilters);
ratingFilter.addEventListener("change",applyFilters);
resetButton.addEventListener("click",resetFilters);
emptyResetButton.addEventListener("click",resetFilters);
surpriseButton.addEventListener("click",showSurpriseMovie);
watchlistToggle.addEventListener("click",showWatchlist);

function resetFilters(){
  searchInput.value="";
  genreFilter.value="All";
  ratingFilter.value="0";
  showingWatchlist=false;
  watchlistMessage.hidden=true;
  surpriseMessage.hidden=true;
  watchlistToggle.innerHTML=`♡ Watchlist <span id="watchlistCount" class="button-count">${watchlist.length}</span>`;
  applyFilters();
}

renderMovies(movies);
