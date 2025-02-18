export const headerQuery = `*[_type == "header"][0] {
  logo {
    "url": asset->url,
    altText
  },
  navigation->{
    title,
    items[]{
      title,
      linkType,
      "slug": coalesce(slug.current, internalLink->slug.current)
    }
  }
}`;

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
    'djposter': djposter.asset->url,
    'classposter': classposter.asset->url,
    'classpostercaption': classpostercaption
  },
  planForVisit->{
    title,
    editor,
    "slug": slug.current,
    description,
    images[] {
      "image": asset->url
    }
  },
  linkToGallery->{
    title,
    "slug": slug.current,
    description,
    images[] {
      "url": asset->url,
      "altText": asset->altText
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
    'djposter': djposter.asset->url,
    'classposter': classposter.asset->url,
    'classpostercaption': classpostercaption
}`;

export const galleryPageQuery = `*[_type == "galleryPage"][0] {
  title,
  "slug": slug.current,
  description,
  images[] {
    "image": asset->url,
    "altText": asset->altText
  }
}`;

export const venuePageQuery = `*[_type == "venuePage"][0] {
  title,
  editor,
  "slug": slug.current,
  images[] {
    "image": asset->url
  }
}`;

export const eventsPageQuery = `* [_type == "eventsPage"][0] {
  title,
    description,
    events[]->{
      title,
      eventDate,
      location,
      ticketUrl,
      "slug": slug.current,
      'djposter': djposter.asset->url,
      'classposter': classposter.asset->url,
      'classpostercaption': classpostercaption
    }
}`;

export const footerQuery = `*[_type == "footer"][0] {
  socialMedia[] {
    platform,
    "iconUrl": icon.asset->url,
    url
  },
  copyright,
  partners[] {
    name,
    url
  },
}`;
