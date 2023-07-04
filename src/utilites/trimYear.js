export default function trimYear(itemDate) {
  if (!itemDate) return;

  const year = itemDate.substring(0, 4);
  return year;
}
