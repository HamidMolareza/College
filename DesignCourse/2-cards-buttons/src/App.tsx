import React, {useCallback, useState} from 'react';
import Design1 from "./Designs/Design1";
import CustomAppBar from "./components/Appbar";
import {Box} from '@mui/material';
import VerticalNavigation from "./components/VerticalNavigation";

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
        <Box sx={{backgroundColor: "#EEEEEE"}}>
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
                right: "25px",
                height: "195px",
                top: "calc(50% - 195px/2)",
                [theme.breakpoints.up("desktop")]: {
                    right: "32px",
                    height: "225px",
                    top: "calc(50% - 225px/2)",
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
            <Box sx={{
                marginLeft: [0, 0, "120px", "150px"],
                marginRight: [0, 0, "120px", "150px"]
            }}>
                {pages[pageNumber - 1]()}
            </Box>
        </Box>
    );
}
