const context = require('../database/db');

class ProductDetails {
    static getAll(){
        return context.execute('SELECT * FROM productdetails');
    }
    static getById(id){
        return context.execute('SELECT * FROM productdetails WHERE Id = ?',[id]);
    }
    static getView(id){
        return context.execute('SELECT * FROM viewproductdetails where Id = ?',[id]);
    }
    static Insert(productId,productionCountry,productionDate,longDescription){
        return context.execute('INSERT INTO productdetails (productId,productionCountry,productionDate,longDescription) values (?,?,?,?)',[productId,productionCountry,productionDate,longDescription]);
    }

}

module.exports = ProductDetails;