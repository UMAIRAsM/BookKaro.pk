import React, { useState } from 'react';
import QrScanner from 'qr-scanner';

const Verify = () => {
  const [scanResult, setScanResult] = useState('');
  const [status, setStatus] = useState('');
  const [scanning, setScanning] = useState(false);

  const startScan = async () => {
    setScanResult('');
    setStatus('');
    setScanning(true);

    const videoElem = document.getElementById('qr-video');

    try {
      const scanner = new QrScanner(
        videoElem,
        (result) => {
          scanner.stop();
          setScanning(false);
          setScanResult(result.data);

          // Simulated check — replace with real validation logic
          const validIds = ['1-1683838383838', '2-1683849494949']; // add valid IDs
          if (validIds.includes(result.data)) {
            setStatus('✅ Booking Verified! Marked as Used.');
          } else {
            setStatus('❌ Invalid QR Code!');
          }
        },
        { returnDetailedScanResult: true }
      );

      await scanner.start();
    } catch (error) {
      console.error('Scanning error:', error);
      setStatus('Error accessing camera or starting scan.');
      setScanning(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-yellow-50 py-12 px-6">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-[#CE1B19] mb-6">QR Code Verification</h1>

        <div className="text-center">
          <button
            onClick={startScan}
            className="mb-6 px-6 py-2 bg-[#CE1B19] text-white rounded hover:bg-[#FF6A13]"
            disabled={scanning}
          >
            {scanning ? 'Scanning...' : 'Start QR Scan'}
          </button>
        </div>

        <video id="qr-video" className="w-full h-auto rounded border" />

        {scanResult && (
          <div className="mt-6 text-center">
            <p className="font-medium">Scanned ID:</p>
            <p className="text-sm text-gray-600">{scanResult}</p>
          </div>
        )}

        {status && (
          <div className={`mt-4 text-center text-lg font-bold ${status.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;
