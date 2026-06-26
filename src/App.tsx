import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex justify-center">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
