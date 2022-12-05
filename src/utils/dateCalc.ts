export function dateCalc(date: Date, parts: number = 0): Date {
  const d = new Date(date);

  if (d.getMonth() + parts >= 12) {
    const year = (d.getMonth() + parts) / 12;

    return new Date(`${d.getMonth() + parts - 11}-30-${d.getFullYear() + Math.trunc(year)}`);
  }

  return new Date(`${d.getMonth() + parts}-30-${d.getFullYear()}`);
}
