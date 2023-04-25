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

//CALL FUNCTION
$(document).ready(function () {
  // EVENT LISTENER
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
  //HOLD REQUEST
  var request;

  // PREVENT DEFAULT IN CASE OF ERRORs
  event.preventDefault();

  // Abort any pending request
  if (request) {
    request.abort();
  }
  //LOCAL VARIABLES
  var $form = $(this);

  // disable the inputs and buttons for the duration of the request.
  setFormDisabledProps(true);

  $("#results").text("");

  //SEND REQUEST
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

  // Callback handler that will be called in any case

  request.always(function () {
    // Reenable the inputs
    setFormDisabledProps(false);
  });
}

// CLEAR SEARCHED RESULTS

function resetResults() {
  $("#search-results-heading").text("");
  $("#results").text("");
  flag = 0;
}

// IF THE INPUT ARE UNACEPTABLE CHARACTERS

function validInputs() {
  var str = $("#details").val();
  str = str.replace(/[^a-zA-Z 0-9,]/gim, "");
  str = str.trim();
  $("#details").val(str);
}

// DISABLE TEXT FIELD AND BUTTONS

function setFormDisabledProps(statusToSet) {
  document.getElementById("details").disabled = statusToSet;
  document.getElementById("resetButton").disabled = statusToSet;
  document.getElementById("searchButton").disabled = statusToSet;
}
function setNotFoundMessages() {
  $("#search-results-heading").text("Text field is empty");
  $("#results").text("");
}

//  Currency Exchange function
$("#convert").on("click", function () {
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

    $("#result").html(to + " " + response.new_amount);
  });
});
