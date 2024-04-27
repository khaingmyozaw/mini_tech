
/* PRODUCTS DEVIDED WITH CATEGORIES */

// All
$('.list-items button.showAll').click(function() {
    common($(this));
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