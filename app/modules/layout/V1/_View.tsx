import MenuDesktop from "./components/MenuDesktop";
import MenuMobile from "./components/MenuMobile";

export function View() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] dark:bg-neutral-800 ">
      <MenuDesktop />
      <MenuMobile />
    </div>
  );
}
