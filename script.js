// API for covid cases
//
const settings = {
  async: true,
  crossDomain: true,
  // url: "https://covid-193.p.rapidapi.com/statistics?country=france",
  // https://covid-193.p.rapidapi.com/countries
  url: "https://covid-193.p.rapidapi.com/countries",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6a2036696amsh0dd6b32a96b61f5p1bc5c2jsn9d83d54643e6",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// API for currency exchange
// //
// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency",
//   params: { have: "GBP", want: "EUR", amount: "5000" },
//   headers: {
//     "X-RapidAPI-Key": "6a2036696amsh0dd6b32a96b61f5p1bc5c2jsn9d83d54643e6",
//     "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

$(document).ready(function){
  // Activate Carousel
  $("#myCarousel").carousel();

  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  })};
