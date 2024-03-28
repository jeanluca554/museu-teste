import { useLocation, useNavigate } from "@remix-run/react";
import {
  Button,
  Drawer,
  Form,
  Input,
  Text,
  useCrud,
  useScopedParams,
} from "arkyn_components";
import * as styles from "./styles.css";

export function FilterDrawer() {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const { filter, closeFilter } = useCrud();
  const { getParam } = useScopedParams();

  function handleClearFilters() {
    navigate(pathname);
    closeFilter();
  }

  return (
    <Drawer.Container isVisible={filter} makeInvisible={closeFilter}>
      <Drawer.Header>
        <Text as="h2" fontSize="xl" fontWeight="bold">
          Filtrar
        </Text>
      </Drawer.Header>

      <Form.Container className={styles.container}>
        <Form.Controller>
          <Form.Label>Data inicial:</Form.Label>
          <Input
            variant="outline"
            type="date"
            name="strDate"
            defaultValue={getParam("strDate")}
          />
        </Form.Controller>

        <Form.Controller>
          <Form.Label>Data final:</Form.Label>
          <Input
            variant="outline"
            type="date"
            name="endDate"
            defaultValue={getParam("endDate")}
          />
        </Form.Controller>

        <div className={styles.buttons_container}>
          <Button onClick={closeFilter}>Aplicar filtros</Button>
          {search && (
            <Button
              variant="ghost"
              colorScheme="red"
              type="button"
              onClick={handleClearFilters}
            >
              Remover filtros
            </Button>
          )}
        </div>
      </Form.Container>
    </Drawer.Container>
  );
}
