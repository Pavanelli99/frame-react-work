const axios = require('axios');

async function loadProducts() {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = loadProducts;
