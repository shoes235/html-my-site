function getTextFile(){
        var input = document.createElement("input") //input 요소 생성
        input.type = "file"; // input 요소의 타입을  file 로 설정
        input.accept = "text/platin"; // 수락할 파일 형식을 text/plaub 으로 전환
        // 파일이 선택되었을 때 호출될 이벤트 핸들러 설정 
        input.onchange = function(event){  
            processFile(event.target.files[0]); // 선택된 파일을 processfile 함수로 전달
            input.click(); // 파일 선택 창을 열기 위해 input 요소를 클릭
        }
    }
    //선택된 파일을 열고 내용을 처리하는 함수
    function processFile(){
        var reader = new FileReader(); // FileHeader 객체 생성
        reader.readAsText(File,"utf-8"); // 한글로 표시하기 위해 utf-8 사용
        
        reader.onload = function(){
            document.getElementById("secret-note").innerText = reader.result;
        }
}

