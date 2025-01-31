export const homePageQuery = `*[_type == "homePage"][0] {
  navigation->{
  title,
  items[]{
    title,
    linkType,
    "slug": coalesce(slug.current, internalLink->slug.current)
  }
},
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
