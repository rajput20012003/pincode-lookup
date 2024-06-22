import React from 'react';

const Results = ({ results }) => {
  if (results.length === 0) return <p>Couldn’t find the postal data you’re looking for...</p>;

  return (
    <div className="results mt-4">
      {results.map((postOffice, index) => (
        <div key={index} className="post-office">
          <h3>{postOffice.Name}</h3>
          <p><strong>Pincode:</strong> {postOffice.Pincode}</p>
          <p><strong>District:</strong> {postOffice.District}</p>
          <p><strong>State:</strong> {postOffice.State}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
