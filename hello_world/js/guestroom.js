function add_coment(){
    var comment = document.getElementById("comment").ariaValueMax;
    var comment_list = document.getElementById("comment_list");
    var new_comment = document.getElementById("new_comment");
    new_comment.innerHTML = "";
    comment_list.innerHTML ="";
    comment_list.appendChild(new_comment);
    document.getElementById("comment").value = "";
}
function clear_comment(){
    var comment_list = document.getElementById("comment_list");
    comment_list.innerHTML = "";
}