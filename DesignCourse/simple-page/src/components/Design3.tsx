import {Box, Typography} from "@mui/material";

export default function Design3() {
    return (
        <Box sx={(theme) => ({
            height: "100%",
            [theme.breakpoints.down("laptop")]: {
                display: "flex",
                flexDirection: "Column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            },
            [theme.breakpoints.only("tablet")]: {
                gap: "20px"
            }
        })}>
            <Typography variant="h1" sx={(theme) => ({
                fontSize: "4rem",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "700",
                maxWidth: "360px",
                [theme.breakpoints.up("tablet")]: {
                    fontSize: "7rem",
                    width: "750px"
                },
                [theme.breakpoints.up("laptop")]: {
                    position: "absolute",
                    width: "562px",
                    height: "348px",
                    top: "calc((85vh/2) - (348px/2))",
                    left: "12vh",
                    lineHeight: "116px"
                },
                [theme.breakpoints.up("desktop")]: {
                    fontSize: "8rem",
                },
            })}>The Greatest Show</Typography>
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
                    position: "absolute",
                    width: "610px",
                    height: "58px",
                    top: "calc((85vh/2) - 58px/2 + 220px)",
                    left: "12vh",
                },
            })}>This is a sample subtitle</Typography>
        </Box>
    );
}
