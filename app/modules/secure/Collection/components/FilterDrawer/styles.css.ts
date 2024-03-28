import { style } from "@vanilla-extract/css";

export const container = style({
	display: "flex",
	flexDirection: "column",
	padding: "30px",

	gap: "20px",
	width: 350,
});

export const buttons_container = style({
	display: "flex",
	flexDirection: "column",
	marginTop: "auto",
	gap: "10px",
});
