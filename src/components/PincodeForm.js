import React, { useState } from 'react';

const PincodeForm = ({ fetchPincodeData }) => {
  const [pincode, setPincode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pincode.length === 6 && !isNaN(pincode)) {
      fetchPincodeData(pincode);
    } else {
      alert('Please enter a valid 6-digit pincode.');
    }
  };

  return (
    <form className="form-inline justify-content-center mb-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="pincodeInput" className="mr-2">Enter 6-digit Pincode:</label>
        <input
          type="text"
          id="pincodeInput"
          name="pincode"
          className="form-control mr-2"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          minlength="6"
          maxlength="6"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Lookup</button>
    </form>
  );
};

export default PincodeForm;
