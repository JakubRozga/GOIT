const makeGreeting = (guestName, onSuccess, onError) => {
  if (guestName === "" || guestName === undefined) {
    return onError("Guest name must not be empty");
  }
  onSuccess(`Welcome ${guestName}`);
};

makeGreeting(
  "User",
  (greeting) => console.log(greeting),
  (error) => console.error(error)
);
