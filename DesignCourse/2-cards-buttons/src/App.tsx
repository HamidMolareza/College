import React, {useCallback, useState} from 'react';
import Design1 from "./components/Design1";
import CustomAppBar from "./components/Appbar";
import Design2 from "./components/Design2";

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
        <div>
            <CustomAppBar
                currentPage={pageNumber}
                allPages={pages.length}
                nextPage={nextPage}
                prevPage={prevPage}
                hasNextPage={hasNextPage}
                hasPrevPage={hasPrevPage}
            />
            {pages[pageNumber - 1]()}
        </div>
    );
}
