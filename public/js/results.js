$(document).ready(function () {

    var headlineInput = $("#articleTitle");

    var urlInput = $("#url");

    var real = $("#real");

    var fake = $("#fake");

    $(newForm).on("submit", function handleFormSubmit(event) {
            event.preventDefault();
            // Wont submit the post if we are missing a headline or url
            if (!headlineInput.val().trim() || !urlInput.val().trim()) {
                return;
            }

            var newArt = {
                Headline: headlineInput.val().trim(),
                web_address: urlInput.val().trim(),
                is_real: real.val() || fake.val()
            };

            console.log(newArt);
    
        });

    });





