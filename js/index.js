const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();


function currentTime() {
    const data = new Date();
    let hourse = updateTime(data.getHours()) 
    let minute = updateTime(data.getMinutes()) 
    let seconds = updateTime(data.getSeconds()) 

    let month = new Date().toLocaleString('en', { month: "long"});
    let year = data.getFullYear()
    let dayNumber = new Date().toLocaleString('en', { day: '2-digit' })
    let weekday = new Date().toLocaleString('en', { weekday: 'long' })
    document.querySelector('.electric__watches').innerHTML = hourse + ":" + minute + ":" + seconds + " " + weekday + ", " + dayNumber + " " + month + " " + year;
}
function updateTime(params) {
    if (params < 10) {
        return "0" + params
    }
    else {
        return params
    }
}

function timeGO() {
    setInterval(function () {
        currentTime()
    }, 1000)
};


timeGO();







