var context = require('../database/db');

class Product {
    static getAll(){
        return context.execute('SELECT * FROM product');
    }
}

module.exports = Product;