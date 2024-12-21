import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component

function PlannerPage() {
  // State to store user inputs
  const [totalIncome, setTotalIncome] = useState('');
  const [babyFunds, setBabyFunds] = useState('');
  const [childAgeRange, setChildAgeRange] = useState('');
  const [occupants, setOccupants] = useState('');

  // Function to handle the 'Tabulate' button click
  const tabulateCost = () => {
    // You can replace the alert with an actual API call or calculation logic
    console.log("Total Income:", totalIncome);
    console.log("Baby Funds:", babyFunds);
    console.log("Child Age Range:", childAgeRange);
    console.log("Occupants:", occupants);

    // Example: Show an alert for demonstration
    alert("Calculation triggered with the given inputs!");
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f4f7f6' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffcccb', padding: '10px 20px', color: '#ffffff' }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          {/* Link to Home */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button style={buttonStyle}>Home</button>
          </Link>
          <button style={buttonStyle}>Features</button>
          <button style={buttonStyle}>About Us</button>
          <button style={buttonStyle}>Contact</button>
        </div>
      </header>

      {/* Content Section */}
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Welcome to Plan Baby</h1>
        <p style={{ fontSize: '20px', color: '#333' }}>
          Calculate the cost of raising a child in Singapore based on your inputs.
        </p>

        {/* Input Section */}
        <div style={{ display: 'flex', gap: '15px', marginTop: '20px', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <label htmlFor="total-income">Total Income</label>
            <input
              type="text"
              id="total-income"
              value={totalIncome}
              onChange={(e) => setTotalIncome(e.target.value)}
              placeholder="Enter your total income"
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="baby-funds">Optional: Baby Funds / Insurance</label>
            <input
              type="text"
              id="baby-funds"
              value={babyFunds}
              onChange={(e) => setBabyFunds(e.target.value)}
              placeholder="Enter your baby funds or insurance amount"
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="child-age-range">Child Age Range</label>
            <input
              type="text"
              id="child-age-range"
              value={childAgeRange}
              onChange={(e) => setChildAgeRange(e.target.value)}
              placeholder="Enter the age range of your child"
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="occupants">Occupants (Pax)</label>
            <input
              type="number"
              id="occupants"
              value={occupants}
              onChange={(e) => setOccupants(e.target.value)}
              placeholder="Enter the number of occupants"
              style={inputStyle}
            />
          </div>

          <button onClick={tabulateCost} style={tabButtonStyle}>Tabulate</button>
        </div>
      </div>

      {/* Tabs for age range */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
        <div style={tabStyle}>
          <h3 style={{ color: '#ff6f61' }}>Pre-Birth</h3>
          <p><span style={{ fontWeight: 'bold' }}>Cost:</span> $20,000</p>
          <p>Expenses: Diapers $200, Milk $400, Insurance $600</p>
        </div>
        <div style={tabStyle}>
          <h3 style={{ color: '#ff6f61' }}>0 - 3</h3>
          <p><span style={{ fontWeight: 'bold' }}>Cost:</span> $2,000 / Month</p>
          <p>Expenses: Diapers $200, Milk $400, Insurance $600</p>
        </div>
        <div style={tabStyle}>
          <h3 style={{ color: '#ff6f61' }}>0 - 5</h3>
          <p><span style={{ fontWeight: 'bold' }}>Cost:</span> $2,500 / Month</p>
          <p>Expenses: Diapers $200, Milk $400, Insurance $600</p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f7f6', color: '#555' }}>
        <p>&copy; 2024 Plan Baby. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Button and input styles
const buttonStyle = {
  backgroundColor: '#ffffff',
  color: '#ff6f61',
  border: '1px solid #ffffff',
  borderRadius: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  width: '200px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const tabButtonStyle = {
  backgroundColor: '#ff6f61',
  color: 'white',
  padding: '10px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  fontSize: '18px'
};

const tabStyle = {
  width: '25%',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  textAlign: 'center'
};

export default PlannerPage;
