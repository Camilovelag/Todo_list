export default function clearAll() {
  let parsedArr = JSON.parse(localStorage.getItem('taskArr'));
  let temp = parsedArr.filter((item) => item.completed === false);
  localStorage.setItem('taskArr', JSON.stringify(temp));
}