const allLi = document.querySelectorAll('.item');
console.log(`В списке ${allLi.length} категории.`);

allLi.forEach(li => {
    console.log(`Категория: ${li.firstElementChild.textContent}`);
     const allUl = li.lastElementChild;
    console.log(`Количество элементов: ${allUl.children.length}`);
});