import React, { useState } from 'react';

const payments = [
  { id: 1, user: 'Umair', amount: 100, status: 'Completed' },
  { id: 2, user: 'Umair aslam', amount: 200, status: 'Pending' },
];

const PaymentTracking = () => {
  const [paymentList, setPaymentList] = useState(payments);

  const updatePaymentStatus = (id, status) => {
    setPaymentList(paymentList.map((payment) =>
      payment.id === id ? { ...payment, status } : payment
    ));
  };

  return (
    <div className="p-4 sm:p-6 mb-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#CE1B19] text-center sm:text-left">
        Payment Tracking
      </h1>

      <div className="bg-white shadow-lg p-4 sm:p-6 rounded-lg">
        <h2 className="text-lg sm:text-xl font-medium mb-4">Payment List</h2>

        {/* Scrollable container */}
        <div className="overflow-x-auto w-full">
          <table className="table-auto text-sm sm:text-base w-full">
            <thead>
              <tr className="bg-[#FFA515] text-white">
                <th className="py-2 px-4 text-left">User</th>
                <th className="py-2 px-4 text-left">Amount</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paymentList.map((payment) => (
                <tr key={payment.id} className="border-b">
                  <td className="py-2 px-4">{payment.user}</td>
                  <td className="py-2 px-4">${payment.amount}</td>
                  <td className="py-2 px-4">{payment.status}</td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
                      onClick={() => updatePaymentStatus(payment.id, 'Completed')}
                    >
                      Mark as Completed
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentTracking;
