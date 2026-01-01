export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>🎮 CIRCLE SURVIVAL ONLINE</h1>

      <p style={styles.subtitle}>Sẵn sàng chiến đấu và thử thách bản thân!</p>

      <a href="/game" style={styles.link}>
        <button style={styles.button}>▶ PLAY GAME</button>
        
      </a>
<br></br>
      <div >
        <p>💡 Nhấn PLAY để bắt đầu cuộc phiêu lưu!</p>
      </div>
      <div style={styles.footer}>
        <p>💡 madeby: TriNguyen - Email: nvantri93@gmail.com</p>
      </div>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)", // gradient đẹp
    color: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)", // đổ bóng
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "40px",
    color: "#cbd5e1",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
  },
  link: {
    textDecoration: "none",
  },
  button: {
    fontSize: "24px",
    padding: "18px 50px",
    borderRadius: "15px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(90deg, #22c55e, #16a34a)", // gradient button
    color: "#fff",
    fontWeight: "bold",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  },
  footer: {
    position: "absolute",
    bottom: "20px",
    color: "#94a3b8",
    fontSize: "14px",
  },
};

// Thêm hover effect cho button bằng CSS-in-JS
styles.button[':hover'] = {
  transform: "scale(1.05)",
  boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
};
