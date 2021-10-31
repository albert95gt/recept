const tags = document.querySelector('.js-tags');

tags.addEventListener("click", onClickBtn);

// function onClickBtn(event) {
//     let selectedTag = null

//     if(event.target.nodeName !== "BUTTON") {
//      return;
//     }

//     const currentActiveBtn = document.querySelector('.tags__btn--active');
//     // console.log('onClickBtn ~ currentActiveBtn', currentActiveBtn)
    
//     if(currentActiveBtn) {
//         currentActiveBtn.classList.remove("tags__btn--active")
//     }

//     const nextActiveBtn = event.target
//     // console.log('onClickBtn ~ nextActiveBtn', nextActiveBtn)

//     event.target.classList.add("tags__btn--active")
//     selectedTag = nextActiveBtn.dataset.value;
//     console.log(selectedTag)
    
// }
const selectedTags = new Set();

function onClickBtn(event) {
    
    if(event.target.nodeName !== "BUTTON") {
     return;
    }

    const btn = event.target;
    const isActiveBtn = btn.classList.contains("tags__btn--active");

    if(isActiveBtn){
        selectedTags.delete(btn.dataset.value);
    } else {
        selectedTags.add(btn.dataset.value);
    }

    event.target.classList.toggle("tags__btn--active");
    
    
    console.log('onClickBtn ~ selectedTags', selectedTags)
}