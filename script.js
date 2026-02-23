console.log("hello world");
let section4Data = [
  {
    text: "This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!",
    img: "./assest/img/Photo.png",
  },
  {
    text: "Amazing service! The team delivered beyond expectations and communication was smooth throughout.",
    img: "./assest/img/ChatGPT Image Feb 22, 2026, 02_11_42 PM.png",
  },
  {
    text: "Highly skilled and very reliable. I would definitely recommend them for any web development work.",
    img: "./assest/img/ChatGPT Image Feb 22, 2026, 02_12_29 PM.png",
  },
];

const textEle = document.querySelector(".left-para p");
const imgEl = document.querySelector(".sec-right-img img");

const prevBtn = document.querySelectorAll(".sec-bottom img")[0];
const nextBtn = document.querySelectorAll(".sec-bottom img")[1];

let currentIndex = 0;

function updateSlider(index) {
  textEle.style.opacity = 0;
  imgEl.style.opacity = 0;

  setTimeout(() => {
    textEle.textContent = section4Data[index].text;
    imgEl.src = section4Data[index].img;

    textEle.style.opacity = 1;
    imgEl.style.opacity = 1;
  }, 200);
}

// console.log(textEle);


nextBtn.addEventListener("click",()=>{

    currentIndex=(currentIndex+1)%section4Data.length;
    updateSlider(currentIndex)

});

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + section4Data.length) % section4Data.length;
  updateSlider(currentIndex);
});



















