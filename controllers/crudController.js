const db = require('../config/db');

exports.getColumnNames = (tableName) => (req, res) => {
  const query = `SHOW COLUMNS FROM ${tableName}`;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({
        status: 'error',
        message: `Error fetching column names from ${tableName.toLowerCase()}`,
        error: err
      });
    }

    // Extract column names
    const columnNames = results.map(column => column.Field);

    res.status(200).json({
      status: 'success',
      message: `Fetched column names from ${tableName} successfully`,
      data: columnNames
    });
  });
};


// Reusable CRUD operations
exports.createRecord = (tableName) => (req, res) => {
  const record = req.body;
  const query = `INSERT INTO ${tableName} SET ?`;
  db.query(query, record, (err, results) => {
    if (err) return res.status(500).json({ status: 'error', message: `Error creating ${tableName.toLowerCase()}`, error: err });

    res.status(200).json({
      status: 'success',
      message: `${tableName} created successfully`,
      data: { id: results.insertId, ...record }
    });
  });
};

exports.getAllRecords = (tableName) => (req, res) => {
  db.query(`SELECT * FROM ${tableName}`, (err, results) => {
    if (err) return res.status(500).json({ status: 'error', message: `Error retrieving ${tableName.toLowerCase()}s`, error: err });

    res.status(200).json({
      status: 'success',
      message: `${tableName}s retrieved successfully`,
      data: results
    });
  });
};

exports.updateRecord = (tableName) => (req, res) => {
  const { id } = req.params;
  const record = req.body;
  const query = `UPDATE ${tableName} SET ? WHERE id = ?`;
  db.query(query, [record, id], (err, results) => {
    if (err) return res.status(500).json({ status: 'error', message: `Error updating ${tableName.toLowerCase()}`, error: err });

    res.status(200).json({
      status: 'success',
      message: `${tableName} updated successfully`,
      data: { id, ...record }
    });
  });
};

exports.deleteRecord = (tableName) => (req, res) => {
  const { id } = req.params;

  db.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err, results) => {
    if (err) {
      return res.status(500).json({ 
        status: 'error', 
        message: `Error deleting ${tableName.toLowerCase()}`, 
        error: err 
      });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ 
        status: 'error', 
        message: `No ${tableName.toLowerCase()} found with id ${id}` 
      });
    }

    res.status(200).json({ 
      status: 'success', 
      message: `${tableName} deleted successfully` 
    });
  });
};
