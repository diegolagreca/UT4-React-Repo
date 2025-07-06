function ProtectedRoute({ isProtected, children }) {
    if (isProtected) {
        return (
            <div>
                <h2>🔓 Unlocked 🔓</h2>
                {children}
            </div>
        );
    }
    return (
        <div>
            <h2>🔒 Locked 🔒</h2>
            <p>🛑 Nothing to see here 🛑</p>
        </div>
    );
}

export default ProtectedRoute;
