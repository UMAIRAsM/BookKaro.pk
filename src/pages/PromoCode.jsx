import React, { useState } from 'react';

const PromoCode = () => {
  const [promoCode, setPromoCode] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [discount, setDiscount] = useState(0);

  const promoCodes = {
    DISCOUNT10: 10,
    DISCOUNT20: 20,
    WELCOME15: 15,
    FREESHIP: 0, // A special code for free shipping, no discount percentage
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const applyPromoCode = () => {
    // Check if the entered promo code is valid
    if (promoCodes[promoCode]) {
      setDiscount(promoCodes[promoCode]);
      setIsValid(true);
    } else {
      setDiscount(0);
      setIsValid(false);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-[#CE1B19] mb-4">Apply Promo Code</h1>
      <div className="flex items-center mb-6">
        <input
          type="text"
          value={promoCode}
          onChange={handlePromoCodeChange}
          className="w-64 p-2 border border-gray-300 rounded-lg"
          placeholder="Enter promo code"
        />
        <button
          onClick={applyPromoCode}
          className="ml-4 py-2 px-6 text-white bg-[#CE1B19] hover:bg-[#FF6A13] rounded-lg"
        >
          Apply
        </button>
      </div>

      {isValid !== null && (
        <div className={`text-lg ${isValid ? 'text-green-600' : 'text-red-600'}`}>
          {isValid
            ? promoCode === 'FREESHIP'
              ? 'Free shipping applied!'
              : `Promo Code Applied! You get ${discount}% off.`
            : 'Invalid Promo Code.'}
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-[#CE1B19] mb-2">Available Promo Codes:</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li><strong>DISCOUNT10</strong>: Get 10% off your total purchase.</li>
          <li><strong>DISCOUNT20</strong>: Get 20% off your total purchase.</li>
          <li><strong>WELCOME15</strong>: New customers get 15% off their first order.</li>
          <li><strong>FREESHIP</strong>: Get free shipping on your order.</li>
        </ul>
      </div>
    </div>
  );
};

export default PromoCode;
