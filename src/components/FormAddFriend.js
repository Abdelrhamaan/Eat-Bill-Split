import Button from "./Button";
import "../index.css";
import { useState } from "react";

export default function FormAddFriend({ friends, onAddFriends, onSelection }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const addFriend = {
      id: id,
      name: name,
      image: `${image}u=${id}`,
      balance: 0,
    };

    onAddFriends(addFriend);
    // console.log(addFriend);
    // console.log(friends[3]);
    // console.log(friends);
    setName("");
    setImage("https://i.pravatar.cc/48?");
  }
  return (
    <div>
      <form className="form-add-friend" onClick={handleSubmit}>
        <label>👫 Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>🌄 Image url</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button>Add</Button>
      </form>
    </div>
  );
}
