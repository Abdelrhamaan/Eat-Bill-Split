import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSubmitBill }) {
  const [billValue, setBillValue] = useState("");
  const [userBillValue, setUserBillValue] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState(selectedFriend.name);
  const friendbillValue = billValue ? billValue - userBillValue : "";

  function handleForm(e) {
    e.preventDefault();
    if (!billValue || !userBillValue) return;
    onSubmitBill(whoIsPaying === "user" ? friendbillValue : -userBillValue);
  }

  return (
    <form className="form-split-bill" onSubmit={handleForm}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
      <label>🧍‍♀️ your expense</label>
      <input
        type="text"
        value={userBillValue}
        onChange={(e) =>
          setUserBillValue(
            Number(e.target.value) > billValue
              ? billValue
              : Number(e.target.value)
          )
        }
      />
      <label>👫 {selectedFriend.name}s expense</label>
      <input type="text" disabled value={friendbillValue} />
      <label>🤑 Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">you</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
