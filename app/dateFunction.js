export function getDate() {
  const date = new Date(Date.now());
  let hours = date.getDay();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDay();
  let month = date.toLocaleString('en', { month: 'long' });
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  const dateResult = `${day} ${month},${hours}:${minutes}:${seconds}`;
  return dateResult;
}
