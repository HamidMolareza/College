import {Box, Typography} from "@mui/material";
import {ICardData} from "./Cards";

export default function Card4(props: ICardData) {
    return (
        <Box sx={() => ({
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#1F1F1F",
            maxWidth: ["94%", "538px", "408px", "574px", "911px"],
            height: ["146px", "160px", "176px", "170px", "280px"],
        })}>
            <Box component="img"
                 sx={() => ({
                     height: "100%",
                     minWidth: ["114px", "196px", "196px", "267px", "340px"],
                     objectFit: "cover"
                 })}
                 src={props.imageSrc}
                 alt={props.imageAlt}>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                px: [1, 2, 1.5, 1.5, 3.5],
                py: [1.5, 2.5, 2, 2, 4],
                overflow: "hidden",
                justifyContent: "center",
            }}>
                <Typography variant="h6" sx={() => ({
                    color: "#FFFFFF",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: ["1.125rem", "1.625rem", "1.25rem", "1.5rem", "2.3rem"],
                    lineHeight: ["23px", "32px", "28px", "32px", "45px"],
                })}>
                    {props.title}
                </Typography>
                <Typography variant="subtitle1" sx={() => ({
                    color: "#D2D2D2",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: ["0.875rem", "1.125rem", "1rem", "1.125", "1.75rem"],
                    marginTop: [1, 1.5, 1.5, 1, 1.5],
                    lineHeight: ["20px", "25px", "22px", "25px", "33px"],
                })}>
                    {props.subtitle}
                </Typography>
            </Box>
        </Box>
    );
}
