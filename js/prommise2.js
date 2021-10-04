let countValue = new Promise((resolve, reject) => {
    resolve("There is a count value.");
  });
  
  countValue
    .then(function successValue(result) {
      console.log(result);
    })
    .then(function successValue2() {
      console.log("You can Multiple");
    });
  
  // console.log(countValue);
