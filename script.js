gsap.from(".australian-family h2,p",{
    y:80,
    opacity:0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger:{
        trigger: ".australian-family h2,p",
        scroller: "body",
        scrub: 1,
    }
})

gsap.from(".learn .box",{
    y: 50,
    duration: 3,
    stagger: 0.7,
    scrollTrigger:{
        trigger: ".learn .box",
        scroller: "body",
        scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 40%"
    }
})

gsap.from(".weather .box",{
    x: 50,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    scrollTrigger: ".weather .box",
})

gsap.from(".discover .box",{
    x: 50,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    scrollTrigger: ".discover .box",
})

gsap.from(".weather h2",{
    y:50,
    opacity:0,
    duration: 1,
    stagger: 0.2,
    screw: 20,
})

gsap.from(".discover h3",{
    y:30,
    opacity: 0,
    duration: 1,
})

gsap.from(".two-box .left-box,.right-box",{
    opacity: 0,
    y: 20,
    duration: 3,
    scrollTrigger:".two-box .left-box,.right-box",
})


gsap.from(".two-box .full-box",{
    opacity: 0,
    y: 20,
    duration: 2,
    scrollTrigger:".two-box .full-box",
})


gsap.from(".green-box",{
    opacity: 0,
    y: 20,
    duration: 2,
    scrollTrigger:".two-box .full-box",
})



// gsap.from(".box_two",{
//     y: 50,
//     delay: 1,
//     duration: 2,
// })

// gsap.from(".box_three",{
//     y: 50,
//     delay: 1,
//     duration: 2,
// })

// gsap.from(".box_four",{
//     y: 50,
//     delay: 1,
//     duration: 2,
// })