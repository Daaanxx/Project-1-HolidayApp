//CAROUSEL
$(document).ready(function () {
  const carouselItems = $(".carousel-item");
  let currentItem = 0;

  // Function to move to the next slide
  function moveToNextSlide() {
    carouselItems.eq(currentItem).removeClass("active");
    currentItem = (currentItem + 1) % carouselItems.length;
    carouselItems.eq(currentItem).addClass("active");
  }

  // Set an interval to move to the next slide every 3 seconds (3000 milliseconds)
  setInterval(moveToNextSlide, 8000);
});

/* //RECENT SEARCHES
 var searchHistory =[];
 function getItems() {
    var shearchedCountries = JSON.parse(localStorage.getItem("searchHistory"));
    if (searchedCountries != null) {
        searchHistory = searchedCountries;
};

// country list
    for (I= 0; 1< searchHistory.lenght; i++) {
      if (1 == 3) {
          break;
        }

// Bootstrap list https://getbootstrap.com/docs/4.0/components/list-group/
    listButton = $("<a>").attr({
        class:"list-group-item list-group-item-action",
        href:"#"
      });
      //append search history
      listButton.text(searchHistory[i]);
      $(".list-group").append(listButton);
    }
}; */

//CALL FUNCTION
$(document).ready(function () {
  // add an event listener (executeSearch) to the form
  $("#query-form").submit(function (event) {
    executeSearch(event);
  });
});

var pat,
  flag = 0;
function formatSearchResults(jsonResults) {
  var jsonObject = jsonResults;

  $("#search-results-heading");
  var loggedText = "";

  jsonObject.Countries.forEach(function (item, index) {
    //console.log("hello"+data);

    if (item.Country.toLowerCase() == pat.toLowerCase()) {
      var thumbnail = item.NewConfirmed;

      loggedText +=
        "<div class='called-details-div'><h5>History Cases: " +
        item.TotalConfirmed +
        "<h5></div>";
        loggedText +=
        "<div class='called-details-div'><h5>Recent Deaths: " +
        item.NewDeaths +
        "<h5></div>";
        loggedText +=
        "<div class='called-details-div'><h5>New Confirmed Cases: " +
        item.NewConfirmed +
        "<h5></div>";
        loggedText +=
        "<div class='called-details-div'><h5>Recent Recovers: " +
        item.NewRecovered +
        "<h5></div>";
      flag = 1;
      return;
    }
  });

  $("#results").html(loggedText);
  if (!flag) {
    setNotFoundMessages();
  }
}

//CALLS BACK

function executeSearch(event) {
  // HOLD REQUEST
  var request;

  // PREVENT DEFAULT IN CASE OF ERRORS
  event.preventDefault();

  if (request) {
    request.abort();
  }
  // LOCAL VARIABLES
  var $form = $(this);

  request = $.ajax({
    url: "https://api.covid19api.com/summary",
    type: "GET",
  });

  pat = $("#details").val();

  // Callback handler for success

  request.done(function (response, textStatus, jqXHR) {
    formatSearchResults(response);
    console.log(pat);
  });

  // Callback handler for failure

  request.fail(function (jqXHR, textStatus, errorThrown) {
    $("#search-results-heading").text(
      "Sorry We Unable to fetch Covid Data.Try again."
    );
    $("#results").text("");
  });

}

// CLEAR SEARCHED RESULTS

function resetResults() {
  $("#search-results-heading").text("");
  $("#results").text("");
  flag = 0;
  $("#result").text("");
}

//IF THE INPUT HAVE UNACEPTABLE CHARECTERS

function validInputs() {
  var str = $("#details").val();
  str = str.replace(/[^a-zA-Z 0-9,]/gim, "");
  str = str.trim();
  $("#details").val(str);
}

// DIABLE TEXT FIELD AND BUTTONS

function setFormDisabledProps(statusToSet) {
  document.getElementById("details")= statusToSet;
  document.getElementById("resetButton").disabled = statusToSet;
  document.getElementById("searchButton").disabled = statusToSet;
}
function setNotFoundMessages() {
  $("#search-results-heading").text("Please provide a valid country name.");
  $("#results").text("");
}

//AUTOCOMPLETE FEATURE (JqueryUI)

$ ( function() {
  var availableCountries = [
    "ALA Aland Islands",
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "British Virgin Islands",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo (Brazzaville)",
    "Congo (Kinshasa)",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard and Mcdonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong, SAR China",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (North)",
    "Korea (South)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao PDR",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao, SAR China",
    "Macedonia, Republic of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of Kosovo",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Réunion",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Pierre and Miquelon",
    "Saint Vincent and Grenadines",
    "Saint-Barthélemy",
    "Saint-Martin (French part)",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen Islands",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic (Syria)",
    "Taiwan, Republic of China",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "US Minor Outlying Islands",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic)",
    "Viet Nam",
    "Virgin Islands, US",
    "Wallis and Futuna Islands",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];
$( "#details" ).autocomplete({
  source: availableCountries
});
});


//Currency Converter
$(document).ready(function () {
  $("#searchButton").on("click", function () {
    var amount = $("#amount").val();
    var from = $("#from").val();
    var to = $("#to").val();
    const settings = {
      async: true,
      crossDomain: true,
      url:
        "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=" +
        "" +
        from +
        "" +
        "&want=" +
        "" +
        to +
        "" +
        "&amount=" +
        "" +
        amount +
        "",
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "6a2036696amsh0dd6b32a96b61f5p1bc5c2jsn9d83d54643e6",
        "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      // var currencyIcon;
      // if (to === "PLN") {
      //   currencyIcon = "&#122;&#322;";
      // } else if (to === "EUR") {
      //   currencyIcon = "&euro;";
      // }

      $("#result").html(to + " " + response.new_amount);
    });
  });
});
