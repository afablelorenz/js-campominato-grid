const gridEl = document.querySelector('section#grid');


for(let i=0; i < 100; i++){
    const squareEl = document.createElement('article');
    squareEl.classList.add('square');
    squareEl.addEventListener('click', function(){
        squareEl.classList.add('active');
        console.log(i + 1);
    });
    gridEl.appendChild(squareEl);
}

squareEl.addEventListener('click', function(){
    
});