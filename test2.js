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

console.log("Przed promise.then()");

promise.then(
  value => {
    console.log("onResolve call");
    console.log(value);
  },

  error => {
    console.log("onReject call");
    console.log(error);
  }
);

console.log("Po promise.then()");