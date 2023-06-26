export default function calculateRuntime(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursString = hours.toString();
  const minutesString = remainingMinutes.toString();

  return `${hoursString}h ${minutesString}m`;
}
