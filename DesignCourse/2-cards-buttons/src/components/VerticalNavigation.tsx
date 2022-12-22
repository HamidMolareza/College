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
            [theme.breakpoints.only("desktop")]: {
                width: "71px",
            },
            [theme.breakpoints.up("fourK")]: {
                width: "127px",
            }
        })}>
            <ArrowCircleLeftOutlinedIcon sx={theme => ({
                cursor: props.hasPrevPage ? "pointer" : "default",
                color: props.hasPrevPage ? "default" : "rgba(94, 93, 93, 0.87)",
                width: "37px",
                height: "37px",
                [theme.breakpoints.only("desktop")]: {
                    width: "45px",
                    height: "45px",
                },
                [theme.breakpoints.up("fourK")]: {
                    width: "81px",
                    height: "81px",
                }
            })} onClick={props.prevPage}
            />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                fontSize: [0, 0, "1.25rem", "1.75rem", "2.5rem"],
            }}>
                <span>{props.currentPage}</span>
                <Box sx={{
                    fontSize: [0, 0, "1rem", "1.25rem", "2rem"]
                }}>of</Box>
                <span>{props.allPages}</span>
            </Box>
            <ArrowCircleRightOutlinedIcon sx={theme => ({
                cursor: props.hasNextPage ? "pointer" : "default",
                color: props.hasNextPage ? "default" : "rgba(94, 93, 93, 0.87)",
                width: "37px",
                height: "37px",
                [theme.breakpoints.only("desktop")]: {
                    width: "45px",
                    height: "45px",
                },
                [theme.breakpoints.up("fourK")]: {
                    width: "81px",
                    height: "81px",
                }
            })} onClick={props.nextPage}/>
        </Box>
    );
}

