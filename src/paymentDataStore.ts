import { create } from "zustand";

interface PaymentDataStoreType {
  cardNumber?: string;
  cvv?: string;
  expiry?: string;
  setPayment: (cardNumber: string, cvv: string, expiry: string) => void;
}

const usePaymentDataStore = create<PaymentDataStoreType>()((set) => ({
  setPayment: (cardNumber: string, cvv: string, expiry: string) => {
    set({
      cardNumber,
      cvv,
      expiry,
    });
  },
}));
export default usePaymentDataStore;
