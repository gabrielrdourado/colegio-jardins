$(function() {
    // Get the form.
    var form = $('.ajax-form');

    // Get the messages div.
    var formMessages = $('.form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(this).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            dataType: 'json',
            headers: {
                'Accept': 'application/json'
            }
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text("Obrigado! Sua mensagem foi enviada com sucesso.");

            // Clear the form.
            $(form).trigger("reset");
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseJSON && data.responseJSON.error) {
                $(formMessages).text(data.responseJSON.error);
            } else {
                $(formMessages).text('Oops! Ocorreu um erro e não foi possível enviar sua mensagem.');
            }
        });
    });
});
