export default function ItemDetailsBgImage({ children, bgImage }) {
  return (
    <>
      <div
        className="h-[42rem] w-full bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div
          className="h-full w-full"
          style={{ background: "radial-gradient(farthest-corner at top right, rgba(15,23,42,0), rgba(15,23,42,0.4), rgba(15,23,42,1))" }}
        >
          {children}
        </div>
      </div>
    </>
  );
}
