import {Box, Typography} from "@mui/material";

export default function Design7() {
    return (
        <Box sx={(theme) => ({
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            [theme.breakpoints.down("laptop")]: {
                textAlign: "center"
            }
        })}>
            <Box sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100vw",
                height: ["50vh", "50vh", "60vh"],
                backgroundColor: "#F0F0F0",
                gap: ["0px", "30px", "20px"],
                [theme.breakpoints.down("laptop")]: {
                    alignItems: "center",
                }
            })}>
                <Typography variant="h1" sx={(theme) => ({
                    fontSize: ["4rem", "5rem"],
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: "700",
                    width: ["330px", "440px"],
                    [theme.breakpoints.up("laptop")]: {
                        lineHeight: "85px",
                        margin: "auto auto 0 110px",
                    },
                    [theme.breakpoints.up("desktop")]: {
                        fontSize: "7rem",
                        lineHeight: "116px",
                        width: "620px",
                        marginLeft: "10vw"
                    },
                })}>
                    <Box sx={{
                        display: "block",
                        fontSize: ["2rem", "3rem"],
                        height: ["auto", "auto", "75px", "85px"]
                    }}>The</Box>
                    Greatest Show
                </Typography>
                <Typography variant="subtitle1" sx={(theme) => ({
                    fontSize: ["1.2rem", "1.8rem"],
                    color: "#444444",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "58px",
                    [theme.breakpoints.up("laptop")]: {
                        margin: "0 auto auto 110px",
                        fontSize: "2rem",
                    },
                    [theme.breakpoints.up("desktop")]: {
                        marginLeft: "10vw"
                    },
                })}>This is a sample subtitle</Typography>
            </Box>
        </Box>
    );
}
