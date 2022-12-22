import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Box, Typography} from '@mui/material';

function HideOnScroll(props: any) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {props.children}
        </Slide>
    );
}

function HideAppBar(props: any) {
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

export interface IAppbarProps {
    currentPage: number;
    allPages: number;
    nextPage: () => void;
    prevPage: () => void;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

export default function CustomAppBar(props: IAppbarProps) {
    return (
        <HideAppBar>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "auto",
                gap: "10px",
                userSelect: "none"
            }}>
                <ArrowRightAltIcon sx={{
                    transform: "rotate(180deg)",
                    width: "40px",
                    height: "40px",
                    color: props.hasPrevPage ? "#fff" : "#d0d0d0"
                }} onClick={props.prevPage}
                />
                <Typography variant="h6">
                    {props.currentPage} of {props.allPages}
                </Typography>
                <ArrowRightAltIcon sx={{
                    width: "40px",
                    height: "40px",
                    color: props.hasNextPage ? "#fff" : "#d0d0d0"
                }} onClick={props.nextPage}
                />
            </Box>
        </HideAppBar>
    );
}
