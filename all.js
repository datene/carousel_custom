var galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach(function(item) {
  item.addEventListener('click', function(event) {
    galleryImages.forEach(function(item) {
      item.parentNode.classList.remove('active');
    })
    event.currentTarget.parentNode.classList.add('active');
  })
})

var imageModal = document.getElementById('image-modal');
var modalImage = imageModal.querySelector('img');
var collapse = document.getElementById('collapse');
var expand = document.getElementById('expand');

collapse.addEventListener('click', function(event) {
  document.querySelector('body').classList.remove('modal-backdrop');
  event.preventDefault();
  imageModal.classList.add('collapsed');
  imageModal.classList.remove('expanded');
})

expand.addEventListener('click', function(event) {
  document.querySelector('body').classList.add('modal-backdrop');
  event.preventDefault();
  imageModal.classList.remove('hidden');
  imageModal.classList.remove('collapsed');
  imageModal.classList.add('expanded');
  var currentImage = document.querySelector('.item.active img');
  modalImage.src = currentImage.src;
  modalImage.dataset.target = currentImage.id;
})

var previousButton = document.getElementById('previous');
var nextButton = document.getElementById('next');

previousButton.addEventListener('click', function(event) {
  event.preventDefault();
  modalNavigation("-");
})

nextButton.addEventListener('click', function(event) {
  event.preventDefault();
  modalNavigation("+");
})

function modalNavigation(operator) {
  var currentImage = modalImage.dataset.target;
  var imageNumber = Number.parseInt(currentImage.substr(currentImage.length - 1));
  var amountOfImages = document.querySelectorAll('.image-gallery .item').length;
  if (imageNumber === 1 && operator === "-") {
    var nextImageNumber =  1;
  } else if (amountOfImages === imageNumber && operator === "+") {
    var nextImageNumber =  1;
  } else {
    var nextImageNumber = eval(imageNumber + operator + 1);
  }
  var nextImage = modalImage.dataset.target.replace(/.$/, nextImageNumber);
  modalImage.src = document.getElementById(nextImage).src;
  modalImage.dataset.target = nextImage;
}



