var sql = {
    queryAll: "select a.*,b.name as typeName from ob_news a inner join ob_types b on a.typeID=b.id",
    queryByTypeID: "select a.*,b.name as typeName from ob_news a inner join ob_types b on a.typeID=b.id where a.typeID=?",
    update: "update ob_news set title=?,img=?,url=?,typeid=? where id=?",
    delete: "delete from ob_news where id=?",
    insert: "insert into ob_news(title,img,url,typeid) values(?,?,?,?)"
}

module.exports = sql;
