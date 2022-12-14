import {Box} from "@mui/material";
import {cards} from "../Cards/Cards";
import SimpleCard from "../Cards/SimpleCard";

export default function Design1() {
    return (
        <Box sx={theme => ({
            display: "flex",
            flexDirection: "column",
            gap: "44px",
            py: 4
        })}>
            {cards.map(card =>
                <Box sx={theme => ({
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
