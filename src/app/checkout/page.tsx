import React, { Suspense } from "react";
import CheckOutContent from "./Checkout";

const CheckoutPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckOutContent />
    </Suspense>
  );
};

export default CheckoutPage;
