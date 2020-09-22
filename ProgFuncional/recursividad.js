const regresivo = (a) => {
  if (a < 0) {
    return;
  }
  console.log(a);
  regresivo(a - 1);
};

regresivo(10);

const axios = require('axios');
const llamarApi = async (url, llamados = 0) => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    if (llamados > 5) {
      return '';
    }
    console.log(error);
    return llamarApi(url, llamados + 1);
  }
};
llamarApi('http://jsonplaceholder.typicode.com/users');
