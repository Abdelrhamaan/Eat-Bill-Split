import Button from "./Button";

/* eslint-disable jsx-a11y/img-redundant-alt */
export default function Friend({ friend, onSelection, selectedFriend }) {
  //   console.log(selectedFriend.id);
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <div>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            you owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owea you {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance === 0 && (
          <p className="">you and {friend.name} are even</p>
        )}
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "close" : "Select"}
        </Button>
      </li>
    </div>
  );
}
