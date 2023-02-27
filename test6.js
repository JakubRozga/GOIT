const fetchUserFromServer = username => {
    return new Promise((resolve, reject) => {
      console.log(`Fetching data for ${username}`);
  
      setTimeout(() => {
        const isSuccess = true;
  
        if (isSuccess) {
          resolve("success!");
        } else {
          reject("error!");
        }
      }, 2000);
    });
  };
  
  fetchUserFromServer("User")
    .then(user => console.log(user))
    .catch(error => console.error(error));