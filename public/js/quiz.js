//this needs to go somewhere to randomly generate article/headline

News.findAll({
    random: function () {
        return {
          where: {
            someNumber: Math.random()
          }
        }
      },
}).then(function(results) {
    console.log(results);
  // results are available to us inside the .then
  res.json(results);
});
