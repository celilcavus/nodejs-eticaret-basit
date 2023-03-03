var context = require('../database/db');

class ProductDetails {
    static getAll(){
        return context.execute('SELECT * FROM productdetails');
    }
}

module.exports = ProductDetails;