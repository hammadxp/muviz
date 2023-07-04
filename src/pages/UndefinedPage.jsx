import { Helmet } from "react-helmet-async";

export default function UndefinedPage() {
  return (
    <>
      <Helmet>
        <title>Page not found &mdash; Muviz</title>
      </Helmet>

      <div className="h-[40rem] w-full gap-4 pt-40">
        <div className="mx-auto w-fit">
          <h2 className="text-9xl font-bold">404</h2>
          <p className="mt-2 text-center text-3xl font-bold">Page Not Found</p>
        </div>
      </div>
    </>
  );
}
