document
  .querySelectorAll("img[alt='user`s image']")
  .forEach((img) => img.addEventListener('click', changeActiveImage));

function changeActiveImage(event) {
  const image = event.target;
  const imageSource = image.src;

  const carouselInner = document.querySelector('#carouselImage');
  carouselInner.src = imageSource;
}

document
  .querySelector('.carousel-control-prev')
  .addEventListener('click', previousImage);

function previousImage() {
  const sources = [];

  document
    .querySelectorAll("img[alt='user`s image']")
    .forEach((image) => sources.push(image.src));

  const carouselInner = document.querySelector('#carouselImage');

  const currentIndex = sources.indexOf(carouselInner.src);

  const prevIndex =
    currentIndex - 1 >= 0 ? currentIndex - 1 : sources.length - 1;

  carouselInner.src = sources[prevIndex];
}

document
  .querySelector('.carousel-control-next')
  .addEventListener('click', nextImage);

function nextImage() {
  const sources = [];
  document
    .querySelectorAll("img[alt='user`s image']")
    .forEach((image) => sources.push(image.src));

  const carouselInner = document.querySelector('#carouselImage');

  const currentIndex = sources.indexOf(carouselInner.src);

  const nextIndex = currentIndex + 1 < sources.length ? currentIndex + 1 : 0;

  carouselInner.src = sources[nextIndex];
}
