import React, { useEffect, useState } from 'react';

function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=FZKP1H1U0IDQ34LB'; // Replace with your API URL

    // Make the GET request
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>API GET Request Example</h1>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}


export default Data;