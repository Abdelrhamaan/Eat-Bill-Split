import Friend from "./Friend";

export default function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <div>
      {friends.map((per) => (
        <Friend
          key={per.id}
          friend={per}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </div>
  );
}
