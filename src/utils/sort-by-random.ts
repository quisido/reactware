export default function sortByRandom(): -1 | 1 {
  return Math.random() < 0.5 ? -1 : 1;
}
