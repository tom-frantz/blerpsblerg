import React from "react";
import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
    useTheme,
    Container,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    const theme = useTheme();
    return (
        <AppBar position="sticky">
            <Container>
                <Toolbar>
                    <IconButton
                        style={{ marginRight: theme.spacing(2) }}
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        ARTICLES
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
