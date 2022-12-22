import React, {useCallback, useState} from 'react';
import Design1 from "./Designs/Design1";
import CustomAppBar from "./components/Appbar";
import {Box} from '@mui/material';
import VerticalNavigation from "./components/VerticalNavigation";
import "./base.css"

const pages = [Design1]

export default function App() {
    const [pageNumber, setPageNumber] = useState<number>(pages.length);

    const hasNextPage = pageNumber < pages.length;
    const hasPrevPage = pageNumber > 1;
    const nextPage = useCallback(() => {
        if (!hasNextPage) return;
        setPageNumber(pageNumber + 1);
    }, [pageNumber, hasNextPage]);
    const prevPage = useCallback(() => {
        if (!hasPrevPage) return;
        setPageNumber(pageNumber - 1);
    }, [pageNumber, hasPrevPage]);

    return (
        <Box>
            <Box sx={{
                display: ["block", "block", "none"]
            }}>
                <CustomAppBar
                    currentPage={pageNumber}
                    allPages={pages.length}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    hasNextPage={hasNextPage}
                    hasPrevPage={hasPrevPage}
                />
            </Box>
            <Box sx={theme => ({
                display: ["none", "none", "block"],
                position: "fixed",
                right: "19px",
                height: "174px",
                top: "calc(50% - 174px/2)",
                [theme.breakpoints.up("desktop")]: {
                    right: "39px",
                    height: "214px",
                    top: "calc(50% - 214px/2)",
                },
                [theme.breakpoints.up("fourK")]: {
                    right: "42px",
                    height: "383px",
                    top: "calc(50% - 383px/2)",
                }
            })}>
                <VerticalNavigation
                    currentPage={pageNumber}
                    allPages={pages.length}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    hasNextPage={hasNextPage}
                    hasPrevPage={hasPrevPage}
                />
            </Box>
            <Box sx={() => ({
                marginLeft: [3, 4, 12, 19, 26],
                marginRight: [3, 4, 12, 19, 26]
            })}>
                {pages[pageNumber - 1]()}
            </Box>
        </Box>
    );
}
