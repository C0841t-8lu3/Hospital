$(document).ready(function(){
    (function($) {
        "use strict";

        $(function() {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    subject: {
                        required: true,
                        minlength: 4
                    },
                    number: {
                        required: true,
                        minlength: 5
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },
                messages: {
                    name: {
                        required: "Please enter your full name.",
                        minlength: "Your name must be at least 2 characters long."
                    },
                    subject: {
                        required: "Please provide a subject.",
                        minlength: "Subject must be at least 4 characters long."
                    },
                    number: {
                        required: "Please enter your phone number.",
                        minlength: "Phone number must be at least 5 digits."
                    },
                    email: {
                        required: "Please enter a valid email address."
                    },
                    message: {
                        required: "Please enter your message.",
                        minlength: "Message must be at least 10 characters long."
                    }
                },
                submitHandler: function(form) {
                    var submitBtn = $(form).find('button[type="submit"]');
                    var originalText = submitBtn.text();
                    submitBtn.prop('disabled', true).text('Sending...');

                    setTimeout(function() {
                        alert("Thank you! Your message has been sent successfully.");
                        form.reset();
                        submitBtn.prop('disabled', false).text(originalText);
                    }, 800);
                }
            });
        });
    })(jQuery);
});
