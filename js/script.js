/* ---------- Typing Animation ---------- */

var typed1 = new Typed(".typing1", {
  strings: [
    "I'm a Web Developer",
    "I'm a Web Designer",
    "I'm a Self Learner",
    "I'm a Hard Worker",
    "I Know HTML",
    "I Know CSS",
    "I Know Javascript",
  ],
  typeSpeed: 125,
  BackSpeed: 125,
  loop: true,
});

/* ---------- Aside ---------- */

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // allSection[j].classList.add("back-section");
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const traget = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + traget).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const traget = element.getAttribute("href").split("#")[1];
    if (
      traget ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  // console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

const form = document.querySelector("form");
function sendEmail1() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "vishwa.g4567@gmail.com",
    Password: "AA06646DA038B5F8EF75E7CA691D3C2E6C58",
    To: "vishwa.g7476@gmail.com",
    From: "vishwa.g4567@gmail.com",
    Subject:
      "New Contact Form Enquiry For " +
      document.getElementById("subject").value,
    Body:
      "Name: " +
      document.getElementById("name").value +
      " <br> Email: " +
      document.getElementById("email").value +
      " <br> Subject: " +
      document.getElementById("subject").value +
      " <br> Message: " +
      document.getElementById("message").value,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully",
        icon: "success",
      });
    }
  });
}
function sendEmail2() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "vishwa.g4567@gmail.com",
    Password: "AA06646DA038B5F8EF75E7CA691D3C2E6C58",
    To: document.getElementById("email").value,
    From: "vishwa.g4567@gmail.com",
    Subject: "Thank You For Submitting A Form",
    Body:
      "Hello <b>" +
      document.getElementById("name").value +
      ",</b> <br> <br> Thank you for submitting a form in my portfolio website and I will response your inquiry as soon as possible. <br> <br> <b> Thanking you, </b> <br> <b> Vishwa G, </b> <br> <b> Front-End Developer </b> ",
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail2();
  sendEmail1();
});
