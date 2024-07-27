import React, { createContext, useContext, useState } from "react";

const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [initialBalance, setInitialBalance] = useState(0);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
        initialBalance,
        setInitialBalance,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const TransactionsState = () => {
  return useContext(TransactionsContext);
};
