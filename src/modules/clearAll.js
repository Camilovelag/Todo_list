export default function clearAll() {
  const parsedArr = JSON.parse(localStorage.getItem('taskArr'));
  const temp = parsedArr.filter((item) => item.completed === false);
  localStorage.setItem('taskArr', JSON.stringify(temp));
}