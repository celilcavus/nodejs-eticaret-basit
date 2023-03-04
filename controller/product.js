var context = require('../database/db');

class Product {
    static getAll(){
        return context.execute('SELECT * FROM product');
    }
    static getById(id){
        return context.execute('SELECT  * FROM product where Id = ?',[id]);
    }
    static Insert(name,price,description,categoryId){
        return context.execute('INSERT INTO product (name,price,description,categoryId) values (?,?,?,?)',[name,price,description,categoryId]);
    }
    static Update(name,price,description,category,id){
        return context.execute('UPDATE product SET name = ?,price = ?,description = ?,categoryId = ? WHERE Id = ?',[name,price,description,category,id]);
    }
    static delete(id){
        return context.execute('DELETE FROM product WHERE Id = ?',[id]);
    }
}

module.exports = Product;