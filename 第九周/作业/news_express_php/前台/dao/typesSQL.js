var sql = {
    insert: "INSERT INTO ob_types(name) values('?')",
    update: "UPDATE ob_types set name=? where id=?",
    delete: "DELETE FROM ob_types where id=?",
    queryAll: "SELECT * FROM ob_types"
}

module.exports = sql;
