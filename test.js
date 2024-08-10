
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');

buttons.forEach(function (button) {
    button.addEventListener('click', function(e) {
        let value = e.target.dataset.num
        if (value !== undefined){
            screen.value += value;
        }
    })
})

equal.addEventListener('click',function(){
    if(screen.value !== ''){
        try{
            screen.value= eval(screen.value);
        }
        catch{
            screen.value=''
        }
    }
});

clear.addEventListener('click', function(){
    screen.value = "";
});


var i = 0;