$(function() {
    $('form').submit(function(e) {
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        if (name === '' || email === '' || phone === '' || subject === '' || message === '') {
            alert('Por favor, preencha todos os campos.');
            e.preventDefault();
        }
    });
});
