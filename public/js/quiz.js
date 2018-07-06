var counter = 0
var dataToCompare;

function loadArticle() {

  //loads new article for user to guess if real or fake
  $.get("/api/article", function (response) {
    dataToCompare = response[0].is_real;
    $(".header").html(response[0].Headline)
    $("h1").attr("data-info", response[0].is_real)
    $(".body").html(`<a target="_blank" href="${response[0].web_address}"> ${response[0].web_address} </a>`)
  })
  console.log(counter)

  //directs user to results page
  if (counter == 10) {
    window.location.replace("/results")
  }

}
loadArticle();

$('#real').click(function () {
  var data = $(this).data('info');

  if (data === dataToCompare) {
    counter++;
    confirm('correct');
    loadArticle();

  } else if (data != dataToCompare) {
    counter++;
    confirm("wrong!! This was totally fake")
    loadArticle();

  }
})

$('#fake').click(function () {
  var data = $(this).data('info');

  if (data === dataToCompare) {
    confirm('correct');
    loadArticle();
    counter++;

  } else if (data != dataToCompare) {
    confirm("wrong!! This was totally real")
    loadArticle();
    counter++;

  }
})