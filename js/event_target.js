const buttonsContainer = document.querySelector('.js_buttons');
// console.log('buttonsContainer', buttonsContainer);


buttonsContainer.addEventListener("click", onClickBtns);

function onClickBtns(event) {
    if(event.target.nodeName !== "BUTTON"){
        console.log("Ето не кнопка :(");
        return;
    }
    console.log(event.target);
}
