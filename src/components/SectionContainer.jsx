import SectionItem from "./SectionItem";

export default function SectionContainer({ items, title, sectionType }) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="py-8">
        <h2 className="text-3xl font-bold uppercase">{title}</h2>
      </div>

      <div className="grid grid-cols-4 place-items-center gap-2">
        {items.map((item) => (
          <SectionItem key={item.id} item={item} sectionType={sectionType} />
        ))}
      </div>
    </div>
  );
}
