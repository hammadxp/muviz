import { Tab } from "@headlessui/react";

export default function MyHeadless() {
  return (
    <Tab.Group>
      <Tab.List className="m-2 rounded-xl bg-blue-400 px-6 py-4">
        <Tab>{({ selected }) => <button className={`rounded-xl px-6 py-3 ${selected ? "bg-white text-black" : ""}`}>Tab 1</button>}</Tab>
        <Tab>{({ selected }) => <button className={`rounded-xl px-6 py-3 ${selected ? "bg-white text-black" : ""}`}>Tab 2</button>}</Tab>
        <Tab>{({ selected }) => <button className={`rounded-xl px-6 py-3 ${selected ? "bg-white text-black" : ""}`}>Tab 3</button>}</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
