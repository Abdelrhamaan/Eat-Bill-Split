import { useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FriendList from "./FriendList";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isShowAddForm, setIsShowAddForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleOpen() {
    setIsShowAddForm(true);
  }
  function handleClose() {
    setIsShowAddForm(false);
  }

  function handleAddFriends(friend) {
    setFriends([...friends, friend]);
    setIsShowAddForm(false);
  }

  function handleSelectedFriend(friend) {
    /* here i setSelectedFriend equal null to gives me false 
     value in friend component so isSelected = false
     finally cur?.id is optional chain because sometimes
     cur = null so he gives me abug
     */
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setIsShowAddForm(false);
  }
  function handleSplitBill(value) {
    console.log("split bill", value);
    setFriends(
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {isShowAddForm && (
          <FormAddFriend friends={friends} onAddFriends={handleAddFriends} />
        )}
        {isShowAddForm ? (
          <>
            <Button onClick={handleClose}>Close</Button>
          </>
        ) : (
          <Button onClick={handleOpen}>Add Friend</Button>
        )}
      </div>
      {selectedFriend && (
        /* here we added key to make every 
        instance component unique so reset the state for every friend  */
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSelection={handleSelectedFriend}
          onSubmitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
