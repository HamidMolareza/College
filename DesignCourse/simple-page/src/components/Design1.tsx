import {Box, Typography} from "@mui/material";

export default function Design1() {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            height: "100%"
        }}>
            <Box>
                <Typography variant="h1" sx={{fontSize: "4rem"}}>The Greatest Show</Typography>
                <Typography variant="subtitle1" sx={{fontSize: "2rem"}}>This is a sample subtitle</Typography>
            </Box>
        </Box>
    );
}
