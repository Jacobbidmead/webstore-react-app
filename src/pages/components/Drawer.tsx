import * as React from "react";
import { FC, useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShopContext } from "@/context/shop-context";

interface Product {
  id: number;
  type: string;
  name: string;
  color: string;
  size: string[];
  price: number;
  imgUrl: string;
}

interface BasketItem {
  product: Product;
  size: string;
}

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
  const { basket, totalItems } = useContext(ShopContext)!;
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
            sx={{
              justifyContent: "space-between",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>

            <Link href="/BasketPage" className="basket-counter">
              {totalItems > 0 && <span>({totalItems})</span>}
              <IconButton>
                <ShoppingCartIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "rgb(252, 227, 189)",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader sx={{ backgroundColor: "rgb(252, 227, 189)" }}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <List>
            <ListItem>
              <Link href="/BasketPage">
                <span className="product-link">Basket</span>
              </Link>
            </ListItem>

            <Accordion
              className="accordian"
              sx={{
                backgroundColor: "rgb(252, 227, 189)",
                border: "none !important",
                boxShadow: "none !important",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box>Clothing</Box>
              </AccordionSummary>
              <AccordionDetails>
                <ListItem disablePadding>
                  <Link href="/products/Tshirts" className="product-link">
                    T-shirts & Shirts
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/products/Hoodies" className="product-link">
                    Hoodies
                  </Link>
                </ListItem>{" "}
                <ListItem disablePadding>
                  <Link href="/products/Jackets" className="product-link">
                    Jackets
                  </Link>
                </ListItem>{" "}
                <ListItem disablePadding>
                  <Link href="/products/Jeans" className="product-link">
                    Jeans & Trousers
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/products/Hats" className="product-link">
                    Hats & Beanies
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/products/Trainers" className="product-link">
                    Trainers
                  </Link>
                </ListItem>
              </AccordionDetails>
            </Accordion>

            <Accordion
              className="accordian"
              sx={{
                backgroundColor: "rgba(252, 227, 189)",
                border: "none !important",
                boxShadow: "none !important",
                "&:before": {
                  display: "none",
                },
                paddingTop: "10px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box>Brands</Box>
              </AccordionSummary>
              <AccordionDetails>
                <ListItem disablePadding>
                  <Link href="/Adidas" className="product-link">
                    Adidas
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/Polar" className="product-link">
                    Polar
                  </Link>
                </ListItem>{" "}
                <ListItem disablePadding>
                  <Link href="/Nike" className="product-link">
                    Nike
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/NorseProjects" className="product-link">
                    Norse Projects
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/Salomon" className="product-link">
                    Salomon
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/Trilogy" className="product-link">
                    Trilogy Tapes
                  </Link>
                </ListItem>
              </AccordionDetails>
            </Accordion>
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
