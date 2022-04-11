// using selectors inside the element


const questions = document.querySelectorAll('.question');


questions.forEach(function(pregunta){
    const btn = pregunta.querySelector('.question-btn');
    btn.addEventListener('click', function () {
        questions.forEach(function(itemInterno){
            if(itemInterno !== pregunta ) {
                    itemInterno.classList.remove('show-text');
                }
            });
        pregunta.classList.toggle('show-text');
      });
    });


// traversing the dom

// const btns = document.querySelectorAll('.question-btn');
// console.log(btns);

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
//     });
// });


 