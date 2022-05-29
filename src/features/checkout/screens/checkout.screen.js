import React from "react";
import { CreditCardInput } from "react-native-credit-card-input";
import { SafeArea } from "../../../utils/safe-area.components";

export const CheckoutScreen = () => {
  return (
    <SafeArea>
      <CreditCardInput></CreditCardInput>
    </SafeArea>
  );
};
