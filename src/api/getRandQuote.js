import axios from 'axios';

const getRandQuote = (animeName) => {
  const url = animeName
    ? `https://animechan.xyz/api/quotes/random?name=${encodeURIComponent(animeName)}`
    : 'https://animechan.xyz/api/quotes/random';

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

export default getRandQuote;
