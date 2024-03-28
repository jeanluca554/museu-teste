import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "min-content",
});

export const titleStyle = style({
  color: "var(--neutral-900)",
  fontSize: "1.75rem",
  fontWeight: "var(--font-weight-bold)",
});

export const contentStyle = style({
  display: "flex",
  alignItems: "center",
});
