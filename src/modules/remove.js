export default function removeTask(parsedArr, task) {
  let temp = parsedArr.filter((item) => item !== task);
  parsedArr = temp;
  temp = parsedArr.map((item) => {
    item.index = parsedArr.indexOf(item) + 1;
    return item;
  });
  parsedArr = temp;
  localStorage.setItem('taskArr', JSON.stringify(parsedArr));
  return parsedArr;
}