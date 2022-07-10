import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SharedLayout from "./pages/SharedLayout";
import SingleProject from "./pages/SingleProject";
import Loading from "./components/Loading";
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:projectId" element={<SingleProject />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
