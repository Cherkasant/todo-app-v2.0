export function getDate() {
  const date = new Date(Date.now());
  const dateResult = `${date.getHours()}:${String(date.getMinutes()).padStart(
    2,
    '0'
  )} ${date.toLocaleString('en', { day: 'numeric' })} ${date.toLocaleString(
    'en',
    { month: 'long' }
  )}`;
  return dateResult;
}
