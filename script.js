/* MAJESTIC NEW YEAR TIMER */
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.querySelector(".timer-title").textContent = "A New Chapter Has Begun";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(d).padStart(2, "0");
  document.getElementById("hours").textContent = String(h).padStart(2, "0");
  document.getElementById("minutes").textContent = String(m).padStart(2, "0");
  document.getElementById("seconds").textContent = String(s).padStart(2, "0");
}

setInterval(updateTimer, 1000);
updateTimer();



/* SOFT SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(r=>{
    if(r.getBoundingClientRect().top < trigger){
      r.classList.add("active");
    }
  });
});

/* PERSONALIZED NAME REVEAL */
const name = "You"; // Change name here
const nameEl = document.querySelector(".name");
nameEl.textContent = "";

[...name].forEach((char,i)=>{
  setTimeout(()=>{
    nameEl.textContent += char;
  }, i * 240);
});
