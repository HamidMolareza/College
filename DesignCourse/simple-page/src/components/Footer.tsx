import {Box} from "@mui/material";
import React, {useCallback} from "react";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export interface IFooterProps {
    activePage: number;
    allPages: number;
    setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Footer(props: IFooterProps) {
    const hasPrevPage = props.activePage >= 2;
    const hasNextPage = props.activePage < props.allPages;

    const goPrevPage = useCallback(() => {
        if (!hasPrevPage) return;
        props.setActivePage(props.activePage - 1)
    }, [hasPrevPage, props.activePage]);

    const goNextPage = useCallback(() => {
        if (!hasNextPage) return;
        props.setActivePage(props.activePage + 1)
    }, [hasNextPage, props.activePage]);

    return (
        <Box sx={{
            display: "flex",
            width: "130px",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            userSelect: "none"
        }}>
            <ArrowCircleLeftOutlinedIcon sx={{
                fontSize: "30px",
                cursor: hasPrevPage ? "pointer" : "default",
                color: hasPrevPage ? "default" : "rgba(94, 93, 93, 0.87)"
            }} onClick={goPrevPage}
            />
            <span>{props.activePage} of {props.allPages}</span>
            <ArrowCircleRightOutlinedIcon sx={{
                fontSize: "30px",
                cursor: hasNextPage ? "pointer" : "default",
                color: hasNextPage ? "default" : "rgba(94, 93, 93, 0.87)"
            }} onClick={goNextPage}/>
        </Box>
    );
}
