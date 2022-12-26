import {Box} from "@mui/material";
import {cards} from "../Cards/Cards";
import Card3 from "../Cards/Card3";

const gaps = [2, 1, 1, 1.5, 3];

export default function Design3() {
    return (
        <Box sx={theme => ({
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
            py: 4.5,
            gap: gaps[0],
            [theme.breakpoints.up("tablet")]: {
                py: 6,
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
                gap: gaps[3],
                gridTemplateColumns: "repeat(6,1fr)",
            },
            [theme.breakpoints.up("fourK")]: {
                gap: gaps[4],
                gridTemplateColumns: "repeat(5,1fr)",
            },
        })}>
            {cards.map(card =>
                <Box sx={() => ({
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: [4 - gaps[0], 4 - gaps[1], 8 - gaps[2], 8 - gaps[3], 12 - gaps[4]]
                })}>
                    <Card3
                        imageSrc={card.imageSrc}
                        imageAlt={card.imageAlt}
                        title={card.title}
                        subtitle={card.subtitle}/>
                </Box>
            )}
        </Box>
    );
}
