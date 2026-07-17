const tracks = [
  { title: "Dandelions", artist: "Ruth B.", duration: 228 },
  { title: "Sunflower", artist: "Rex Orange County", duration: 252 },
  { title: "Space Song", artist: "Beach House", duration: 320 },
];

const playBtn = document.getElementById("play");
const previousBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const player = document.querySelector(".player");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const trackNumber = document.getElementById("track-number");
const seek = document.getElementById("seek");
const elapsed = document.getElementById("elapsed");
const duration = document.getElementById("duration");

let playing = false;
let trackIndex = 0;
let currentTime = 54;
let ticker;

function formatTime(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function renderProgress() {
  const percent = (currentTime / tracks[trackIndex].duration) * 100;
  seek.value = percent;
  seek.style.setProperty("--progress", `${percent}%`);
  elapsed.textContent = formatTime(currentTime);
}

function renderTrack() {
  const track = tracks[trackIndex];
  title.textContent = track.title;
  artist.textContent = track.artist;
  trackNumber.textContent = `${String(trackIndex + 1).padStart(2, "0")} / ${String(tracks.length).padStart(2, "0")}`;
  duration.textContent = formatTime(track.duration);
  currentTime = 0;
  renderProgress();
  playBtn.setAttribute("aria-label", `${playing ? "Pause" : "Play"} ${track.title}`);
}

function setPlaying(nextState) {
  playing = nextState;
  player.classList.toggle("playing", playing);
  playBtn.textContent = playing ? "⏸" : "▶";
  playBtn.setAttribute("aria-pressed", playing);
  playBtn.setAttribute("aria-label", `${playing ? "Pause" : "Play"} ${tracks[trackIndex].title}`);
  clearInterval(ticker);
  if (playing) {
    ticker = setInterval(() => {
      currentTime += 1;
      if (currentTime >= tracks[trackIndex].duration) changeTrack(1);
      renderProgress();
    }, 1000);
  }
}

function changeTrack(direction) {
  trackIndex = (trackIndex + direction + tracks.length) % tracks.length;
  renderTrack();
}

playBtn.addEventListener("click", () => setPlaying(!playing));
previousBtn.addEventListener("click", () => changeTrack(-1));
nextBtn.addEventListener("click", () => changeTrack(1));
seek.addEventListener("input", () => {
  currentTime = Math.round((Number(seek.value) / 100) * tracks[trackIndex].duration);
  renderProgress();
});

renderTrack();
currentTime = 54;
renderProgress();
