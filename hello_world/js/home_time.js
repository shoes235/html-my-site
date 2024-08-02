function updateClock(){
        //현재 날짜와 시간을 가져옴
        var now = new Date();
        //y,m,d,h,m,s var save
        var year = now.getFullYear();
        var month = now.getMonth() + 1; // 0부터 시작하므로 +1
        var day = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
    
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second; 
    
        // yyyy-mm-dd-hh- HH:MM:SS
        var time_striping = 
        `${year}-${month}-${day} ${hour}:${minute}:${second}`
        document.getElementById("clock").innerHTML = time_striping
}
        
        setInterval(updateClock,1000);
    
        updateClock();
