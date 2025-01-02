export const COLORS = ["#8e99e4", "#90be6d", "#43aa8b", "#76a88d", "#6930c3"];

export function getColor(index: number): string {
  const colorIndex = ((index % COLORS.length) + COLORS.length) % COLORS.length;

  return COLORS[colorIndex];
}
