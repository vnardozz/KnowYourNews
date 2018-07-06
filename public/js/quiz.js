//this needs to go somewhere to randomly generate article/headline

var randomNumber = Math.floor(Math.random() * 70)+1

var randomRecord = data[randomNumber]



      



.then(function(results) {
    console.log(results);
  // results are available to us inside the .then
  res.json(results);
});


// use jquery to select data from get and display to quiz.html

//function to load new quiz question when "next" button is clicked. 

//display if the user is right or wrong

// after the 10th question send user to results route


