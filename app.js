var sound = document.getElementById("sound")
function playSound() {
    var audio = new Audio('./sound/pop2.mp3');
    audio.play();
}
sound.addEventListener("click",playSound);

var buttons = document.getElementsByClassName("button");
var display = document.getElementById('display');

var operand1 = 0;
var operand2 = null;
var operator = null;



for(var i=0;i<buttons.length;i++) {

    buttons[i].addEventListener('click',function() {

        var value = this.getAttribute('data-value');

        if(display.innerText=="inValid"||display.innerText=="Infinity") display.innerText= value;
        else if(operand2==null&&operator!=null&&(value=='+'||value=='-'||value=='*'||value=='/'||value=='%')) {
            display.innerText = display.innerText.substring(0,display.innerText.length-1) + value;
        }
        else display.innerText+=value;

        if(value=='ac') {
            display.innerText = '';
            operand1=0;
            operand2=null;
            operator=null;
        }
        else if(value=="sign") {
            operand1=parseFloat(display.innerText);
            if(Number.isNaN(operand1)==true)   {
                operand1=0;
            }
            display.innerText = -operand1;
        }

        else if(value=='+'||value=='-'||value=='*'||value=='/'||value=='%') {
            if(operand2!=null&&operator!=null) {
                operand2 = parseFloat(operand2);
                var string;
                if(operator=='+') string= "operand1 + operand2";
                else if(operator=='-') string= "operand1 - operand2";
                else if(operator=='*') string= "operand1 * operand2";
                else if(operator=='/') string= "operand1 / operand2";
                else if(operator=='%') string= "operand1 % operand2";
                var res = eval(string);
                if(Number.isNaN(res)==true) {
                    display.innerText="inValid";
                }
                else    display.innerText=res+value;
                operand1 = parseFloat(res);
                operand2=null;
                operator=value;
            }
            else {
                operand1 = parseFloat(display.innerText);
                if(Number.isNaN(operand1)==true)   {
                    operand1=0;
                }
                operator = value;
            }
            // display.innerText += value;
        }

        else if(value=='='){
            if(operator!=null&&operand2!=null) {
                // display.innerText=operand2;
                operand2 = parseFloat(operand2);
                var string;
                if(operator=='+') string= "operand1 + operand2";
                else if(operator=='-') string= "operand1 - operand2";
                else if(operator=='*') string= "operand1 * operand2";
                else if(operator=='/') string= "operand1 / operand2";
                else if(operator=='%') string= "operand1 % operand2";
                var res = eval(string);
                if(Number.isNaN(res)==true) {
                    display.innerText="inValid";
                }
                else    display.innerText=res;
                operand1 = parseFloat(res);
                operand2=null;
                operator=null;
            }
            else {
                display.innerText="inValid";
                operand1=0;
                operator=null;
            }
        }

       else if(operator!=null) {
            if(operand2==null)  {
                operand2=value;
            }
            else {
                operand2 += value;
            }
       }
        


    })
}




