import * as React from "react";
import { FC } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MainPage from "./MainPage";
import TextField from "@mui/material/TextField";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const PersistentDrawerLeft: FC = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar
            sx={{ backgroundColor: "black", justifyContent: "space-between" }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            {/* <TextField
              variant="outlined"
              sx={{
                backgroundColor: "white",
                border: "none",
                borderRadius: "40px",
                height: " 45px",
              }}
            /> */}
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              // backgroundColor: "yellow",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <Divider />
          <List>
            <ListItem>
              <Link href="/Latest">
                <span>Latest</span>
              </Link>
            </ListItem>
            <Divider />

            <Accordion className="accordian">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Clothing</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ListItem disablePadding>
                  <Link href="/T-shirts">T-shirts</Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/Hoodies">Hoodies</Link>
                </ListItem>{" "}
                <ListItem disablePadding>
                  <Link href="/Jackets">Jackets</Link>
                </ListItem>{" "}
                <ListItem disablePadding>
                  <Link href="/Trousers">Jeans & Trousers</Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/Hats">Hats & Beanies</Link>
                </ListItem>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordian">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Brands</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ListItem disablePadding>
                  <Link href="/Adidas">Adidas</Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/Palace">Palace</Link>
                </ListItem>{" "}
                <ListItem disablePadding>
                  <Link href="/Polar">Polar</Link>
                </ListItem>{" "}
                <ListItem disablePadding>
                  <Link href="/Nike">Nike</Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/BrainDead">BrainDead</Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/NorthFace">The North Face</Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/Solomon">Solomon</Link>
                </ListItem>
              </AccordionDetails>
            </Accordion>

            <Accordion className="accordian">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Skate</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ListItem disablePadding>
                  <Link href="/Decks">Decks</Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/Trucks">Trucks</Link>
                </ListItem>{" "}
                <ListItem disablePadding>
                  <Link href="/Wheels">Wheels</Link>
                </ListItem>{" "}
                <ListItem disablePadding>
                  <Link href="/Hardware">Hardware</Link>
                </ListItem>
              </AccordionDetails>
            </Accordion>
          </List>
          <Divider />
          <List>
            <ListItem>
              <Link href="/Basket">Basket</Link>
            </ListItem>
          </List>
        </Drawer>
        <Main open={open} sx={{ padding: "0" }}>
          <MainPage />
        </Main>
      </Box>
    </>
  );
};

export default PersistentDrawerLeft;
