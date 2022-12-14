import {Box, Typography} from "@mui/material";
import {ICardData} from "./Cards";

const cardWidth = "230px";
const cardHeight = "304px";
export default function SimpleCard(props: ICardData) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            width: cardWidth,
            height: cardHeight,
            justifyContent: "space-between"
        }}>
            <Box component="img"
                 sx={theme => ({
                     width: cardWidth,
                     height: "159px",
                     borderRadius: "5px"
                 })} src={props.imageSrc}
                 alt={props.imageAlt}>
            </Box>
            <Typography variant="h6" sx={theme => ({
                color: "#000000",
                fontSize: "1.5rem",
                lineHeight: "29px",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 700,
            })}>
                {props.title}
            </Typography>
            <Typography variant="subtitle1" sx={theme => ({
                color: "#363636",
                fontSize: "1rem",
                lineHeight: "20px",
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: 400,
                position: "relative",
                top: "-4px"
            })}>
                {props.subtitle}
            </Typography>
        </Box>
    );
}
