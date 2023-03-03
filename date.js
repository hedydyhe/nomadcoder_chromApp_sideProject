const date = document.querySelector("#date");

const onAmPm = (time) => time <= "12" ? `오전 ${time}` : `오후 ${time - "12"}`

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const dateName = today.getDate();
  const weekday = new Array();
  weekday[0] = "일"
  weekday[1] = "월"
  weekday[2] = "화"
  weekday[3] = "수"
  weekday[4] = "목"
  weekday[5] = "금"
  weekday[6] = "토"
  const dayName = weekday[today.getDay()];
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  const seconds = String(today.getSeconds()).padStart(2, "0");
  const ampmHour = onAmPm(hours);
  date.innerText = `${year}년 ${month}월 ${dateName}일 ${dayName}요일 ${ampmHour}:${minutes}:${seconds}`;
}

getDate();
setInterval(getDate, 1000);


