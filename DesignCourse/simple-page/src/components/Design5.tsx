import {Box, Typography} from "@mui/material";

export default function Design5() {
    return (
        <Box sx={(theme) => ({
            height: "100%",
            display: "flex",
            [theme.breakpoints.down("laptop")]: {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            },
            [theme.breakpoints.only("tablet")]: {
                gap: "20px"
            }
        })}>
            <Box sx={{
                display: ["none", "none", "block"],
                width: "150px",
                height: "100%",
                backgroundColor: "#F0F0F0",
            }}
            >

            </Box>
            <Typography variant="h1" sx={(theme) => ({
                fontSize: "4rem",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "700",
                width: ["360px", "750px"],
                [theme.breakpoints.only("tablet")]: {
                    fontSize: "7rem",
                },
                [theme.breakpoints.up("laptop")]: {
                    lineHeight: "65px",
                    margin: "auto",
                    marginLeft: "110px",
                    marginRight: "100px",
                    width: "330px",
                    direction: "rtl"
                },
                [theme.breakpoints.up("desktop")]: {
                    lineHeight: "116px",
                    fontSize: "8rem",
                    width: "650px"
                },
            })}>
                <Box sx={{
                    display: "block",
                    fontSize: ["2rem", "4rem"],
                    height: ["auto", "auto", "65px", "100px"]
                }}>The</Box>
                Greatest Show
            </Typography>
            <Typography variant="subtitle1" sx={(theme) => ({
                fontSize: ["1.5rem", "3rem"],
                color: "#444444",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "58px",
                [theme.breakpoints.up("laptop")]: {
                    margin: "auto 0px",
                    fontSize: "1.3rem"
                },
            })}>This is a sample subtitle</Typography>
        </Box>
    );
}
