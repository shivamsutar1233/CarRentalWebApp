const loadScript = (src) => {
  return new Promise((resovle) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resovle(true);
    };

    script.onerror = () => {
      resovle(false);
    };

    document.body.appendChild(script);
  });
};

export const displayRazorPay = async (amount = 1000, callback) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Failed to make payment");
    return;
  }

  const options = {
    key: import.meta.env.VITE_RAZORPAY_KAY,
    currency: "INR",
    amount: amount * 100,
    name: "Rentals",
    description: "We hope yo've great journey",

    handler: function (response) {
      // alert(response.razorpay_payment_id);
      if (callback) {
        callback(response.razorpay_payment_id);
      }
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
