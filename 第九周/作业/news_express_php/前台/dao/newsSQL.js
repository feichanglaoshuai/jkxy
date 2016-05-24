var sql = {
    queryAll: "select a.*,b.name as typeName from ob_news a inner join ob_types b on a.typeID=b.id",
    queryByTypeID: "select a.*,b.name as typeName from ob_news a inner join ob_types b on a.typeID=b.id where a.typeID=?"
}

module.exports = sql;
