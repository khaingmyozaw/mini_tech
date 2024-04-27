
/* SLIDER SECTION START */

// Slide Forward When next button is clicked
let slide_items = $('.slider-items');
let item_length = slide_items.length - 1;
let dots = $('.dots');
active = 0;


// Auto Slide
let refreshInterval = setInterval(() => {
    $('#next').click();
}, 3000);

// Next button click
$('#next').click(function() {
    active = active + 1 <= item_length ? active + 1 : 0;
    sliderStart();
});

// Prev button click
$('#prev').click(function() {
    active = active - 1 >= 0 ? active - 1 : item_length;
    sliderStart();
});

// Dots click
dots.each( function(index) {
    $(this).click(function() {
        active = $(this).index();
        sliderStart();
    });
});

// Function to Start Slider when it is invoked
function sliderStart() {
    let activeItem = $('.dots.active');

    $('.slider-list').css({
        'left': - slide_items[active].offsetLeft + 'px',
    });

    activeItem.removeClass('active');
    dots.eq(active).addClass('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        $('#next').click();
    }, 3000);
}

/* SLIDER SECTION END */

/* PRODUCTS DEVIDED WITH CATEGORIES */

// All
$('.list-items button.showAll').click(function() {
    common($);
    $('.product-items').removeClass('d-none');
});

// Network Components
$('.list-items button.showNC').click(function() {
    common($(this));
    $('.NC').removeClass('d-none');
    $('.NC').addClass('active');
});

// Cable Tools
$('.list-items button.showCT').click(function() {
    common($(this));
    $('.CT').removeClass('d-none');
    $('.CT').addClass('active');
});

// Fiber Inspection
$('.list-items button.showFI').click(function() {
    common($(this));
    $('.FI').removeClass('d-none');
    $('.FI').addClass('active');
});

// Network Devices
$('.list-items button.showND').click(function() {
    common($(this));
    $('.ND').removeClass('d-none');
    $('.ND').addClass('active');
});

// Wireless Gear
$('.list-items button.showWG').click(function() {
    common($(this));
    $('.WG').removeClass('d-none');
    $('.WG').addClass('active');
});


function common(button) {
    $('.list-items').removeClass('active');
    $(button).parent().addClass('active');
    $('.product-items').addClass('d-none');
    $('.product-items').removeClass('active');
}