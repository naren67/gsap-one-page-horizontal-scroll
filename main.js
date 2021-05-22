
const tween = new TimelineLite()


tween.add(
          gsap.to('.two', 5, {
                    x: -window.innerWidth,
                    scrollTrigger:{
                              markers:true,
                              trigger: '.trigger__from',
                              start: 'top top',
                              scrub: true,
                              snap: true
                    }
                    
          })
)


const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({

          triggerElement: '.trigger__from',
          duration: 1000,
                    // hook 1-bottom  0.5-center  0-top
          triggerHook:0

})
// set the rocket 
.setTween(tween)
.addIndicators()
.addTo(controller)
//set the container untill the animation completes
.setPin('.trigger__from')