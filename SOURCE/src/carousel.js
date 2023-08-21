const slider = document.querySelector('.carousel');
let index = 0;

const changeSlide = (direction = true) => {
  const width = window.innerWidth;

  if (direction) {
    slider.scroll({
      left: slider.scrollLeft + width,
      behavior: 'smooth'
    }); index++;
  }
  else {
    slider.scroll({
      left: slider.scrollLeft - width,
      behavior: 'smooth'
    }); index--;
  }
};

function slide_preview() {
  const wait_time = 1750;
  var triggered = false;
  var timer = setInterval(() => {
    if (!triggered) {
      changeSlide(true);
      triggered = true;
    }
    else {
      changeSlide(false);
      clearInterval(timer);
    }
  }, wait_time);
}

slide_preview();