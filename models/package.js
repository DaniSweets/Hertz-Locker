const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Sample data for company and packages
const companyData = {
  name: 'Your Company',
  // Other company details
};

const packagesData = [
  { id: 1, name: 'Package A', description: 'Lorem ipsum for Package A' },
  { id: 2, name: 'Package B', description: 'Lorem ipsum for Package B' },
  { id: 3, name: 'Package C', description: 'Lorem ipsum for Package C' },
];

// Route to render the company dashboard
app.get('/company-dashboard', (req, res) => {
  res.render('company-dashboard', { company: companyData, packages: packagesData });
});

// Route to render package details (optional)
app.get('/package/:id', (req, res) => {
  const selectedPackage = packagesData.find(pkg => pkg.id === parseInt(req.params.id));
  res.render('package-details', selectedPackage);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});