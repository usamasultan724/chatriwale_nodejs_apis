const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Routes
const dealerRoutes = require('./routes/dealerRoutes'); 
const customerRoutes = require('./routes/customerRoutes'); 
const leadMasterRoutes = require('./routes/leadMasterRoutes'); 
const engineerRoutes = require('./routes/engineerRoutes'); 
const complaintMasterRoutes = require('./routes/complaintMasterRoutes'); 
const workingSourceRoutes = require('./routes/workingSourceRoutes');
const companyNamePlanLinkRoutes = require('./routes/companyNamePlanLinkRoutes'); 
const  companyPriceSetupRoutes = require('./routes/companyPriceSetupRoutes'); 
const statusForLeadRoutes = require('./routes/statusForLeadRoutes'); 
const statusForComplaintRoutes = require('./routes/statusForComplaintRoutes'); 
const partPriceRoutes = require('./routes/partPriceRoutes'); 
const complaintPriceRoutes = require('./routes/complaintPriceRoutes'); 
const helplineNumberRoutes = require('./routes/helplineNumberRoutes'); 
const workAboutFunctionAndImageRoutes = require('./routes/workAboutFunctionAndImageRoutes'); 
const freeDaysRoutes = require('./routes/freeDaysRoutes'); 
const leadPriceSetupRoutes = require('./routes/leadPriceSetupRoutes'); 
const cityStateRoutes = require('./routes/cityStateRoutes'); 
const issueFaceRoutes = require('./routes/issueFaceRoutes'); 
const complaintRoutes = require('./routes/complaintRoutes'); 


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use(dealerRoutes); 
app.use(customerRoutes); 
app.use(engineerRoutes); 
app.use(leadMasterRoutes); 
app.use(complaintMasterRoutes); 
app.use(workingSourceRoutes); 
app.use(companyNamePlanLinkRoutes); 
app.use(companyPriceSetupRoutes); 
app.use(statusForLeadRoutes); 
app.use(statusForComplaintRoutes); 
app.use(partPriceRoutes); 
app.use(complaintPriceRoutes); 
app.use(helplineNumberRoutes); 
app.use(workAboutFunctionAndImageRoutes); 
app.use(freeDaysRoutes); 
app.use(leadPriceSetupRoutes); 
app.use(cityStateRoutes); 
app.use(issueFaceRoutes); 
app.use(complaintRoutes); 



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// app.listen();

