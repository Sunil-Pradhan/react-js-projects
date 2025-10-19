// Named exports
export function UserCard() {
  return (
    <div className="user-card">
      <h2>User Information</h2>
      <p>Name: John Doe</p>
      <p>Age: 25</p>
    </div>
  );
}

export function UserStats() {
  return (
    <div className="user-stats">
      <h3>Statistics</h3>
      <ul>
        <li>Posts: 15</li>
        <li>Followers: 120</li>
        <li>Following: 45</li>
      </ul>
    </div>
  );
}
