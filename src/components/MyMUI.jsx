import { Button } from "@mui/base";
import { Tabs, Tab, TabsList, TabPanel } from "@mui/base";

export default function MyMUI() {
  return (
    <>
      <Button className="m-4 rounded-md bg-lime-400 px-4 py-2 text-black transition hover:bg-lime-500">Get started</Button>

      <Tabs defaultValue={3}>
        <TabsList>
          <Tab value={1} style={{}}>
            My account
          </Tab>
          <Tab value={2}>Profile</Tab>
          <Tab value={3}>Language</Tab>
        </TabsList>

        <TabPanel value={1}>My account page</TabPanel>
        <TabPanel value={2}>Profile page</TabPanel>
        <TabPanel value={3}>Language page</TabPanel>
      </Tabs>
    </>
  );
}
