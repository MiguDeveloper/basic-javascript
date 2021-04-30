const p = new Promise((res, rej) => {
  const sum = 1 + 1;
  sum === 2 ? res('Success') : rej('Fail');
});

p.then((resp) => console.log(resp)).catch((error) => console.log(error));

const userLeft = false;
const userWatchingCatMeme = true;

const watchTutorialCallback = () => {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':(',
      });
    }
    if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < cat',
      });
    }

    resolve('Thumbs up and Subscribe');
  });
};

watchTutorialCallback()
  .then((message) => console.log(`Success ${message}`))
  .catch((error) => console.log(`${error.name} ${error.message}`));

// example promise all
const recordVideOne = new Promise((resolve, rej) => {
  resolve('Video 1 recorded');
});

const recordVideoTwo = new Promise((resolve, rej) => {
  resolve('Video 2 recorded');
});

const recordVideoThree = new Promise((resolve, rej) => {
  resolve('Video 3 recorded');
});

Promise.all([recordVideOne, recordVideoTwo, recordVideoThree]).then((message) =>
  console.log(message)
);
