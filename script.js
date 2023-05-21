const sliders = document.querySelectorAll('.container-slider');

sliders.forEach((slider) => {
  const images = slider.querySelectorAll('.slider img');
  const dots = slider.querySelectorAll('.dot');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      if (i === index) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      showImage(currentIndex);
    });
  });

  setInterval(nextImage, 3000); // 自动切换图片，每隔3秒切换一次
});
