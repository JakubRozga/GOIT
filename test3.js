const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  }, 2000);
});

promise
  .then(value => console.log(value)) 
  .catch(error => console.log(error))
  .finally(() => console.log("Promise settled"));