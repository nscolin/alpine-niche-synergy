import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import DigitalMarketing from "./pages/DigitalMarketing";
import EmailMarketing from "./pages/EmailMarketing";
import Branding from "./pages/Branding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/email-marketing" element={<EmailMarketing />} />
        <Route path="/branding" element={<Branding />} />
      </Routes>
    </Router>
  );
}

export default App;