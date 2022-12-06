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
            <div>
                <Typography variant="h1" sx={{
                    fontSize: ["2rem", "4rem"],
                }}>The Greatest Show</Typography>
                <Typography variant="subtitle1" sx={{
                    fontSize: ["1.1rem", "2rem"]
                }}>This is a sample subtitle</Typography>
            </div>
        </Box>
    );
}
