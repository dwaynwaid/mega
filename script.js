const btn = document.querySelector('.btb-toggle-color');
let lll = document.querySelector('.lll');

/*
var btn = document.getElementById("addBtn");
btn.addEventListener("click",function(){
    var numberTxt = document.getElementById("number").value;
    var number = parseInt(numberTxt,10);
     console.log(number+1);
});
*/


const body = document.body;

btn.addEventListener('click', () => {
   lll.textContent = Number(lll.textContent)+1;
   console.log((lll));

   const isDarkMOde = body.classList.toggle('dark-mode');

   if(isDarkMOde) {
      btn.innerHTML = 'Turn on light mode';


   } else {
      btn.innerHTML = 'Turn on dark mode';

   }

});

