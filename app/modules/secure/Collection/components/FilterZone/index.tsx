import { useNavigate } from "@remix-run/react";
import {
  Button,
  Icons,
  Input,
  useCrud,
  useScopedParams,
} from "arkyn_components";
import * as styles from "./styles.css";

export function FilterZone() {
  const { openFilter } = useCrud();

  const { getParam, getScopedSearch } = useScopedParams();
  const navigate = useNavigate();

  let timeout: NodeJS.Timeout | null = null;
  function handleSearchFilter(value: string) {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      const searchParams = { search: value || undefined, page: undefined };
      navigate(getScopedSearch(searchParams));
    }, 700);
  }

  return (
    <section className={styles.container}>
      <Input
        bg="var(--white)"
        icon={Icons.Search}
        placeholder="Buscar..."
        defaultValue={getParam("search")}
        onChange={(e) => handleSearchFilter(e.target.value)}
      />

      <Button
        bg="var(--white)"
        color="var(--indigo-500)"
        fontWeight="semibold"
        onClick={openFilter}
        variant="simple"
      >
        <Icons.Filter color="var(--indigo-500)" size={20} />
        Filtrar
      </Button>
    </section>
  );
}
