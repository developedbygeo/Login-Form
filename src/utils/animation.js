import { gsap } from 'gsap';

export default function animateGsap(
  el,
  el2 = el,
  el3 = el2,
  el4 = el3,
  el5 = el4,
  el6 = el5
) {
  const timeline = gsap.timeline({ defaults: { duration: 0.5, opacity: 0 } });
  timeline
    .from(`${el}`, { y: -100, opacity: 0, duration: 1, ease: 'Power2.easeIn' })
    .from(`${el2}`, { duration: 0.7, y: -100, ease: 'Power1.easeOut' })
    .from(`${el3}`, { x: -300, stagger: 0.3 })
    .from(`${el4}`, { backgroundPosition: '200px 0px', stagger: 0.15 }, '-=0.5')
    .from(`${el5}`, { stagger: 0.15 }, '-=1')
    .from(`${el6}`, { backgroundPosition: '0px 100px' }, '-=2');
}
