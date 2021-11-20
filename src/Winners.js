export default function Winners(items) {
  const option = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < option.length; i++){
    const [a, b, c] = option[i];
    if (items[a] && items[a] === items[b] && items[a] === items[c]) {
      return items[a];
    }
  }
  return null
}