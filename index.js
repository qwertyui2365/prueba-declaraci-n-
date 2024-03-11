const yesBtn = document.querySelector('#YesBtn');

yesBtn.addEventListener('click',function() {
    alert('Sabia que ibas a decir que si mi vida, te amo 🥺💍💖')
});

const NoBtn = document.querySelector('#NoBtn');

NoBtn.addEventListener('mouseover',function()  {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    NoBtn.style.setProperty('top',randomY+'%');
    NoBtn.style.setProperty('left',randomX+'%');
    NoBtn.style.setProperty('transform',`traslate(-${randomX}%,-${randomY}%)`);
}) 