import { useState } from "react";
import "./TableThree.css";
import Tabs from "../../Commons/Tabs";
import {
  ChevronLeftIcon,
  ArrowDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";

const transactions = [
  ...Array(25)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      description: "Transaction " + (+index + 1),
      transactionId: "#12548796",
      type: "Transfer",
      card: "1234 ****",
      date: "01 Jan, 12.00 AM",
      amount: "+100",
    })),
];

const TableThree = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(5);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );
  const [show, setShow] = useState(false);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbers = [1, 2, 3, 4];

  return (
    <>
      {show && <Tabs />}
      <div className="relative  flex flex-col justify-between overflow-hidden rounded-2xl bg-white  py-4 px-7 ">
        <table>
          <thead>
            <tr className="border-b-1 border-bottom-gray-200">
              <th className="justify-start items-center gap-1 hidden md:flex">
                {" "}
                Description <ArrowDownIcon className="w-5 h-4" />
              </th>
              <th>Transaction</th>
              <th className="hidden md:flex">Type</th>
              <th>Card</th>
              <th className="hidden md:flex">Date</th>
              <th>Amount</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b-1 border-bottom-gray-200"
              >
                <td className="hidden md:flex ">{transaction.description}</td>
                <td>{transaction.transactionId}</td>
                <td className="hidden md:flex ">{transaction.type}</td>
                <td>{transaction.card}</td>
                <td className="hidden md:flex">{transaction.date}</td>
                <td
                  className={
                    transaction.amount.startsWith("+") ? "green" : "red"
                  }
                >
                  {transaction.amount}
                </td>
                <td>
                  <button
                    onClick={() => setShow(true)}
                    className="download rounded-full"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex gap-2 justify-center items-center"
        >
          <ChevronLeftIcon className="w-5 h-5 text-blue-700 " />
          Previous
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
          className="flex gap-2 justify-center items-center"
        >
          Next
          <ChevronRightIcon className="w-5 h-5 text-blue-700 " />
        </button>
      </div>
    </>
  );
};

export default TableThree;
