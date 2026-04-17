import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Approach } from "@/pages/Approach";
import { Photography } from "@/pages/Photography";
import { CaseStudyDetail } from "@/pages/CaseStudyDetail";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/work/:slug" element={<CaseStudyDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}
