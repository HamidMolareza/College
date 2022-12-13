import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

function HideOnScroll(props: any) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {props.children}
        </Slide>
    );
}

export default function HideAppBar(props: any) {
    return (
        <div>
            <HideOnScroll>
                <AppBar>
                    <Toolbar>
                        {props.children}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
        </div>
    );
}
