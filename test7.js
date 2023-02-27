const makePromise = (text, delay) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(text), delay);
    });
  };

  const promiseA = makePromise("Promise A value", 1000);
  const promiseB = makePromise("Promise B value", 3000);
  const promiseC = makePromise("Promise C value", 2000);

Promise.race([promiseA, promiseB, promiseC])
  .then(value => console.log(value))
  .catch(error => console.error(error));