import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <img
        style={{ width: "250px" }}
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODB3bGc3enloaGV4Mmk3b25jZm03MXRpZDN0ejhrYXppZ21tdWZpcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/k56eLJPYZF5lyuitaT/200.webp"
        alt="gif"
      />
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
