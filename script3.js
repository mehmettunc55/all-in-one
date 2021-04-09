let output = document.querySelector('.output');
let optButton = document.querySelectorAll('.optButton');
let numButton = document.querySelectorAll('.numButton');
let dotButton = document.querySelector('.dotButton');
let equalButton = document.querySelector('.equals');
let clearButton = document.querySelector('.AC-button');
let deleteButton = document.querySelector('.DEL-button');
let output1 = document.querySelector('.output1');

clearButton.onclick = function(element){
    output.value = '0';
    output1.value = '';
};
numButton.forEach(function(element){
    element.onclick = function(num){
        if(output.value =='0') {
            output.value = '';
        }
        output.value += this.textContent;
        output1.value += this.textContent;
        
    };
});

optButton.forEach(function(element){
    element.onclick = function(opt){
        output.value += this.textContent;
        output1.value += this.textContent;
        
    }
});

equalButton.onclick = function(element){
    output.value = eval(output.value);
        
};

deleteButton.onclick = function(element){
    output.value = output.value.substring(0, output.value.length - 1);
    if (output.value == ''){
        output.value = '0';
    };
    output1.value = output1.value.substring(0, output1.value.length - 1);
}

