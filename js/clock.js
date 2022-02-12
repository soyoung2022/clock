const timeClass = document.querySelector(".time");
const dateClass = document.querySelector(".date");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let pmOrAm;
function clock(){
    const todayDate = new Date();

    // timeClass
    let hour = todayDate.getHours();
    let minute = String(todayDate.getMinutes()).padStart(2, "0");
    let second = String(todayDate.getSeconds()).padStart(2, "0");
    if(hour > 12){
        hour -= 12;
        pmOrAm = "pm";
    } else if(hour == 12){
        pmOrAm = "pm";
    } else{
        pmOrAm = "am";
    }
    hour = String(hour).padStart(2, "0");
    timeClass.innerText = `${hour}:${minute}:${second} ${pmOrAm}`;

    // dateClass
    const year = todayDate.getFullYear();
    const month = String(todayDate.getMonth()+1).padStart(2, "0");
    const date = String(todayDate.getDate()).padStart(2, "0");
    const day = todayDate.getDay();
    dateClass.innerText = `${year} ${month} ${date} ${days[day]}`;
}

clock();
setInterval(clock, 1000);