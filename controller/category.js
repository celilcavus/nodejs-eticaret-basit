var context = require('../database/db');
const tablename = "category"
class Category {
    static getAll(){
        return context.execute(`SELECT * FROM ${tablename.toString()}`);
    }
    static getById(id){
        return context.execute(`SELECT  * FROM ${tablename.toString()} where Id = ?`,[id]);
    }
    static Insert(name){
        return context.execute(`INSERT INTO ${tablename.toString()} (name) values (?)`,[name]);
    }
    static Update(name,id){
        return context.execute(`UPDATE ${tablename.toString()} SET name = ? WHERE Id = ?`,[name,id]);
    }
    static delete(id){
        return context.execute(`DELETE FROM ${tablename.toString()} WHERE Id = ?`,[id]);
    }
}

module.exports = Category;