// Your code goes here
 // KEYDOWN & KEYUP

 const newText = document.querySelector(".logo-heading");

 window.addEventListener("keydown", () => {
   newText.textContent = "Come Join Us!";
   newText.style.color = "#c7624c";
   newText.style.fontSize = "5rem";
 });
 
 window.addEventListener("keyup", () => {
   newText.textContent = "Fun Bus";
   newText.style.color = "#212529";
   newText.style.fontSize = "4rem";
 });
 
 
 // MOUSE ENTER
 
 let Img = document.querySelector("header img");
 Img.addEventListener("mouseenter", () => {
   Img.style.transform = "scale(1)";
   Img.style.transition = "all 0.3s";
 });
 
 //MOUSE LEAVE
 Img.addEventListener("mouseleave", () => {
   Img.style.transform = "scale(.8)";
   Img.style.transition = "all 0.3s";
 });
 
 //DOUBLE CLICK
 let changeImg = document.querySelector("header img");
 changeImg.addEventListener("dblclick", event => {
   changeImg.src = "img/thurderstrom.jpg";
   event.stopPropagation();
 });
 
 // RESIZE
 window.addEventListener("resize", () => {
   const resizeBody = document.querySelector("body");
   const resizeHeader = document.querySelector("header");
 
   resizeBody.style.backgroundColor = "#daf3f5";
   resizeHeader.style.backgroundColor = "#fcf2a4";
 });
 
 
 
 //SCROLL
 let body = document.querySelector("body");
 window.addEventListener("scroll", () => {
   body.style.backgroundImage = "linear-gradient(red, yellow, blue)";
 });
 
 //stretch
 TweenMax.to(".img-content", 6, {
   rotation: 360,
   ease: Elastic.easeOut.config(1, 6)
 });
 
 TweenMax.to(".img-content", 0.5, { y: 10, yoyo: true, repeat: -1 });
 
 //MOUSEOUT
 
 let links = document.querySelectorAll("a").forEach(element => {
   element.addEventListener("mouseout", () => {
     element.style.color = "blue";
   });
 });
 
 //Mouseover & mouseleave with GSAP Stretch Task on 'p'
 const boxes = document.querySelectorAll("p");
 boxes.forEach(box => {
   box.addEventListener("mouseover", e => {
     TweenMax.to(e.target, 0.5, {
       scale: 0.8,
       filter: "none",
       ease: Elastic.easeOut.config(1, 0.75)
     });
   });
   box.addEventListener("mouseleave", e => {
     TweenMax.to(e.target, 0.5, {
       scale: 1,
       filter: "grayscale(1) blur2px)",
       ease: Power1.easeIn
     });
   });
 });
 
 TweenMax.to("p", 6, {
   rotation: 360,
   ease: Elastic.easeOut.config(1, 6)
 });
 
 ////Mouseover & mouseleave with GSAP Stretch Task on 'h4'
 const titlesOne = document.querySelectorAll("h4");
 titlesOne.forEach(box => {
   box.addEventListener("mouseover", e => {
     TweenMax.to(e.target, 0.5, {
       scale: 1.8,
       ease: Elastic.easeOut.config(1, 0.75)
     });
   });
   box.addEventListener("mouseleave", e => {
     TweenMax.to(e.target, 0.5, {
       scale: 1,
       filter: "grayscale(1) blur2px)",
       ease: Power1.easeIn
     });
   });
 });
 
 TweenMax.to("h4", 6, {
   rotation: 360,
   ease: Elastic.easeIn.config(1, 6)
 });
 
 //Mouseover & mouseleave with GSAP Stretch Task on 'h2'
 const titlesTwo = document.querySelectorAll("h2");
 titlesTwo.forEach(box => {
   box.addEventListener("mouseover", e => {
     TweenMax.to(e.target, 0.5, {
       scale: 1.5,
       ease: Elastic.easeOut.config(1, 0.75)
     });
   });
   box.addEventListener("mouseleave", e => {
     TweenMax.to(e.target, 0.5, {
       scale: 1,
       filter: "grayscale(1) blur2px)",
       ease: Power1.easeIn
     });
   });
 });
 
 TweenMax.to("h2", 6, {
   rotation: 360,
   ease: Elastic.easeIn.config(1, 6)
 });
 
 //scroll with stretch GSAP
 
 let navigation = document.querySelector("header");
 window.addEventListener("scroll", () => {
   navigation.style.backgroundImage = "linear-gradient(red,red)";
 });
 
 TweenMax.to(".content-destination img", 0.5, { y: 10, yoyo: true, repeat: -1 });
 
 //Scroll Footer
 let bottomPage = document.querySelector("footer");
 window.addEventListener("scroll", () => {
   bottomPage.style.backgroundImage = "linear-gradient(blue,blue)";
 });
 //STOP-PROPAGATION  EXAMPLE-1

document.querySelectorAll(".destination").forEach(div => {
    div.addEventListener("click", () => {
      div.style.backgroundColor = "#f5d6c1";
    });
  });
  
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("I clicked on the button");
      event.stopPropagation();
    });
  });
  
  
   //stop-propagation EXAMPLE-2
  
   const test1 = document.querySelector('.text-content p').addEventListener('click', () => {
    event.target.style.color = 'green'
    event.stopPropagation()
  })
  
  const test2 = document.querySelector('.text-content').addEventListener('click', () => {
   event.target.style.backgroundColor = 'grey'
  })
  
   // PREVENT DEFAULT
  
  const stop = document.querySelectorAll(".nav a");
  stop.forEach(event => {
    event.addEventListener("click", event => {
    event.preventDefault();
    });
  });