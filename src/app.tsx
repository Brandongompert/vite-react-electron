import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "@components/Header";
import Home from "@pages/Home";
import About from "@pages/About";
import Contact from "@pages/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // Create a react-query client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
