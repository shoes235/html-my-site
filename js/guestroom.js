var now = new Date
var year = now.getFullYear();
var month = now.getMonth() + 1; // 0부터 시작하므로 +1
var day = now.getDate();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();

function add_comment(){
    var time = `${year}년${month}월${day}일 ${hour}시 ${minute}분에 작성`
    var comment = document.getElementById("comment").value;
    var comment_list = document.getElementById("comment_list");
    var new_comment = document.createElement("new_comment");

    new_comment.innerHTML = time + comment;
    comment_list.innerHTML ="";
    comment_list.appendChild(new_comment);
    document.getElementById("comment").value = "";
}
function clear_comment(){
    var comment_list = document.getElementById("comment_list");
    comment_list.innerHTML = "";
    time = "";
}