export interface ICardData {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: string;
}

const imageAlt = "shoe";
const title = "Shop Women’s shoes"
const subtitle = "This is a sample description about this card. This text is not important.";

export const cards: ICardData[] = [...new Array(12)]
    .map((_, index) => {
    return {
        imageSrc: `images/${index}.jpg`,
        imageAlt: imageAlt,
        title: title,
        subtitle: subtitle
    };
})
