import { Helmet } from "react-helmet-async";

export default function UnfinishedPage() {
  return (
    <>
      <Helmet>
        <title>Unfinished page &mdash; Muviz</title>
      </Helmet>

      <div className="h-[40rem] w-full gap-4 pt-48 600px:pt-52 600px:text-center">
        <div className="mx-auto w-fit">
          <h2 className="text-7xl font-bold 600px:text-5xl">unfinished page ;)</h2>
        </div>
      </div>
    </>
  );
}
