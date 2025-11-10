function UserCard({ name }) {

  return (
    <div className="card p-3">

      {/* BUG 2 : name is undefined */}
      <h3>Hello {name.toUpperCase()}</h3>

      {/* BUG 3 : wrong default fallback */}
      {!name && <p className="text-danger">No username provided!</p>}

    </div>
  );
}

export default UserCard;
