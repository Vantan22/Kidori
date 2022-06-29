// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)


$(document).ready(function(){
    $('.review-item').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
  });

  
  let loadBtn = document.querySelector('#pics-button')
  var currentItem = 12
  loadBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.pics-list-item')]
    for (var i = currentItem ; i < currentItem + 12 ; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 12

    if(currentItem >= boxes.length) {
        loadBtn.style.display = 'none';
    }
}
