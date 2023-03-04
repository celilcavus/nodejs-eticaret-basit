const context = require('../database/db');

class ProductDetails {
    static Insert(productId,productionCountry,productionDate,longDescription){
        return context.execute('INSERT INTO prodcutDetails (productId,productionCountry,productionDate,longDescription) values (?,?,?,?)',[productId,productionCountry,productionDate,longDescription]);
    }

}

module.exports = ProductDetails;