import "./QrScanner.css";
import Image from "../assets/image.png";

const QrScanner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Scan your QR Code
      </h2>

      <div className="flex flex-col items-center justify-center bg-slate-600 p-4 rounded-lg shadow-md w-full max-w-lg mb-6">
        <p className="text-gray-600 text-lg mb-4">No QR code scanned yet</p>
        <img
          src={Image}
          alt="Scanned QR Code"
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg mb-4"
        />
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-50 p-4 rounded-lg shadow-md mb-6 w-full max-w-lg">
        <p className="text-gray-600 text-sm md:text-base">
          Camera Placeholder (QR Scanner Active Here)
        </p>
      </div>

      <button className="flex items-center justify-center bg-blue-500 text-white text-sm md:text-base px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
        <span role="img" aria-label="qr-icon" className="mr-2">
          📷
        </span>
        Scan QR Code
      </button>
    </div>
  );
};

export default QrScanner;
