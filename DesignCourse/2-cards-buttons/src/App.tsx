import React, {useCallback, useState} from 'react';
import Design1 from "./Designs/Design1";
import CustomAppBar from "./components/Appbar";
import {Box} from '@mui/material';
import VerticalNavigation from "./components/VerticalNavigation";
import "./base.css"
import Design2 from "./Designs/Design2";

const pages = [Design1, Design2]

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
                height: "160px",
                top: "calc(50% - 160px/2)",
                [theme.breakpoints.up("desktop")]: {
                    right: "39px",
                    height: "205px",
                    top: "calc(50% - 205px/2)",
                },
                [theme.breakpoints.up("fourK")]: {
                    right: "42px",
                    height: "335px",
                    top: "calc(50% - 335px/2)",
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
            {pages[pageNumber - 1]()}
        </Box>
    );
}
