// var section=document.querySelector("#section");
// var slide=document.querySelector(".slide")
// console.log(slide)

gsap.timeline({
    scrollTrigger: {
        trigger: ".slide",
        scroller: "body",
        start: "top 75%",
        end: "bottom 1%",
        scrub:true,
    }
})
  .to("section",{
    transform: "rotateX(180deg) rotateY(0deg)",

   })