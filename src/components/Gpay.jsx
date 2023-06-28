import React from "react";
import GooglePayButton from "@google-pay/button-react";
const Gpay = () => {
  return (
    <>
      <h2>pay with google pay</h2>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA", "MAESTRO", "ELO"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "BCR2DN4T52TYRMCB",
            merchantName:"my-pay",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "1.00",
            currencyCode: "USD",
            countryCode: "US",
          },
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("load payment data", paymentRequest);
        }}
      />
    </>
  );
};

export default Gpay;
