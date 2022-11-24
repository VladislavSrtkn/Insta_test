document
  .querySelectorAll("img[data-bs-target='#Modal1']")
  .forEach((img) => img.addEventListener('click', changeActiveImage));

function changeActiveImage(event) {
  const image = event.target;
  const imageSource = image.src;

  hideArrows(imageSource);

  const modalImage = document.querySelector('#modalImage');
  modalImage.src = imageSource;
}

function hideArrows(src) {
  const sources = [];
  document
    .querySelectorAll("img[data-bs-target='#Modal1']")
    .forEach((image) => sources.push(image.src));

  const currentIndex = sources.indexOf(src);

  if (currentIndex == 0) {
    document.querySelector('#arrowLeft').classList.add('d-none');
  } else {
    document.querySelector('#arrowLeft').classList.remove('d-none');
  }

  if (currentIndex == sources.length - 1) {
    document.querySelector('#arrowRight').classList.add('d-none');
  } else {
    document.querySelector('#arrowRight').classList.remove('d-none');
  }
}

document
  .querySelector('#arrowLeft')
  .addEventListener('click', showPreviousImage);

function showPreviousImage() {
  const sources = [];

  document
    .querySelectorAll("img[data-bs-target='#Modal1']")
    .forEach((image) => sources.push(image.src));

  const modalImage = document.querySelector('#modalImage');

  const currentIndex = sources.indexOf(modalImage.src);

  const prevIndex = currentIndex - 1;

  if (currentIndex == 0) {
    return;
  }

  hideArrows(sources[prevIndex]);
  modalImage.src = sources[prevIndex];
}

document.querySelector('#arrowRight').addEventListener('click', showNextImage);

function showNextImage() {
  const sources = [];

  document
    .querySelectorAll("img[data-bs-target='#Modal1']")
    .forEach((image) => sources.push(image.src));

  const modalImage = document.querySelector('#modalImage');

  const currentIndex = sources.indexOf(modalImage.src);

  const nextIndex = currentIndex + 1;

  if (nextIndex == sources.length) {
    return;
  }

  hideArrows(sources[nextIndex]);
  modalImage.src = sources[nextIndex];
}
