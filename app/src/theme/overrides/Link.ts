"use client";

import { Components, Theme } from "@mui/material";

export default function Link(
  theme: Theme
): Components<Omit<Theme, "components">> {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          color: theme.palette.secondary.main,
        },
      },
    },
  };
}
