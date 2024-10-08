import QrScanner from "./sections/qrscan"; // Import the QR scanner component

const App = () => {
  return (
    <div>
      {/* Main App structure */}
      <h1>Welcome to the QR Scanner App</h1>
      <QrScanner /> {/* Render the QR scanner component */}
    </div>
  );
};

export default App;
