import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
// import { clsx } from "clsx";

// OFFICIAL DOCS

// export function MyRadix() {
//   return (
//     <Tabs.Root defaultValue="tab1" orientation="vertical">
//       <Tabs.List aria-label="tabs example">
//         <Tabs.Trigger value="tab1">One</Tabs.Trigger>
//         <Tabs.Trigger value="tab2">Two</Tabs.Trigger>
//         <Tabs.Trigger value="tab3">Three</Tabs.Trigger>
//       </Tabs.List>
//       <Tabs.Content value="tab1">Tab one content</Tabs.Content>
//       <Tabs.Content value="tab2">Tab two content</Tabs.Content>
//       <Tabs.Content value="tab3">Tab three content</Tabs.Content>
//     </Tabs.Root>
//   );
// }

// OFFICIAL DOCS (Base)

// export default function MyRadix() {
//   return (
//     <Tabs.Root>
//       <Tabs.List>
//         <Tabs.Trigger />
//       </Tabs.List>
//       <Tabs.Content />
//     </Tabs.Root>
//   );
// }

// OFFICIAL DOCS (Sign In example component with Tailwind)

export default function MyRadix() {
  return (
    <Tabs.Root className="shadow-blackA4 flex w-[300px] flex-col shadow-[0_2px_10px]" defaultValue="tab1">
      <Tabs.List className="border-mauve6 flex shrink-0 border-b" aria-label="Manage your account">
        <Tabs.Trigger
          className="text-mauve11 hover:text-violet11 data-[state=active]:text-violet11 flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:bg-lime-400 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
          value="tab1"
        >
          Account
        </Tabs.Trigger>
        <Tabs.Trigger
          className="text-mauve11 hover:text-violet11 data-[state=active]:text-violet11 flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black"
          value="tab2"
        >
          Password
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black" value="tab1">
        <p className="text-mauve11 mb-5 text-[15px] leading-normal">Make changes to your account here. Click save when you-re done.</p>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label className="text-violet12 mb-2.5 block text-[13px] leading-none" htmlFor="name">
            Name
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="name"
            defaultValue="Pedro Duarte"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label className="text-violet12 mb-2.5 block text-[13px] leading-none" htmlFor="username">
            Username
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="username"
            defaultValue="@peduarte"
          />
        </fieldset>
        <div className="mt-5 flex justify-end">
          <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] cursor-default items-center justify-center rounded px-[15px] text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Save changes
          </button>
        </div>
      </Tabs.Content>

      <Tabs.Content className="grow rounded-b-md bg-white p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black" value="tab2">
        <p className="text-mauve11 mb-5 text-[15px] leading-normal">Change your password here. After saving, you-ll be logged out.</p>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label className="text-violet12 mb-2.5 block text-[13px] leading-none" htmlFor="currentPassword">
            Current password
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="currentPassword"
            type="password"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label className="text-violet12 mb-2.5 block text-[13px] leading-none" htmlFor="newPassword">
            New password
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="newPassword"
            type="password"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label className="text-violet12 mb-2.5 block text-[13px] leading-none" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="confirmPassword"
            type="password"
          />
        </fieldset>
        <div className="mt-5 flex justify-end">
          <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] cursor-default items-center justify-center rounded px-[15px] text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Change password
          </button>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
