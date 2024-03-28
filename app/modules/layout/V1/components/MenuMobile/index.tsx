import { Home, ImagePlus, Menu, Settings } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import UserArea from "../UserArea";
import { NavMenu } from "./NavMenu";
import { Outlet } from "@remix-run/react";

export default function MenuMobile() {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 px-4 lg:h-[60px] lg:px-6 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium mt-4">
              <NavMenu icon={Home} title="Início" to="home" />
              <NavMenu icon={ImagePlus} title="Adicionar Item" to="add" />
              <NavMenu icon={Settings} title="Configurações" to="settings" />
            </nav>
            <div className="mt-auto">
              <UserArea />
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex flex-1 flex-col gap-4 lg:gap-6 dark:bg-neutral-900">
        <div className="flex flex-1 flex-col gap-8 h-screen overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
