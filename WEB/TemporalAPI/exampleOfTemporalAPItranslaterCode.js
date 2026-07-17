function lArToDTs(string) {
  string = String(string);
  const TA = string.indexOf("T");
  if (TA === -1) {
    return "Ошибка: Входная строка не содержит разделитель 'T'.";
  }
  const DATE = string.slice(0, TA);
  const TIME = string.slice(TA + 1);
  let date;
  let time;
  try {
    date = Temporal.PlainDate.from(DATE);
  } catch (error) {
    return `Ошибка при парсинге даты "${DATE}": ${error.message}`;
  }
  try {
    time = Temporal.PlainTime.from(TIME);
  } catch (error) {
    return `Ошибка при парсинге времени "${TIME}": ${error.message}`;
  }
  return {time:time, date: date, tid:TA};
}