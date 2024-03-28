import { useLoaderData } from "@remix-run/react";
import { Search } from "lucide-react";
import { Input } from "~/components/ui/input";
import type { LoaderProps } from "../../_types";

export function ViewBody() {
  const { collection } = useLoaderData<LoaderProps>();

  return (
    <section className="">
      <div className="relative">
        <Search className="absolute left-4 top-3 h-5 w-5 stroke-neutral-400 text-muted-foreground dark:stroke-neutral-400" />
        <Input
          type="search"
          placeholder="Buscar..."
          className="h-11 w-full appearance-none border border-neutral-300 bg-white pl-12 text-neutral-400 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-neutral-900 dark:text-neutral-500 md:w-2/3 lg:w-1/3"
        />
      </div>
      <div className="mt-6">
        {collection.data.map((item) => (
          <div
            key={item.code}
            className={`flex h-[21.625rem] w-64 rounded-lg bg-cover bg-center`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="mt-auto h-20 w-full  bg-white px-4 pb-[14px] pt-4 opacity-90">
              <h2 className="text-sm font-semibold text-primary_gold-900">
                {item.name}
              </h2>
              <div className="border border-blue-500 p-8 text-center text-white">
                <p className="text-xxs text-neutral-400">Código</p>
                <p className="text-xl">Image Description</p>
                <p className="text-lg">Image Code: 123456789</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
