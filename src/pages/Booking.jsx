import React, { useState } from 'react';
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/Select";

// Explicit seat mapping for boys and girls by rows
const boysSeats = {
  A: ["A10", "A9", "A8", "A7", "A6"],
  B: ["B10", "B9", "B8", "B7", "B6"],
  C: ["C12", "C11", "C10", "C9", "C8", "C7"],
  D: ["D12", "D11", "D10", "D9", "D8", "D7"],
  E: ["E16", "E15", "E14", "E13", "E12", "E11", "E10", "E9"],
  F: ["F16", "F15", "F14", "F13", "F12", "F11", "F10", "F9"],
  G: ["G16", "G15", "G14", "G13", "G12", "G11", "G10", "G9"],
  H: ["H16", "H15", "H14", "H13", "H12", "H11", "H10", "H9"],
  I: ["I16", "I15", "I14", "I13", "I12", "I11", "I10", "I9"],
  J: ["J16", "J15", "J14", "J13", "J12", "J11", "J10"],
  K: ["K20", "K19", "K18", "K17", "K16", "K15", "K14", "K13", "K12", "K11"],
  L: ["L20", "L19", "L18", "L17", "L16", "L15", "L14", "L13", "L12", "L11"]
};

const girlsSeats = {
  A: ["A5", "A4", "A3", "A2", "A1"],
  B: ["B5", "B4", "B3", "B2", "B1"],
  C: ["C6", "C5", "C4", "C3", "C2", "C1"],
  D: ["D6", "D5", "D4", "D3", "D2", "D1"],
  E: ["E8", "E7", "E6", "E5", "E4", "E3", "E2", "E1"],
  F: ["F8", "F7", "F6", "F5", "F4", "F3", "F2", "F1"],
  G: ["G8", "G7", "G6", "G5", "G4", "G3", "G2", "G1"],
  H: ["H8", "H7", "H6", "H5", "H4", "H3", "H2", "H1"],
  I: ["I8", "I7", "I6", "I5", "I4", "I3", "I2", "I1"],
  J: ["J8", "J7", "J6", "J5", "J4", "J3", "J2", "J1"],
  K: ["K10", "K9", "K8", "K7", "K6", "K5", "K4", "K3", "K2", "K1"],
  L: ["L10", "L9", "L8", "L7", "L6", "L5", "L4", "L3", "L2", "L1"]
};

export default function Booking() {
  const [selectedSeats, setSelectedSeats] = useState(new Map());
  const [totalAmount, setTotalAmount] = useState(0);
  const [isBooking, setIsBooking] = useState(false);
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState(null);

  const handleSeatSelection = (seat) => {
    const updatedSelectedSeats = new Map(selectedSeats);
    if (updatedSelectedSeats.has(seat)) {
      updatedSelectedSeats.delete(seat);
    } else {
      updatedSelectedSeats.set(seat, { name: '', class: '', rollNo: '', dob: '' });
    }
    setSelectedSeats(updatedSelectedSeats);
    setTotalAmount(updatedSelectedSeats.size * 250);
  };

  const handleInputChange = (seat, field, value) => {
    const updatedSelectedSeats = new Map(selectedSeats);
    updatedSelectedSeats.set(seat, { ...updatedSelectedSeats.get(seat), [field]: value });
    setSelectedSeats(updatedSelectedSeats);
  };

  const handleBooking = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    setNotification({
      title: "Booking Confirmed",
      message: `Booked ${selectedSeats.size} seats. Ticket details sent to ${email}`,
    });

    setSelectedSeats(new Map());
    setTotalAmount(0);
    setIsBooking(false);
    setEmail('');

    setTimeout(() => setNotification(null), 5000);
  };

  const isSeatBooked = (seat) => {
    return false; // Replace with actual booking data
  };

  const renderSeat = (seat, isBoySeat) => {
    const seatBooked = isSeatBooked(seat);
    const seatSelected = selectedSeats.has(seat);

    return (
      <Button
        key={seat}
        variant={seatBooked ? "secondary" : seatSelected ? "default" : "outline"}
        size="sm"
        className={`w-8 h-8 text-xs sm:w-10 sm:h-10 sm:text-sm m-1 font-semibold 
          ${seatBooked ? 'bg-gray-500 cursor-not-allowed' : 
            seatSelected ? 'bg-blue-500 text-white' : 
            isBoySeat ? 'bg-green-100 border-green-500 text-green-700' : 
            'bg-pink-100 border-pink-500 text-pink-700'} 
          hover:bg-blue-100 focus:outline-none`}
        onClick={() => !seatBooked && handleSeatSelection(seat)}
        disabled={seatBooked}
      >
        {seat}
      </Button>
    );
  };

  const renderRow = (row, seats, isBoySeat) => (
    <div key={row} className="flex justify-center mb-2">
      <span className="font-bold text-lg mr-2">{row}:</span>
      {seats.map(seat => renderSeat(seat, isBoySeat))}
    </div>
  );

  return (
    <div className="p-4 max-w-7xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Book Your Seats Now!</h1>

      {notification && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
          <h3 className="font-bold">{notification.title}</h3>
          <p>{notification.message}</p>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        {/* Left side for Boys */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4 text-center text-green-700">Boys Section</h2>
          {Object.entries(boysSeats).map(([row, seats]) => renderRow(row, seats, true))}
        </div>

        {/* Right side for Girls */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4 text-center text-pink-700">Girls Section</h2>
          {Object.entries(girlsSeats).map(([row, seats]) => renderRow(row, seats, false))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-100 border border-green-500 mr-2"></div>
          <span className="text-gray-700">Available (Boys)</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-pink-100 border border-pink-500 mr-2"></div>
          <span className="text-gray-700">Available (Girls)</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
          <span className="text-gray-700">Selected</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-500 rounded mr-2"></div>
          <span className="text-gray-700">Booked</span>
        </div>
      </div>

      {/* Selected Seats */}
      {selectedSeats.size > 0 && (
        <div className="border border-gray-300 rounded p-4 mb-6 bg-white shadow-md">
          <h2 className="text-lg font-bold mb-2">Selected Seats:</h2>
          <p className="text-gray-700">{Array.from(selectedSeats.keys()).join(', ')}</p>
          <p className="mt-2 font-semibold">Total Amount: ₹{totalAmount}</p>
          <Button onClick={() => setIsBooking(true)} className="mt-4 bg-blue-500 text-white hover:bg-blue-600">
            Book Seats
          </Button>
        </div>
      )}

      {/* Booking Modal */}
      {isBooking && (
        <div className="fixed inset-0 bg-gray-800/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Booking Details</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email for Ticket:</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              {Array.from(selectedSeats.entries()).map(([seat, details]) => (
                <div key={seat} className="border border-gray-300 rounded p-4">
                  <h3 className="font-bold mb-2">Seat {seat}</h3>
                  <div className="space-y-2">
                    <div>
                      <Label htmlFor={`name-${seat}`}>Name:</Label>
                      <Input
                        id={`name-${seat}`}
                        value={details.name}
                        onChange={(e) => handleInputChange(seat, 'name', e.target.value)}
                        placeholder="Enter name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor={`class-${seat}`}>Class:</Label>
                      <Select onValueChange={(value) => handleInputChange(seat, 'class', value)}>
                        <SelectTrigger id={`class-${seat}`}>
                          <SelectValue placeholder="Select Class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="BCA1">BCA1</SelectItem>
                          <SelectItem value="BCA2">BCA2</SelectItem>
                          <SelectItem value="BCA3">BCA3</SelectItem>
                          <SelectItem value="MCA1">MCA1</SelectItem>
                          <SelectItem value="MCA3">MCA3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor={`rollNo-${seat}`}>Roll No:</Label>
                      <Input
                        id={`rollNo-${seat}`}
                        value={details.rollNo}
                        onChange={(e) => handleInputChange(seat, 'rollNo', e.target.value)}
                        placeholder="Enter roll number"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor={`dob-${seat}`}>Date of Birth:</Label>
                      <Input
                        id={`dob-${seat}`}
                        type="date"
                        value={details.dob}
                        onChange={(e) => handleInputChange(seat, 'dob', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 font-semibold">Total Amount: ₹{totalAmount}</p>
            <div className="flex justify-end space-x-2 mt-6">
              <Button onClick={handleBooking} variant="default" className="bg-blue-500 text-white hover:bg-blue-600">
                Pay ₹{totalAmount}
              </Button>
              <Button onClick={() => setIsBooking(false)} variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}