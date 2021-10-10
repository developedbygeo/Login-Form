import animateGsap from '../utils/animation';

export default function introAnimations() {
  window.addEventListener(
    'load',
    animateGsap('.logo', '.title', 'label', '.info', '.show', '.register')
  );
}
