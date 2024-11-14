  $(document).ready(function() {
    $('#forgot-popup, #add-resources').click(function(e) {
        e.preventDefault(); 
        $('#myModal').addClass('show');
    });

    
    $('#closePopup').click(function() {
        $('#myModal').removeClass('show');
    });
});


$(document).ready(function() {
    $('.modal-header .btn-close').on('click', function() {
        $('#myModal').removeClass('show');
    });
});


$(document).ready(function() {
    $('.edit-dots').click(function(e) {
        e.stopPropagation(); // Prevents the accordion from opening
        const popup = $(this).siblings('.edit-dots-popup'); // Get the specific popup within this wrapper
        $('.edit-dots-popup').not(popup).removeClass('show'); // Close any other open popups
        popup.toggleClass('show'); // Toggle the show class for the clicked popup
    });

    // Optional: Close all popups if clicking outside
    $(document).click(function(e) {
        if (!$(e.target).closest('.edit-dots-wrap').length) {
            $('.edit-dots-popup').removeClass('show');
        }
    });
});


$(document).ready(function() {
    $('.hamburder-bnt').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('nav-show');
    });

    // Close sidebar when clicking outside
    $(document).click(function(e) {
        if ($('body').hasClass('nav-show') && !$(e.target).closest('.sidebar, .hamburder-bnt').length) {
            $('body').removeClass('nav-show');
        }
    });
});

