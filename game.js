let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        
        if(buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;// screenValue is varable and screen.value is input of calci 
            screen.value = screenValue;// we used + which mean we used * at manny times
            
        }
        else if (buttonText =='C'){
              screenValue="";
              screen.value=screenValue;
              
        }
         else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if (buttonText=='⌦'){
            screenValue = screen.value.slice(0,-1);
            screen.value = screenValue;
        }
            else{
            screenValue += buttonText;
        
            screen.value = screenValue ;
        }

    })
}





