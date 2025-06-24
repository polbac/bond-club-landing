export const COLORS = ["#3b74fe", "#fe583b", "#fe9e1a", "#47966a", "#6930c3"];

export function getColor(index: number): string {
  const colorIndex = ((index % COLORS.length) + COLORS.length) % COLORS.length;

  return COLORS[colorIndex];
}
