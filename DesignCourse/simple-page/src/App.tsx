import React, {useState} from 'react';
import Footer from "./components/Footer";
import {Box} from "@mui/material";
import Design1 from "./components/Design1";
import Design2 from "./components/Design2";
import Design3 from "./components/Design3";
import Design4 from "./components/Design4";
import Design5 from "./components/Design5";

const pages = [Design1, Design2, Design3, Design4, Design5];

export default function App() {
    const [activePage, setActivePage] = useState<number>(pages.length);

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
