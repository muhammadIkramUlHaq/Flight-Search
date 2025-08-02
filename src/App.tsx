import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "@/components/Loader";

// Lazy-loaded pages
const SearchPage = lazy(() => import("@/pages/SearchPage"));
const ResultsPage = lazy(() => import("@/pages/ResultsPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
