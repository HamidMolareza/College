import React, {useState} from 'react';
import Footer from "./components/Footer";
import {Box} from "@mui/material";
import Design1 from "./components/Design1";

const pages = [Design1, Design1, Design1];

export default function App() {
    const [activePage, setActivePage] = useState<number>(1);

    return (
        <div>
            <header>
                <Box sx={{height: "85vh"}}>
                    {pages[activePage - 1]()}
                </Box>
            </header>
            <footer>
                <Box sx={{
                    height: "15vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Footer
                        activePage={activePage}
                        allPages={pages.length}
                        setActivePage={setActivePage}/>
                </Box>
            </footer>
        </div>
    );
}
