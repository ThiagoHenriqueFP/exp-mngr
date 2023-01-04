export function endAtGenerator(date: Date, parts: number = 1): Date {
  let d = new Date(date);

  d.setDate(d.getDate() + (30 * parts));
  d.setDate(1);
  d.setHours(0);
  d.setMinutes(0);
  d.setUTCMilliseconds(0);

  return d;
}
