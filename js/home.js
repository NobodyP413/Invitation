/* Reveal animation */

function reveal(){

var reveals=document.querySelectorAll(".reveal");

for(var i=0;i<reveals.length;i++){

var windowHeight=window.innerHeight;
var elementTop=reveals[i].getBoundingClientRect().top;
var elementVisible=120;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}



/* Back to top button */

const topBtn=document.getElementById("topBtn");





/* Active navbar link */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".navLink");

// Select your scrolling container
const container = document.querySelector('.overflow-y-scroll');

container.addEventListener("scroll",reveal);
// Listen for scroll events on that specific element
container.addEventListener('scroll', (e) => {
    if(container.scrollTop>400){

    topBtn.style.display="block";

    }else{

    topBtn.style.display="none";

    }

    let current="";

    sections.forEach(section=>{

    const sectionTop=section.offsetTop;
    const sectionHeight=section.clientHeight;

    if(pageYOffset >= sectionTop - sectionHeight/3){

    current=section.getAttribute("id");

    }

    })

    navLinks.forEach(link=>{

    link.classList.remove("text-red-600");

    if(link.getAttribute("href")==="#"+current){

    link.classList.add("text-red-600");

    }

    })

});


topBtn.onclick=function(){

container.scrollTo({
top:0,
behavior:"smooth"
})

}

// Set the target date
const targetDate = new Date("October 17, 2026 00:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const gap = targetDate - now;

  // Time calculations
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate units
  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  // Update UI with leading zeros
  document.getElementById("days").innerText = d.toString().padStart(2, '0');
  document.getElementById("hours").innerText = h.toString().padStart(2, '0');
  document.getElementById("mins").innerText = m.toString().padStart(2, '0');
  document.getElementById("secs").innerText = s.toString().padStart(2, '0');

  // Stop if date is reached
  if (gap <= 0) {
    clearInterval(timerInterval);
    // Optional: Add "Time's up!" message logic here
  }
};

// Update every second
const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately on load


// const dots = document.querySelectorAll(".dot");

// 1. Define the callback function
let callback = (entries, observer) => {
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            // dots.forEach(dot => {
            //         console.log(dot.dataset.target === entry.target.id, dot.dataset.target,entry.target.id);
            //         dot.classList.toggle(
            //             "active",
            //             dot.dataset.target === entry.target.id
            //         );
            // });
            // console.log(entry.target.id + ' is in view!');
            if(entry.target.id == "s2" || entry.target.id == "s3" || entry.target.id == "s4"  || entry.target.id == "s4a" || entry.target.id == "s4b" || entry.target.id == "s4c" || entry.target.id == "s4d"){
                const elements = entry.target.querySelectorAll("[data-animate]");

                elements.forEach(el => {

                    const animation = el.dataset.animate;

                    // el.classList.remove(animation); // reset animation
                    void el.offsetWidth; // force reflow so animation can restart
                    el.classList.add(animation);

                    el.style.opacity = "1";
                });

            }
            entry.target.classList.add('is-visible');
        } else {
            if(entry.target.id == "s2" || entry.target.id == "s3" || entry.target.id == "s4" || entry.target.id == "s4a" || entry.target.id == "s4b" || entry.target.id == "s4c"|| entry.target.id == "s4d"){
                const elements = entry.target.querySelectorAll("[data-animate]");

                elements.forEach(el => {

                    const animation = el.dataset.animate;

                    el.classList.remove(animation);
                    el.style.opacity = "0";

                });

            }
            entry.target.classList.remove('is-visible');
        }
    });
};

// 2. Options
const options = {
    threshold: 0.5
};

// 3. Create observer
const observer = new IntersectionObserver(callback, options);

// 4. Observe multiple sections
const sectionList = document.querySelectorAll('.observe-section');

sectionList.forEach(section => {
    observer.observe(section);
});

// dots.forEach(dot => {
//     dot.addEventListener("pointerdown", () => {
//         document
//             .getElementById(dot.dataset.target)
//             .scrollIntoView({
//                 behavior: "smooth"
//             });
//     });
// });
window.addEventListener('load', function() {
            var audio = document.getElementById('myAudio');
            
            // Check if user came through the entrance page
            if (sessionStorage.getItem('audioAllowed') === 'true') {
                audio.play().catch(function(error) {
                    console.log("Playback failed: " + error);
                });
            }
        });
  const rsvpBtn = document.getElementById("rsvp_btn");

  rsvpBtn.addEventListener("pointerdown", () => {
    window.location.href='https://forms.gle/FKmY2LSxvVukkxF1A'
    rsvpBtn.disabled = true;
    rsvpBtn.textContent = "Redirecting...";
    rsvpBtn.style.backgroundColor = "#9CA3AF"; // Gray
    rsvpBtn.style.cursor = "not-allowed";
    rsvpBtn.style.opacity = "0.7";
    });

    window.addEventListener("pageshow", (event) => {
        rsvpBtn.disabled = false;
        rsvpBtn.textContent = "RSVP";
        rsvpBtn.style.backgroundColor = "#C0D6C1";
        rsvpBtn.style.opacity = "";
        rsvpBtn.style.cursor = "";
    });

const audio = document.getElementById("myAudio");
const musicBtn = document.getElementById("musicBtn");
const icon = musicBtn.querySelector("i");

musicBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        icon.className = "fa-solid fa-volume-high";
    } else {
        audio.pause();
        icon.className = "fa-solid fa-volume-xmark";
    }
});