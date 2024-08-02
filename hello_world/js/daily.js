document.addEventListener("DOMContentLoaded",function(){
    const calender = document.getElementById("calender");

    // now day
    const today = new Date();
    // now year month
    const year_month = document.createElement("div");
    // ~ 물결표 아래에 있는 키보드
    year_month.textContent = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    year_month.style.gridColumn = "1 / span 7";
    calender.appendChild(year_month);

    const daysOfWeek = ["월","화","수","목","금","토","일"];

    daysOfWeek.forEach((day,index) => {
        const daysOfWeek = document.createElement("div")
        daysOfWeek.textContent = day;
    
        if (index === 6){
            daysOfWeek.classList.add("day","sunday");
        }
        else if (index === 5){
            daysOfWeek.classList.add("day","saturday");
        }
        else{
            daysOfWeek.classList.add("day","day");
        }
        calender.appendChild(daysOfWeek);
    });
    for(let i = 1; i <= 31; i++){
        const day = document.createElement("div")
        day.classList.add("day");

        const currentDay = new Date(today.getFullYear(),today.getMonth(),i);
        const daysOfWeek = currentDay.getDay();
        if (daysOfWeek === 0) {
            day.classList.add("sunday");
        }
        else if(daysOfWeek === 6){
            day.classList.add("saturday");
        }
        day.textContent = i;
        calender.appendChild(day);
    }
});