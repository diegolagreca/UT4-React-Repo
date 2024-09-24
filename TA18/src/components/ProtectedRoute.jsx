function ProtectedRoute({ isProtected, children }) {
    if (isProtected) {
        return <div>
        <h2>🔓 Unlocked 🔓</h2>
        <p>You are adopted</p>
    </div>;
    }
    return <div>
        <h2>🔒 Locked 🔒</h2>
        <p>🛑 Nothig to see here 🛑</p>
    </div>;
}

export default ProtectedRoute;
