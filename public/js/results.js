var headlineInput = $("#articleTitle");

var urlInput = $("#url");

$(document).ready(function () {

    function handleFormSubmit(event) {
        event.preventDefault();

        var currentURL = window.location.origin;

        $.ajax({
                url: currentURL + "/api/tables",
                method: "GET"
            })
            .then(function (newArticleData) {

                $(newForm).on("submit", handleFormSubmit);

                function handleFormSubmit(event) {
                    event.preventDefault();
                    // Wont submit the post if we are missing a headline or url
                    if (!headlineInput.val().trim() || !urlInput.val().trim()) {
                        return;
                    };

                };

            });
        };
    });