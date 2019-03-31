// What's wrong with the code below?

requestGoogleCom("best bike model", function(error, listOfResults) {
  if (error) {
    console.error(error);
    return;
  }
  if (listOfResults.length == 0) {
    console.log("no results");
    return;
  } else {
    requestEbayCom(listOfResults[0], function(error, bikes) {
      if (error) {
        console.error(error);
        return;
      }
      if (bikes.length == 0) {
        console.log("no bikes found");
        return;
      } else {
        getDetailPageEbay(bikes[0], function(error, page) {
          if (error) {
            console.error(error);
            return;
          }
          if (!page) {
            console.log("detail page of bike not found");
            return;
          } else {
            buyBike(page);
          }
        });
      }
    });
  }
});
