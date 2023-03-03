var context = require('../database/db');

class Product {
    static getAll(){
        return context.execute('SELECT * FROM product');
    }

    static Insert(name,price,description,category){
        return context.execute('INSERT INTO product (name,price,description,category) values (?,?,?,?)',[name,price,description,category]);
    }
    static Update(name,price,description,category){
        return context.execute('UPDATE product SET name = ?,price = ?,description = ?,category = ?',[name,price,description,category]);
    }
    static delete(id){
        return context.execute('DELETE FROM product WHERE Id = ?',[id]);
    }
}

module.exports = Product;