import Banner from "../components/Banner";
import RowsContainer from "../components/RowsContainer";
import RowMain from "../components/RowMain";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>Muviz &mdash; Your one stop for content to watch</title>
        <meta name="description" content="Your one stop for content to watch." />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="Muviz &mdash; Your one stop for content to watch" />
        <meta property="og:description" content="Your one stop for content to watch." />
        <meta property="og:site_name" content="Muviz" />
      </Helmet>

      <div className="max-w-9xl p-8 600px:p-4">
        <Banner />
        <RowMain />
        <RowsContainer />
      </div>

      {/* {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="max-w-9xl p-8 600px:p-4">
          <Banner />
          <RowMain />
          <RowsContainer />
        </div>
      )} */}
    </>
  );
}
