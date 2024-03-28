import { Home, ImagePlus, Settings } from "lucide-react";
import { NavMenu } from "./NavMenu";
import { useTheme } from "remix-themes";

import logo from "~/client/assets/logo-sidebar.png";
import logoDark from "~/client/assets/logo-sidebar-dark.png";
import UserArea from "../UserArea";

export default function MenuDesktop() {
  const [theme] = useTheme();
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col px-4 gap-6 dark:border-r dark:border-neutral-700">
        <div className="flex items-center py-4 border-b lg:py-5 lg:px-6 dark:border-neutral-700">
          {theme === "light" && (
            <img
              src={logo}
              style={{ margin: "0 auto", width: "138px", height: "30px" }}
              alt="logo-museum"
            />
          )}
          {theme === "dark" && (
            <img
              src={logoDark}
              style={{ margin: "0 auto", width: "138px", height: "30px" }}
              alt="logo-museum"
            />
          )}
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium gap-4">
            <NavMenu icon={Home} title="Início" to="home" />
            <NavMenu icon={ImagePlus} title="Adicionar Item" to="add" />
            <NavMenu icon={Settings} title="Configurações" to="settings" />
          </nav>
        </div>
        <UserArea />
      </div>
    </div>
  );
}
