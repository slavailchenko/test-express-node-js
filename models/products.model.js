const products = require("./products.json").slice();

module.exports.getProducts = (query) => {
let items = Object.keys(query);
  if (!items.length) {
    return products;
  } else {
    let result = products;
    items.forEach (item => {
        result = result.filter(res => res[item].startsWith(query[item]))
        });
        return result;
    }
};