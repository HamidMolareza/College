import {Box, Typography} from "@mui/material";

export default function Design4() {
    return (
        <Box sx={(theme) => ({
            height: "100%",
            display: "flex",
            flexDirection: "Column",
            justifyContent: "center",
            [theme.breakpoints.down("laptop")]: {
                alignItems: "center",
                textAlign: "center",
            },
            [theme.breakpoints.up("tablet")]: {
                gap: "20px"
            }
        })}>
            <Typography variant="h1" sx={(theme) => ({
                fontSize: "4rem",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "700",
                width: "360px",
                [theme.breakpoints.up("tablet")]: {
                    fontSize: "7rem",
                    width: "750px"
                },
                [theme.breakpoints.up("laptop")]: {
                    marginLeft: "12vh",
                    lineHeight: "116px"
                },
                [theme.breakpoints.up("desktop")]: {
                    fontSize: "8rem",
                },
            })}>
                <Box sx={{
                    display: "block",
                    fontSize: ["2rem", "4rem"],
                    height: ["auto", "auto", "95px"]
                }}>The</Box>
                Greatest Show
            </Typography>
            <Typography variant="subtitle1" sx={(theme) => ({
                fontSize: "1.5rem",
                color: "#444444",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "58px",
                [theme.breakpoints.up("tablet")]: {
                    fontSize: "3rem",
                },
                [theme.breakpoints.up("laptop")]: {
                    marginLeft: "12vh",
                },
            })}>This is a sample subtitle</Typography>
        </Box>
    );
}
