export function endAtGenerator(date: Date, parts: number = 1): Date {

  let parsedDate = new Date(date);
  let d = new Date(parsedDate.getFullYear(), parsedDate.getMonth() + parts, 0);

  return d;
}
