/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [date, setDate] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [guests, setGuests] = useState<number>(1);

  const handleGuestChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setGuests((prev) => prev + 1);
    } else if (type === "decrement" && guests > 1) {
      setGuests((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ date, name, email, guests });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-gray-700"
        >
          ✕
        </button>
        <h1 className="text-2xl font-bold mb-6">Make Reservation</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              value={date}
              title="date"
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              No of guests
            </label>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => handleGuestChange("decrement")}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full"
              >
                -
              </button>
              <span>{guests}</span>
              <button
                type="button"
                onClick={() => handleGuestChange("increment")}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#E33629] text-white font-medium py-2 rounded-md hover:bg-[#c72a22] transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;
