const author = document.querySelector('.author');
const btnShare = document.getElementById('btn-share');
const btnShareMobile = document.getElementById('btn-share-mobile');
const tooltip = document.getElementById('tooltip');

btnShare.addEventListener('click', () => {
    tooltip.classList.toggle('share-tooltip-visible');
    author.classList.toggle('author-no-padding');
});

btnShareMobile.addEventListener('click', () => {
    tooltip.classList.toggle('share-tooltip-visible');
    author.classList.toggle('author-no-padding');
});
