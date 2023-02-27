const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  }, 7000);
});

console.log(promise);