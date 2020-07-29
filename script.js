document.getElementById("screen-input").value = '';
function buttonClick(num){
    var screen = document.getElementById("screen-input");
    screen.value += num;
    if(num == ""){
        screen.value = num;
    }
}
function backSpace(){
    var screen = document.getElementById("screen-input").value;
    var backSpace = screen.slice(0, screen.length-1);
    document.getElementById("screen-input").value = backSpace;
}
function pinGenerator(){
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("pin-number").value = Math.round(randomNumber);
}
function submitBtn(){
    var randomNumber = document.getElementById("pin-number").value;
    var screenInput = document.getElementById("screen-input").value;
    if(randomNumber == screenInput){
        document.getElementById("pinMatchShow").style.display = 'block';
        
    }
    else{
        document.getElementById("pinMatchNotShow").style.display = 'block';
         
            var leftTry = document.getElementById("left").innerText;
            var left = parseInt(leftTry);
            var i = left-1;
            document.getElementById("left").innerText = i+"try left";
            document.getElementById("left").style.display = 'block';
            if(i <0){
                document.getElementById("left").innerText = 0+"try left";
                submit.setAttribute('disabled', 'disabled');
            }    
        
        }
}
