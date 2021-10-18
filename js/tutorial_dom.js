// // console.log(document);
// const body = document.body;
// // console.log(document.body);

// const listEl = body.firstElementChild;
// // console.log("🚀 ~ file: tutorial_dom.js ~ line 5 ~ listEl", listEl)

// const parentItems = listEl.parentNode;
// // console.log("🚀 ~ file: tutorial_dom.js ~ line 14 ~ parentItems", parentItems)

// const listItemsEl = listEl.children;
// // console.log("🚀 ~ file: tutorial_dom.js ~ line 11 ~ listItemsEl", listItemsEl)

// const firstItemEl = listEl.firstChild;
// // console.log("🚀 ~ file: tutorial_dom.js ~ line 8 ~ firstItemEl", firstItemEl)

// const lastChildListEl = listEl.lastElementChild;
// // console.log("🚀 ~ file: tutorial_dom.js ~ line 18 ~ firstChildEl", lastChildListEl)

// const previousSiblingItem = lastChildListEl.previousElementSibling
// // console.log("🚀 ~ file: tutorial_dom.js ~ line 21 ~ previousSiblingItem", previousSiblingItem)

// const listItemsChildEl = lastChildListEl.children
// // console.log("🚀 ~ file: tutorial_dom.js ~ line 24 ~ listItemsChildEl", listItemsChildEl)

// const firstChildLIst = lastChildListEl.firstElementChild;
// // console.log("🚀 ~ file: tutorial_dom.js ~ line 16 ~ firstChildLIst", firstChildLIst)

// // =====================================================================================================

// const listWithId = document.querySelector("#menu");
// // console.log("🚀 ~ file: tutorial_dom.js ~ line 34 ~ listWithId", listWithId);

// listWithId.style.textTransform = 'uppercase';
// // listWithId.style.backgroundColor = "teal";
// // listWithId.style.fontSize = "24px";

// const listWithClass = document.querySelector('.menu');
// // console.log("🚀 ~ file: tutorial_dom.js ~ line 39 ~ listWithClass", listWithClass);

// const menuItemsByTagName = document.querySelector("li")
// // console.log("🚀 ~ file: tutorial_dom.js ~ line 42 ~ menuItemsByTagName", menuItemsByTagName)

// const menuItemsByClass = document.querySelector('.menu-item')
// // console.log("🚀 ~ file: tutorial_dom.js ~ line 45 ~ menuItemsByClass", menuItemsByClass)

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = "teal";
// // =================================================================================================== //

// const message = document.querySelector('#message');
// // console.log("message", message.value)

// const activeLink = document.querySelector('.btn.active');
// // console.log(activeLink.href);

// const image = document.querySelector('.image');
// image.width = 480;
// // console.log(image.width);

// // console.log(image.src);
// // ================================================================ // 

// const text = document.querySelector('.article-title')
// // console.log("text :", text.textContent);
// // =================================================================== //
// const textEl = document.querySelector('.text.red.big');
// // console.log(textEl.classList);

// // console.log("textEl", textEl.classList.contains("big"));

// textEl.classList.remove("big");
// // console.log(textEl.classList);

// textEl.classList.add("great-job");
// // console.log(textEl.classList);

// textEl.classList.toggle('great-job')
// // console.log(textEl.classList);

// textEl.classList.toggle('great-job')
// // console.log(textEl.classList);

// textEl.classList.replace('great-job', 'nice-work');
// // console.log(textEl.classList);
// // =================================================== //

// const button = document.querySelector('.button');
// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";
// // console.log(button.style);
// // =================================================== //


// const image = document.querySelector('.image');
// console.log('image', image.hasAttribute('alt'))
// console.log('image:', image.getAttribute('alt'))
// console.log('image', image.setAttribute('data-value', 'action'))
// console.log('image', image.attributes);
// ==================================================================== //

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });
// ========================================= //

// const titleEl = document.createElement('h1');

// titleEl.textContent = 'this is a page title';
// console.log( titleEl)

// const image = document.createElement("img");
// console.log( image)
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";

// const body = document.querySelector('body');

// body.append(titleEl, image);
// console.log(body)

// const paragraph = document.createElement("p");
// paragraph.textContent = "World is beautifull";

// titleEl.before(paragraph);
// ======================================= //

// const article = document.querySelector('.article');
// console.log(article.innerHTML);

// const title = document.querySelector('.article .title');
// console.log(title.innerHTML);

// const text = document.querySelector('.article .text');
// console.log(text.innerHTML);

// const link = document.querySelector('.article .link');
// console.log(link.innerHTML);
// ================================ //

// const title = document.querySelector('.article .title');
// title.innerHTML = 'Новый заголовок';
// console.log(title.innerHTML);
// title.innerHTML = "";
// =============================== //

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const list = document.querySelector('.list');
// const markup = technologies
// .map(technology => `<li class = "list-item">${technology}</li>`)
// .join("");

// console.log(markup);
// list.innerHTML = markup;

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markupNew = newTechnologies
// .map(technology => `<li class = "new-items">${technology}</li>`)
// .join("");

// list.insertAdjacentHTML('beforebegin', markupNew)









