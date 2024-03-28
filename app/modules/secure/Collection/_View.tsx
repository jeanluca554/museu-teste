import {
  // FilterDrawer,
  // FilterZone,
  // DeleteModal,
  ViewBody,
  ViewHeader,
} from "./components";

export function View() {
  return (
    <main className="flex flex-col gap-5 p-5 pt-0 lg:p-8">
      <ViewHeader />
      <ViewBody />
      {/* <FilterZone />
      <FormModal /> 
      <FilterDrawer />
      <DeleteModal />*/}
    </main>
  );
}
