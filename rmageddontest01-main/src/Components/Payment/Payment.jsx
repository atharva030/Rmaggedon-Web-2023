import React from 'react'
import GooglePayButton from '@google-pay/button-react';

export default function Payment() {
    const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
            {
                type: "CARD",
                parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"]
                },
                tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                        gateway: "example",
                        gatewayMerchantId: "exampleGatewayMerchantId"
                    }
                }
            }
        ],
        merchantInfo: {
            merchantId: "BCR2DN6TWP4LDSQ2",
            merchantName: "RNXG"
        },
        transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "100.00",
            currencyCode: "INR",
            countryCode: "IN"
        }
    };
      function handleLoadPaymentData(paymentData) {
    console.log("load payment data", paymentData);
  }
  return (
    <>
          <GooglePayButton
              paymentRequest={paymentRequest}
              onLoadPaymentData={handleLoadPaymentData}
          />
         
    </>
  )
}
