let countValue1 = new Promise((resolve, reject) => {
    reject("Promise rejected.");
  });
  
  countValue1
    .then(function successValue(result) {
      console.log(result);
    })
    .catch(function errorValue(result) {
      console.log(result);
    });
  
  // console.log(countValue);