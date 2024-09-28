const db = require('../config/db');

// Create a new dealer
exports.createDealer = (req, res) => {
  const dealer = req.body;
  const query = 'INSERT INTO Dealer SET ?';
  db.query(query, dealer, (err, results) => {
    if (err) return res.status(500).json({ status: 'error', message: 'Error creating dealer', error: err });

    res.status(200).json({
      status: 'success',
      message: 'Dealer created successfully',
      data: { id: results.insertId, ...dealer }
    });
  });
};

// Get all dealers
exports.getAllDealers = (req, res) => {
  db.query('SELECT * FROM Dealer', (err, results) => {
    if (err) return res.status(500).json({ status: 'error', message: 'Error retrieving dealers', error: err });

    res.status(200).json({
      status: 'success',
      message: 'Dealers retrieved successfully',
      data: results
    });
  });
};

// Update a dealer
exports.updateDealer = (req, res) => {
  const { id } = req.params;
  const dealer = req.body;
  const query = 'UPDATE Dealer SET ? WHERE id = ?';
  db.query(query, [dealer, id], (err, results) => {
    if (err) return res.status(500).json({ status: 'error', message: 'Error updating dealer', error: err });

    res.status(200).json({
      status: 'success',
      message: `Dealer updated successfully`,
      data: { id, ...dealer }
    });
  });
};

// Delete a dealer
exports.deleteDealer = (req, res) => {
  const { id } = req.params; // Get the dealer ID from the request parameters

  // Query to delete the dealer by ID
  db.query('DELETE FROM Dealer WHERE id = ?', id, (err, results) => {
    // Handle query error
    if (err) {
      return res.status(500).json({ 
        status: 'error', 
        message: 'Error deleting dealer', 
        error: err 
      });
    }
    
    // Check if any rows were affected (meaning if the dealer existed)
    if (results.affectedRows === 0) {
      return res.status(404).json({ 
        status: 'error', 
        message: `No dealer found with id ${id}` 
      });
    }

    // Successful deletion response
    res.status(200).json({ 
      status: 'success', 
      message: `Dealer deleted successfully` 
    });
  });

};


