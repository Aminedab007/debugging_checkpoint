function UserCard({ name }) {

  // ✔ FIX: fallback propre et sécurisé
  const displayName = name ? name.toUpperCase() : "UNKNOWN USER";

  return (
    <div className="card p-3">

      {/* ✔ FIX: plus de crash, toujours une valeur sûre */}
      <h3>Hello {displayName}</h3>

      {/* ✔ Message clair si pas de name fourni */}
      {!name && (
        <p className="text-danger">No username provided (fallback applied)</p>
      )}

    </div>
  );
}

export default UserCard;
