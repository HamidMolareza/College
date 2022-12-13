import {Box} from "@mui/material";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

export interface IVerticalNavigationProps {
    currentPage: number;
    allPages: number;
    nextPage: () => void;
    prevPage: () => void;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

export default function VerticalNavigation(props: IVerticalNavigationProps) {
    return (
        <Box sx={theme => ({
            display: "flex",
            flexDirection: "column-reverse",
            userSelect: "none",
            alignItems: "center",
            width: "58px",
            [theme.breakpoints.up("desktop")]: {
                width: "71px",
            }
        })}>
            <ArrowCircleLeftOutlinedIcon sx={theme => ({
                cursor: props.hasPrevPage ? "pointer" : "default",
                color: props.hasPrevPage ? "default" : "rgba(94, 93, 93, 0.87)",
                width: "36px",
                height: "46px",
                [theme.breakpoints.up("desktop")]: {
                    width: "45px",
                    height: "45px",
                }
            })} onClick={props.prevPage}
            />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                fontSize: "1.5rem",
            }}>
                <span>{props.currentPage}</span>
                <Box sx={{
                    fontSize: "1.25rem"
                }}>of</Box>
                <span>{props.allPages}</span>
            </Box>
            <ArrowCircleRightOutlinedIcon sx={theme => ({
                fontSize: "30px",
                cursor: props.hasNextPage ? "pointer" : "default",
                color: props.hasNextPage ? "default" : "rgba(94, 93, 93, 0.87)",
                width: "36px",
                height: "46px",
                [theme.breakpoints.up("desktop")]: {
                    width: "45px",
                    height: "45px",
                }
            })} onClick={props.nextPage}/>
        </Box>
    );
}

