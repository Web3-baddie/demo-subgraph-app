import React from 'react';
import KittiesList from './components/KittiesList'; // Import the KittiesList component

const App = () => {
  return (
    <div>
      <h1>CryptoKitties Data</h1>
      <KittiesList /> {/* Render the KittiesList component */}
    </div>
  );
};

export default App;
