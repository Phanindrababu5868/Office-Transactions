import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Transactions from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";
import { TransactionsState } from "./context";
import axios from "axios";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Transactions />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add-transaction",
    element: <AddTransaction />,
  },
  {
    path: "*/",
    element: <ErrorPage />,
  },
]);

function App() {
  const { setInitialBalance, setTransactions } = TransactionsState();
  useEffect(() => {
    // make api call and stores transaction  data in context
    const fetchTransactions = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}`);
      setTransactions(response.data || []);
      setInitialBalance(response.data[0].runningBalance || 0);
    };

    fetchTransactions();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
