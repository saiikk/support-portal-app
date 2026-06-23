function Header() {
  return (
    <div style={{ display: "flex" }}>
      <h1
        style={{
          width: "100%",
          height: "80px",
          background: "#fdc539",
          textAlign: "left",
        }}
      >
        CORE TECH
      </h1>

      <button
        style={{
          width: "100px",
          margin: "auto",
          height: "80px",
          background: "#fdc539",
          textAlign: "left",
          border: "none",
        }}
      >
        ログアウト
      </button>
    </div>
  );
}

export default Header;
