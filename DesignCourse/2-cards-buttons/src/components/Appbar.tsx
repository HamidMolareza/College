import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

type Props = {
    children: JSX.Element;
};

function HideOnScroll({children}: Props) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function HideAppBar() {
    return (
        <>
            <HideOnScroll>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            Scroll to hide App bar
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
        </>
    );
}
