import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";

// Lazy-loaded pages
const SearchPage = lazy(() => import("@/pages/SearchPage/SearchPage"));
const ResultsPage = lazy(() => import("@/pages/ResultsPage/ResultsPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
