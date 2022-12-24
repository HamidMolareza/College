import {Box, Typography} from "@mui/material";
import {ICardData} from "./Cards";

export default function SimpleCard(props: ICardData) {
    return (
        <Box sx={() => ({
            display: "flex",
            flexDirection: "column",
            width: ["272px", "223px", "196px", "186px", "319px"],
        })}>
            <Box component="img"
                 sx={() => ({
                     borderRadius: "5px",
                     height: ["203px", "155px", "141px", "115px", "189px"],
                     objectFit: "cover"
                 })}
                 src={props.imageSrc}
                 alt={props.imageAlt}>
            </Box>
            <Typography variant="h6" sx={() => ({
                color: "#000000",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: ["1.6rem", "1.375rem", "1.5rem", "1.5rem", "2.5rem"],
                lineHeight: ["34px", "27px", "29px", "29px", "50px"],
                marginTop: [2, 1.5, 1, 1, 2],
            })}>
                {props.title}
            </Typography>
            <Typography variant="subtitle1" sx={() => ({
                color: "#363636",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: ["1rem", "1rem", "1rem", "1.125", "2rem"],
                lineHeight: ["24px", "19px", "19px", "22px", "39px"],
                marginTop: [1, 1, 0.9, 1, 1.7],
            })}>
                {props.subtitle}
            </Typography>
        </Box>
    );
}
