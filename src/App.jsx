import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import ShowDetails from "./pages/ShowDetails";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:movieId" element={<MovieDetails />} />
          <Route path="show/:showId" element={<ShowDetails />} />
        </Routes>
      </Router>

      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  );
}
