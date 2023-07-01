export default function calculateRuntime(itemMinutes) {
  const hours = Math.floor(itemMinutes / 60);
  const remainingMinutes = itemMinutes % 60;

  const hoursString = hours.toString();
  const minutesString = remainingMinutes.toString();

  return `${hoursString > 0 ? `${hoursString}h` : ""} ${minutesString}m`;
}
