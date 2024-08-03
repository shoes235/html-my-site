var now = new Date
var year = now.getFullYear();
var month = now.getMonth() + 1; // 0부터 시작하므로 +1
var day = now.getDate();
var hour = now.getHours();
var minute = now.getMinutes();
minute = minute < 10 ? "0" + minute : minute;
second = second < 10 ? "0" + second : second; 

function add_comment(){
    var time_list = document.getElementById("time_list");

    var comment = document.getElementById("comment").value;
    var comment_list = document.getElementById("comment_list");
    var new_comment = document.createElement("new_comment");

    new_comment.innerHTML = comment;
    comment_list.innerHTML ="";
    comment_list.appendChild(new_comment);
    document.getElementById("comment").value = "";

    time_list.innerHTML = "";
    var time = `${year}-${month}-${day} ${hour}:${minute} 작성`;
    time_list.innerHTML = time;
}
function clear_comment(){
    var comment_list = document.getElementById("comment_list");
    var time_list = document.getElementById("time_list");
    comment_list.innerHTML = "";
    time_list.innerHTML = "";
}