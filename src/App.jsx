import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./pages/Home";
import PlaceholderPage from "./pages/PlaceholderPage";
import NavBar from "./components/NavBar";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import MyRadix from "./components/MyRadix";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<PlaceholderPage />} />
          <Route path="/movies" element={<PlaceholderPage />} />
          <Route path="/shows" element={<PlaceholderPage />} />
          <Route path="/originals" element={<PlaceholderPage />} />
          <Route path="/watchlist" element={<PlaceholderPage />} />
          <Route path="/account" element={<PlaceholderPage />} />

          <Route path="movie/:movieId" element={<ItemDetailsPage />} />
          <Route path="show/:showId" element={<ItemDetailsPage />} />
          <Route path="/radix" element={<MyRadix />} />
        </Routes>
      </Router>

      {/* <ReactQueryDevtools position="bottom-right" initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
