import React from 'react';
import HideAppBar from "./components/Appbar";
import {Box, Container} from '@mui/material';

export default function App() {
    return (
        <div>
            <HideAppBar/>
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
        </div>
    );
}
