document
  .querySelectorAll("img[data-bs-target='#Modal1']")
  .forEach((img) => img.addEventListener('click', changeActiveImage));

function changeActiveImage(event) {
  const image = event.target;
  const imageSource = image.src;

  const carouselInner = document.querySelector('#carouselImage');
  carouselInner.src = imageSource;
}

document
  .querySelector('.carousel-control-prev')
  .addEventListener('click', showPreviousImage);

function showPreviousImage() {
  const sources = [];

  document
    .querySelectorAll("img[data-bs-target='#Modal1']")
    .forEach((image) => sources.push(image.src));

  const carouselInner = document.querySelector('#carouselImage');

  const currentIndex = sources.indexOf(carouselInner.src);

  const prevIndex = currentIndex - 1;

  if (currentIndex == 0) {
    return;
  }

  carouselInner.src = sources[prevIndex];
}

document
  .querySelector('.carousel-control-next')
  .addEventListener('click', showNextImage);

function showNextImage() {
  const sources = [];

  document
    .querySelectorAll("img[data-bs-target='#Modal1']")
    .forEach((image) => sources.push(image.src));

  const carouselInner = document.querySelector('#carouselImage');

  const currentIndex = sources.indexOf(carouselInner.src);

  const nextIndex = currentIndex + 1;

  if (nextIndex == sources.length) {
    return;
  }

  carouselInner.src = sources[nextIndex];
}
