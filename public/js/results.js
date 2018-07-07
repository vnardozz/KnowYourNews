

$(document).ready(function () {

    var counter = 56;

    var headlineInput = $("#articleTitle");

    var urlInput = $("#url");

    var realOrFake = $("#realorfake")

    $(newForm).on("submit", function handleFormSubmit(event) {
            event.preventDefault();
            // Wont submit the post if we are missing a headline or url
            if (!headlineInput.val().trim() || !urlInput.val().trim()) {
                return;
            }

            var newArt = {
                item_id: counter++,
                Headline: headlineInput.val().trim(),
                web_address: urlInput.val().trim(),
                is_real: realOrFake.val()
            };

            console.log(newArt);

            $.post("/api/newarticles", newArt, function(res) {
                console.log(res);
            })
    
        });

        $(newForm)[0].reset();

    });





