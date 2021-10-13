import JSConfetti from 'js-confetti';

export default function throwConfetti() {
  const confetti = new JSConfetti();
  confetti.addConfetti({
    confettiColors: [
      '#F94144',
      '#F3722C',
      '#F8961E',
      '#F9844A',
      '#90BE6D',
      '#43AA8B',
      '#455D73',
      '#277DA1',
      '#F65BE3',
    ],
    confettiRadius: 3,
    confettiNumber: 750,
  });
}
