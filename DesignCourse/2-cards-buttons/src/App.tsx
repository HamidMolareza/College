import React from 'react';
import HideAppBar from "./components/Appbar";
import {Box, Container, Typography} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function App() {
    return (
        <>
            <Box sx={{
                display: ["block", "block", "none"]
            }}>
                <HideAppBar>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        margin: "auto",
                        gap: "10px"
                    }}>
                        <ArrowRightAltIcon sx={{
                            transform: "rotate(180deg)",
                            width: "35px",
                            height: "35px"
                        }}/>
                        <Typography variant="h6">
                            1 of 5
                        </Typography>
                        <ArrowRightAltIcon sx={{
                            width: "35px",
                            height: "35px"
                        }}/>
                    </Box>
                </HideAppBar>
            </Box>
            <Container>
                <Box sx={{my: 2}}>
                    {[...new Array(30)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
        </>
    );
}
