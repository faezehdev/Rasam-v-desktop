let parallaxLeft = gsap.timeline();
parallaxLeft.to('.projCatContainer' , {
    x : "60vw"
})
ScrollTrigger.create({
    animation:parallaxLeft , 
    trigger : ".scrollContainer",
    start:"top 50%",
    end:"bottom -200vw",
    scrub : 1,

})