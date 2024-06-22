import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PincodeForm from './PincodeForm';
import Results from './Results';
import Loader from './Loader';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPincodeData = async (pincode) => {
    setLoading(true);
    setError('');
    setResults([]);
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      if (!response.ok) throw new Error('Unable to fetch data.');
      const data = await response.json();
      if (data[0].Status === 'Error') throw new Error(data[0].Message);
      setResults(data[0].PostOffice);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Pincode Lookup</h1>
      <PincodeForm fetchPincodeData={fetchPincodeData} />
      {loading && <Loader />}
      {error && <div className="alert alert-danger mt-4">{error}</div>}
      <Results results={results} />
    </div>
  );
}

export default App;
