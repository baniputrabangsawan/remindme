/** @type {import("@mui/material").ThemeOptions} */

// Monochrome design tokens. Light mode is a warm-white paper feel; dark mode is a
// true near-black (not grey) so long notification lists don't glare. Accent colors
// (priority icons, error red) stay semantic — they mark urgency, not decoration.
const baseThemeOptions = {
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    button: {
      fontWeight: 500,
      textTransform: "none",
      letterSpacing: "0.01em",
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
          borderRadius: 18,
          border: "1px solid",
          borderColor: "divider",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 500,
          transition: "transform 150ms cubic-bezier(0.23, 1, 0.32, 1), background-color 150ms ease-out, border-color 150ms ease-out",
          "&:active": {
            transform: "scale(0.97)",
          },
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlined: {
          borderWidth: 1,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "background-color 150ms ease-out, transform 150ms cubic-bezier(0.23, 1, 0.32, 1)",
          "&:active": {
            transform: "scale(0.96)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          margin: "2px 8px",
          transition: "background-color 150ms ease-out",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
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
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          height: "auto",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          minWidth: 0,
          paddingTop: "8px",
          paddingBottom: "8px",
          color: "text.secondary",
          transition: "color 150ms ease-out",
          "&.Mui-selected": {
            color: "text.primary",
          },
        },
        label: {
          fontSize: "0.7rem",
          fontWeight: 500,
          "&.Mui-selected": {
            fontSize: "0.7rem",
            fontWeight: 600,
          },
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
      main: "#6b6b6b",
    },
    error: {
      main: "#c30000",
    },
    background: {
      default: "#f7f7f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#0a0a0a",
      secondary: "#6b6b6b",
    },
    divider: "#e9e9ec",
    action: {
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.07)",
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
      main: "#a1a1a6",
    },
    error: {
      main: "#ff5c42",
    },
    background: {
      default: "#0b0b0d",
      paper: "#161618",
    },
    text: {
      primary: "#f5f5f7",
      secondary: "#a1a1a6",
    },
    divider: "#26262a",
    action: {
      hover: "rgba(255, 255, 255, 0.05)",
      selected: "rgba(255, 255, 255, 0.09)",
    },
  },
};
