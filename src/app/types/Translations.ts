import { AZCards } from "./AZCards";

export type Translations = {
    [key: string]: {
        title: string;
        description: string;
        button: string;
        "az-cards": AZCards;
    };
};
