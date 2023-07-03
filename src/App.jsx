import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import NavBarMargin from "./components/NavBarMargin";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import SectionPage from "./pages/SectionPage";
import UndefinedPage from "./pages/UndefinedPage";
import UnfinishedPage from "./pages/UnfinishedPage";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <NavBarMargin />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<UnfinishedPage />} />
          <Route path="/movies" element={<SectionPage />} />
          <Route path="/shows" element={<SectionPage />} />
          <Route path="/originals" element={<SectionPage />} />
          <Route path="/watchlist" element={<UnfinishedPage />} />
          <Route path="/account" element={<UnfinishedPage />} />

          <Route path="movie/:movieId" element={<ItemDetailsPage />} />
          <Route path="show/:showId" element={<ItemDetailsPage />} />

          <Route path="*" element={<UndefinedPage />} />
        </Routes>
      </Router>

      <ReactQueryDevtools position="bottom-left" initialIsOpen={false} />
    </QueryClientProvider>
  );
}
