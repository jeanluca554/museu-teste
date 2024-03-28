import { Plus } from "lucide-react";
import { Header } from "~/client/components";
import { Button } from "~/components/ui/button";

export function ViewHeader() {
  return (
    <Header
      title="Acervo"
      content={
        <Button className="text-primary_gold-50 bg-neutral-700 dark:text-primary_gold-50 dark:bg-neutral-700 w-44 h-11">
          <Plus className="w-5 h-5 mr-4 stroke-[#BAAE8D]" />
          Adicionar Item
        </Button>
      }
    />
  );
}
