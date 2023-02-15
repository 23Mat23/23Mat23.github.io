

const buttons = document.querySelectorAll('.ver-mas-btn');
const textElements = document.querySelectorAll('.hideText');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('showText');
    
    function toggleText(){
        hideText_btn.classList.toggle('ver-mas-btn');
        if(hideText.classList.botonazo('ver-mas-btn')){
            hideText_btn.innerHTML= 'ver mas';
        }
        else{
            hideText_btn.innerHTML='ver menos';
        }
    }
  });
});

