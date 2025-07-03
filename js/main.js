const birthday = new Date(2002, 4, 18);
const now = new Date();

const ageInSecond = Math.floor((now - birthday) / 1000)

//document.getElementById("time-counter").textContent = ageInSecond.toLocaleString()

setInterval(() => {
  const now = new Date();
  const seconds = Math.floor((now - birthday) / 1000);
  document.getElementById("time-counter").textContent = seconds.toLocaleString() + " วินาที";
}, 1000);