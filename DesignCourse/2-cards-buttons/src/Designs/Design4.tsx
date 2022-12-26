import {Box} from "@mui/material";
import {cards} from "../Cards/Cards";
import Card4 from "../Cards/Card4";

const gaps = [2, 2, 2, 3, 6];

export default function Design4() {
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
            [theme.breakpoints.only("laptop")]: {
                py: 8,
                gridTemplateColumns: "repeat(2,1fr)",
            },
            [theme.breakpoints.up("desktop")]: {
                py: 12,
                gap: gaps[3],
                gridTemplateColumns: "repeat(2,1fr)",
            },
            [theme.breakpoints.up("fourK")]: {
                gap: gaps[4],
                gridTemplateColumns: "repeat(3,1fr)",
            },
        })}>
            {cards.map(card =>
                <Box sx={() => ({
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: [4 - gaps[0], 4 - gaps[1], 5 - gaps[2], 5 - gaps[3], 9 - gaps[4]]
                })}>
                    <Card4
                        imageSrc={card.imageSrc}
                        imageAlt={card.imageAlt}
                        title={card.title}
                        subtitle={card.subtitle}/>
                </Box>
            )}
        </Box>
    );
}
