import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import NavBarMargin from "./components/NavBarMargin";
import NavBarMarginMobile from "./components/NavBarMarginMobile";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import SectionPage from "./pages/SectionPage";
import UndefinedPage from "./pages/UndefinedPage";
import UnfinishedPage from "./pages/UnfinishedPage";
import { HelmetProvider } from "react-helmet-async";
import { Suspense } from "react";

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <NavBar />
          <NavBarMargin />

          <Suspense fallback={<p>Loading</p>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<UnfinishedPage />} />
              <Route path="/movies" element={<SectionPage />} />
              <Route path="/shows" element={<SectionPage />} />
              <Route path="/originals" element={<SectionPage />} />
              <Route path="/watchlist" element={<UnfinishedPage />} />
              <Route path="/account" element={<UnfinishedPage />} />

              <Route path="/category/disney" element={<SectionPage />} />
              <Route path="/category/pixar" element={<SectionPage />} />
              <Route path="/category/marvel" element={<SectionPage />} />
              <Route path="/category/star-wars" element={<SectionPage />} />
              <Route path="/category/national-geographic" element={<SectionPage />} />

              <Route path="/discover/movies" element={<SectionPage />} />
              <Route path="/discover/shows" element={<SectionPage />} />

              <Route path="/trending/all" element={<SectionPage />} />
              <Route path="/trending/movies" element={<SectionPage />} />
              <Route path="/trending/shows" element={<SectionPage />} />
              <Route path="/trending/people" element={<SectionPage />} />

              <Route path="/movies/now-playing" element={<SectionPage />} />
              <Route path="/shows/airing-today" element={<SectionPage />} />
              <Route path="/shows/on-the-air" element={<SectionPage />} />

              <Route path="/movies/popular" element={<SectionPage />} />
              <Route path="/shows/popular" element={<SectionPage />} />

              <Route path="/movies/top-rated" element={<SectionPage />} />
              <Route path="/shows/top-rated" element={<SectionPage />} />

              <Route path="/movies/upcoming" element={<SectionPage />} />

              <Route path="movie/:movieId" element={<ItemDetailsPage />} />
              <Route path="show/:showId" element={<ItemDetailsPage />} />
              <Route path="collection/:collectionId" element={<UnfinishedPage />} />

              <Route path="*" element={<UndefinedPage />} />
            </Routes>
          </Suspense>

          <NavBarMarginMobile />
        </Router>

        {/* <ReactQueryDevtools position="bottom-left" initialIsOpen={false} /> */}
      </QueryClientProvider>
    </HelmetProvider>
  );
}
