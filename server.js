const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dealerRoutes = require('./routes/dealerRoutes'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use(dealerRoutes); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
