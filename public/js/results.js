$(document).ready(function() {

    var headlineInput = $("#articleTitle");

    var urlInput = $("#url");

    $(newForm).on("submit", handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a headline or url
        if (!headlineInput.val().trim() || !urlInput.val().trim()) {
          return;
        }
        // Constructing a newArticle object to hand to the database
        var newArticle = {
        
        item_id: "",

        Headline: headlineInput
            .val()
            .trim(),
        web_address: urlInput
            .val()
            .trim(),

        is_real: "",
          
        };
    };

});