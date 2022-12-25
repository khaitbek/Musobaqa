$('.card__list').slick({
  slidesToShow: 1.5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      },
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ],
  dotsClass:"slick-dots-mansur", 
  customPaging: (slider, i) => {
    return "<button class='slick-dot-mansur' type='button'> </button>"
},

});

// $('.card__list').slick({
//   slidesToShow: 3.7,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });