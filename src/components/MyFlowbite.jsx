import { Tabs } from "flowbite";

// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
  {
    id: "profile",
    triggerEl: document.querySelector("#profile-tab-example"),
    targetEl: document.querySelector("#profile-example"),
  },
  {
    id: "dashboard",
    triggerEl: document.querySelector("#dashboard-tab-example"),
    targetEl: document.querySelector("#dashboard-example"),
  },
  {
    id: "settings",
    triggerEl: document.querySelector("#settings-tab-example"),
    targetEl: document.querySelector("#settings-example"),
  },
  {
    id: "contacts",
    triggerEl: document.querySelector("#contacts-tab-example"),
    targetEl: document.querySelector("#contacts-example"),
  },
];

// options with default values
const options = {
  defaultTabId: "settings",
  activeClasses: "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500",
  inactiveClasses:
    "text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
  onShow: () => {
    console.log("tab is shown");
  },
};

const tabs = new Tabs(tabElements, options);

export default function MyFlowbite() {
  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="-mb-px flex flex-wrap text-center text-sm font-medium text-gray-500 dark:text-gray-400" id="tabExample" role="tablist">
          <li className="mr-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              id="profile-tab-example"
              type="button"
              role="tab"
              aria-controls="profile-example"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              id="dashboard-tab-example"
              type="button"
              role="tab"
              aria-controls="dashboard-example"
              aria-selected="false"
            >
              Dashboard
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              id="settings-tab-example"
              type="button"
              role="tab"
              aria-controls="settings-example"
              aria-selected="false"
            >
              Settings
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              id="contacts-tab-example"
              type="button"
              role="tab"
              aria-controls="contacts-example"
              aria-selected="false"
            >
              Contacts
            </button>
          </li>
        </ul>
      </div>
      <div id="tabContentExample">
        <div className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800" id="profile-example" role="tabpanel" aria-labelledby="profile-tab-example">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">Profile tab-s associated content</strong>. Clicking another tab will toggle
            the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
          </p>
        </div>
        <div
          className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="dashboard-example"
          role="tabpanel"
          aria-labelledby="dashboard-tab-example"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab-s associated content</strong>. Clicking another tab will
            toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
          </p>
        </div>
        <div
          className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="settings-example"
          role="tabpanel"
          aria-labelledby="settings-tab-example"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">Settings tab-s associated content</strong>. Clicking another tab will toggle
            the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
          </p>
        </div>
        <div
          className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
          id="contacts-example"
          role="tabpanel"
          aria-labelledby="contacts-tab-example"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content the{" "}
            <strong className="font-medium text-gray-800 dark:text-white">Contacts tab-s associated content</strong>. Clicking another tab will toggle
            the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
          </p>
        </div>
      </div>
    </>
  );
}