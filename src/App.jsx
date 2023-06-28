import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import ShowDetails from "./pages/ShowDetails";
// import MyMUI from "./components/MyMUI";
// import MyFlowbite from "./components/MyFlowbite";
// import MyShadcn from "./components/MyShadcn";
// import MyHeadless from "./components/MyHeadless";
// import { MyMUITailwind } from "./components/MyMUITailwind";
import MyDaisy from "./components/MyDaisy";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:movieId" element={<MovieDetails />} />
          <Route path="show/:showId" element={<ShowDetails />} />
          {/* <Route path="/mui" element={<MyMUI />} /> */}
          {/* <Route path="/flowbite" element={<MyFlowbite />} /> */}
          {/* <Route path="/shadcn" element={<MyShadcn />} /> */}
          {/* <Route path="/headless" element={<MyHeadless />} /> */}
          {/* <Route path="/mui-tailwind" element={<MyMUITailwind />} /> */}
          <Route path="/daisy" element={<MyDaisy />} />
        </Routes>
      </Router>

      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  );
}
