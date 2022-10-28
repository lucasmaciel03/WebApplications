var sendTask = document.querySelector('.sendTask');
var result = document.querySelector('.result');
var camp = document.querySelector('.camp')

camp.focus();

sendTask.addEventListener('click', addTask);
function addTask(){
    var resultU = (camp.value);
    result.innerHTML += resultU;
    result.innerHTML += '&nbsp'
    result.innerHTML += '<button class="delete"></button><i class="fas fa-remove"> </button> </i>';
    result.innerHTML += "<br>";

    console.log(resultU);   
}