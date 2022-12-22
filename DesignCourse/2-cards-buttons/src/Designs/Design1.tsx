import {Box} from "@mui/material";
import {cards} from "../Cards/Cards";
import SimpleCard from "../Cards/SimpleCard";

export default function Design1() {
    return (
        <Box sx={theme => ({
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
            py: 4.5,
            gap: 6,
            [theme.breakpoints.up("tablet")]: {
                py: 6,
                gap: 2,
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "flex-start"
            },
            [theme.breakpoints.only("tablet")]: {
                gridTemplateColumns: "repeat(3,1fr)",
            },
            [theme.breakpoints.only("laptop")]: {
                py: 8,
                gridTemplateColumns: "repeat(4,1fr)",
            },
            [theme.breakpoints.up("desktop")]: {
                py: 12,
                gap: 3,
                gridTemplateColumns: "repeat(6,1fr)",
            },
            [theme.breakpoints.up("fourK")]: {
                py: 12,
                gap: 6,
                gridTemplateColumns: "repeat(5,1fr)",
            },
        })}>
            {cards.map(card =>
                <Box sx={() => ({
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                })}>
                    <SimpleCard
                        imageSrc={card.imageSrc}
                        imageAlt={card.imageAlt}
                        title={card.title}
                        subtitle={card.subtitle}/>
                </Box>
            )}
        </Box>
    );
}
