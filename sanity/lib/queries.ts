export const navigationQuery = `*[_type == "navigation"][0] {
  title,
  items[]{
    title,
    linkType,
    "slug": coalesce(slug.current, internalLink->slug.current)
  }
}`

export const homePageQuery = `*[_type == "homePage"][0] {
  highlightEvent->{
    title,
    eventDate,
    location,
    ticketUrl,
    "slug": slug.current,
    "image": image.asset->url
  },
  cardsSection {
    title,
    cards[] {
      title,
      description,
      "image": image.asset->url,
      link->{
        _type,
        title,
        "slug": slug.current
      }
    }
  }
}
`

export const eventQuery = `*[_type == "event"] | order(eventDate asc) {
    title,
    eventDate,
    location,
    ticketUrl,
    "slug": slug.current,
    "image": image.asset->url
}`;

export const galleryPageQuery = `*[_type == "galleryPage"][0] {
  title,
  description,
  pictures[] {
    "image": asset->url
  }
}`;

export const venuePageQuery = `*[_type == "venuePage"][0] {
  title,
  description,
  "image": image.asset->url
}`;

export const contactPageQuery = `*[_type == "contactPage"][0] {
  title,
  description,
  email,
  phone
}`;

export const eventsPageQuery = `*[_type == "eventsPage"][0] {
  title,
  description,
  events[] {
    "image": asset->url
  }
}`;