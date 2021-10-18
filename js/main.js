  const categoriesSlider = new Swiper('.categories__swiper', {
  // Optional parameters
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.categories-slider__button--next',
    prevEl: '.categories-slider__button--prev',
  },
   keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
   },
   autoHeight: true,
  //  slidesPerView: 3,
   spaceBetween: 10,
   breakpoints: {
     480: {
       spaceBetween: 15,
       slidesPerColumn: 2,
       slidesPerView: 2,
       autoHeight: false,
     },
     576: {
       spaceBetween: 15,
       slidesPerColumn: 2,
       slidesPerView: 2,
       autoHeight: false,
     },
     767: {
       spaceBetween: 27,
       slidesPerView: 2
     },
     992: {
       spaceBetween: 27,
       slidesPerView: 3
     },
     1199: {
       spaceBetween: 27,
       slidesPerView: 4
     }
   }
  });


  const unreleasedSlider = new Swiper('.unreleased__swiper', {
  // Optional parameters
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.unreleased__button--next',
    prevEl: '.unreleased__button--prev',
  },
   keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
   autoHeight: true,
   slidesPerView: 5,
   spaceBetween: 30,
      breakpoints: {
     460: {
       slidesPerView: 1
     },  
     512: {
       slidesPerView: 2,
       spaceBetween: null,
     },  
     767: {
       slidesPerView: 3
     },
     992: {
       slidesPerView: 4
     },
     1199: {
       slidesPerView: 5
     }
   }
  });


  // Замена цвета первого среди всех сердечка при клике
  // var favourites = document.querySelector(".favourites");  
  // favourites.addEventListener("click", function () {
  //   console.log("click");
  //   document
  //     .querySelector(".favourites")
  //     .classList.toggle("favouritesRed");
  // });


  // Замена цвета всех сердечек при клике
  var favourites = document.querySelectorAll(".favourites");  
  favourites.forEach(favourite => {
    favourite.addEventListener("click", function () {
      favourite.classList.toggle("favouritesRed");
    });
  })


  
  // $(this).validate(


  // далее из Tour-plan
  // скрипт открытия меню в мобильной версии
  var menuButton = document.querySelector(".menu-button");
  
  menuButton.addEventListener("click", function () {
    console.log("click");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  // скипт модального окна
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var closeModalOverlay = $(".modal__overlay--close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  closeModalOverlay.on("click", closeModal);

  // функция открытия окна
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $('body').css('overflow', 'hidden');
    $('body').css('padding-right', scrollbarWidth());
  };

  function scrollbarWidth() {
    var block = $('<div>').css({'height':'50px','width':'50px'}),
        indicator = $('<div>').css({'height':'200px'});

    $('body').append(block.append(indicator));
    var w1 = $('div', block).innerWidth();    
    block.css('overflow-y', 'scroll');
    var w2 = $('div', block).innerWidth();
    $(block).remove();
    return (w1 - w2);
  };
  
  // функция закрытия окна
  function closeModal(event) {
    $('body').css('overflow', 'auto');
    $('body').css('padding-right', "0px");
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  };

  // обработка валидации форм
  $('.form').each(function() {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Пожалуйста, введите имя",
        minlength: "Минимальная длина 2 символа"
      },
      phone: {
        required: "Пожалуйста, введите номер",
        minlength: "10 цифр в формате +7"
      },
      email: {
        required: "Пожалуйста, введите e-mail",
        email: "Адрес должен быть вида: name@domain.com"
      },
      modalEmail: {
        required: "Пожалуйста, введите e-mail",
        email: "Пример адреса: name@domain.com"
      }
    }
  });    
  });

  $(".newsletter-subscribe").validate({
    errorClass: "invalid",
    messages: {
      email: {
        required: "Пожалуйста, введите e-mail",
        email: "Адрес должен быть вида: name@domain.com"
      },
    },
  });    
  

  $(document).ready(function(){
    $(".input-phone").mask("+7(999) 999-9999");
    });

  $('.input-phone').on('click', function() {
    $('.input-phone').attr("placeholder", "+7 (999) 999-9999");
    });
  
  
