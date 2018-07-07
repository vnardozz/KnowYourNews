$(document).ready(function () {

    var headlineInput = $("#articleTitle");

    var urlInput = $("#url");

    $(newForm).on("submit", function handleFormSubmit(event) {
            event.preventDefault();
            // Wont submit the post if we are missing a headline or url
            if (!headlineInput.val().trim() || !urlInput.val().trim()) {
                return;
            }

            var newArt = {
                Headline: headlineInput.val().trim(),
                web_address: urlInput.val().trim()
            };

            console.log(newArt);
    
        });

    });





