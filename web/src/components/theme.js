/** @type {import("@mui/material").ThemeOptions} */
const baseThemeOptions = {
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 500,
      textTransform: "none",
    },
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "36px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          ":last-child": {
            paddingBottom: "16px",
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          overflowX: "auto",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 500,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundImage: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: "1px solid",
          borderColor: "divider",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "divider",
        },
      },
    },
  },
};

/** @type {import("@mui/material").ThemeOptions} */
export const lightTheme = {
  ...baseThemeOptions,
  palette: {
    mode: "light",
    primary: {
      main: "#111111",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#666666",
    },
    error: {
      main: "#c30000",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#0a0a0a",
      secondary: "#666666",
    },
    divider: "#e8e8e8",
    action: {
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.06)",
    },
  },
};

/** @type {import("@mui/material").ThemeOptions} */
export const darkTheme = {
  ...baseThemeOptions,
  components: {
    ...baseThemeOptions.components,
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          color: "#000",
          backgroundColor: "#aeaeae",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#fafafa",
      contrastText: "#111111",
    },
    secondary: {
      main: "#a3a3a3",
    },
    error: {
      main: "#fe4d2e",
    },
    background: {
      default: "#0c0c0c",
      paper: "#141414",
    },
    text: {
      primary: "#fafafa",
      secondary: "#a3a3a3",
    },
    divider: "#262626",
    action: {
      hover: "rgba(255, 255, 255, 0.06)",
      selected: "rgba(255, 255, 255, 0.10)",
    },
  },
};
