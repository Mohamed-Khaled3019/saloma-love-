// ==========================
// Music
// ==========================
const music = document.getElementById("background-music");
const musicBtn = document.getElementById("music-toggle");

musicBtn.addEventListener("click", () => {

  if (music.paused) {

    music.play();

    // إضافة تأثير التشغيل
    musicBtn.classList.add("active");
    musicBtn.innerHTML = "♫";

  } else {

    music.pause();

    // إزالة التأثير
    musicBtn.classList.remove("active");
    musicBtn.innerHTML = "♫";
  }

});

// ==========================
// Counter
// ==========================
const startDate = new Date("2021-12-07");

function updateCounter() {

  const now = new Date();

  let years =
    now.getFullYear() -
    startDate.getFullYear();

  let months =
    now.getMonth() -
    startDate.getMonth();

  let days =
    now.getDate() -
    startDate.getDate();

  // معالجة الأيام السالبة
  if (days < 0) {

    months--;

    const previousMonth =
      new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      );

    days += previousMonth.getDate();
  }

  // معالجة الشهور السالبة
  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("years").textContent =
    years;

  document.getElementById("months").textContent =
    months;

  document.getElementById("days").textContent =
    days;
}

// ==========================
// Load Photos
// ==========================
function loadPhotos() {

  const container =
    document.getElementById("photos");

  container.innerHTML = "";

  for (let i = 1; i <= 15; i++) {

    const envelope =
      document.createElement("div");

    envelope.className =
      "envelope reveal";

    envelope.innerHTML = `
      <div class="envelope-inner">

        <div class="envelope-front">
          <h3>اوعي تدوسي ❤️</h3>
        </div>

        <div class="envelope-back">
          <img
            src="images/${i}.jpeg"
            alt="Saloma ❤️"
          >
        </div>

      </div>
    `;

    // فتح وقفل الظرف
    envelope.addEventListener(
      "click",
      () => {
        envelope.classList.toggle("open");
      }
    );

    container.appendChild(envelope);
  }
}

// ==========================
// Scroll Reveal
// ==========================
function handleScroll() {

  const reveals =
    document.querySelectorAll(".reveal");

  reveals.forEach((element) => {

    const position =
      element.getBoundingClientRect().top;

    const screenPosition =
      window.innerHeight - 100;

    if (position < screenPosition) {
      element.classList.add("active");
    }
  });
}

// ==========================
// Start
// ==========================
updateCounter();
loadPhotos();
handleScroll();

// تحديث العداد كل يوم
setInterval(
  updateCounter,
  86400000
);

// مراقبة الاسكرول
window.addEventListener(
  "scroll",
  handleScroll
);