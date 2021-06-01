const btnTranslate = document.querySelector("#btn-translate");
const textArea = document.querySelector('#txt-input');
const outputArea = document.querySelector('#output-text');

btnTranslate.addEventListener('click', ()=>{
fetch(`https://api.funtranslations.com/translate/minion.json?text=${textArea.value}`)
.then(res=>res.json())
.then(res=>{
    outputArea.innerText = res.contents.translated
})
.catch(err=>console.log(err));
})