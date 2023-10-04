const thumbnailImages = document.querySelectorAll('.thumbnail-image');
const mainProductImage = document.querySelector('.img-product');

thumbnailImages.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        mainProductImage.src = thumbnail.src;
    });
});