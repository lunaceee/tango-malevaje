import { cardType } from "./card";
import { galleryPageType } from "./pages/galleryPage";
import { venuePageType } from "./pages/venuePage";
import { homePageType } from "./pages/homePage";
import { navigationType } from "./navigation";
import { navigationItemType } from "./navigationItem";
import { eventsPageType } from "./pages/eventsPage";
import { eventType } from "./event";
import { blockContentType } from "./blockContent";
import { footerType } from "./footer";
import { headerType } from "./header";

export const schemaTypes = [
    cardType,
    navigationType,
    navigationItemType,
    galleryPageType,
    venuePageType,
    homePageType,
    eventsPageType,
    eventType,
    blockContentType,
    footerType,
    headerType
];