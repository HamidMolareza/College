import {Box, Typography} from "@mui/material";
import {ICardData} from "./Cards";

export default function Card2(props: ICardData) {
    return (
        <Box sx={() => ({
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1F1F1F",
            borderRadius: "5px 5px 0px 0px",
            width: ["272px", "223px", "196px", "186px", "319px"],
            minHeight: ["330px", "245px", "240px", "240px", "440px"],
        })}>
            <Box component="img"
                 sx={() => ({
                     borderRadius: "5px 5px 0px 0px",
                     height: ["203px", "135px", "119px", "115px", "200px"],
                     objectFit: "cover"
                 })}
                 src={props.imageSrc}
                 alt={props.imageAlt}>
            </Box>
            <Box sx={{
                width: ["90%", "88%", "88%", "82%", "86%"],
                margin: "0 auto"
            }}>
                <Typography variant="h6" sx={() => ({
                    color: "#FFFFFF",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: ["1.75rem", "1.375rem", "1.375rem", "1.25rem", "2.25rem"],
                    lineHeight: ["34px", "27px", "29px", "29px", "50px"],
                    marginTop: [2, 1.5, 2, 2.25, 3],
                })}>
                    {props.title}
                </Typography>
                <Typography variant="subtitle1" sx={() => ({
                    color: "#D2D2D2",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: ["1.25rem", "1rem", "1rem", "1.125", "1.75rem"],
                    lineHeight: ["24px", "19px", "19px", "22px", "39px"],
                    marginTop: [1, 1, 0.9, 1, 2.5],
                    marginBottom: [2, 1.5, 2, 2.25, 3],
                })}>
                    {props.subtitle}
                </Typography>
            </Box>
        </Box>
    );
}
