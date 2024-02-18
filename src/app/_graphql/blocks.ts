import { LINK_FIELDS } from './link';
import { MEDIA_FIELDS } from './media';

export const CONTENT = `
...on Content {
  blockType
  backgroundColor
  accentLine
  accentLineAlignment
  paddingTop
  paddingBottom
  columns {
    size
    textAlignment
    richText
  }
}
`;

export const IMAGE = `
  ...on Image {
    blockType
    image {
      ${MEDIA_FIELDS}
    }
    type
    caption
  }
`;

export const SPACER = `
  ...on Spacer {
    blockType
    size
  }
`;

export const CALL_TO_ACTION = `
...on CallToAction {
  blockType
  richText
  actions {
    link ${LINK_FIELDS({ disableAppearance: true })}
  }
}
`;

export const CTA_GRID = `
  ...on CtaGrid {
    blockType
    cataGrid_bgColor: backgroundColor
    actions {
      label
      link ${LINK_FIELDS({ disableAppearance: true })}
    }
  }
  `;

export const IMAGE_COLLAGE = `
  ...on ImageCollage {
    blockType
    images {
      image {
        ${MEDIA_FIELDS}
      }
    }
  }
`;

export const IMAGE_GRID = `
  ...on ImageGrid {
    blockType
    backgroundColor
    richText
    images {
      id
      description
      image {
        ${MEDIA_FIELDS}
      }
    }
  }
`;

export const IMAGE_SLIDER = `
  ...on ImageSlider {
    blockType
    backgroundColor
    images {
      id
      image {
        ${MEDIA_FIELDS}
      }
    }
  }
`;

export const IMAGE_CONTENT_COLLAGE = `
  ...on ImageContentCollage {
    blockType
    backgroundColor
    richText
    enableCTA
    link ${LINK_FIELDS()}
    images {
      id
      image {
        ${MEDIA_FIELDS}
      }
    }
  }
`;

export const IMAGE_STAT_COLLAGE = `
  ...on ImageStatCollage {
    blockType
    stats {
      id
      stat
      description
    }
    images {
      image {
        ${MEDIA_FIELDS}
      }
    }
  }
`;

export const STATISTICS = `
  ...on Statistics {
    blockType
    topOverlap
    bottomOverlap
    statistics {
      id
      stat
      description
    }
  }
`;

export const STICKY_CONTENT = `
  ...on StickyContent {
    blockType
    sections {
      id
      title
      description
    }
  }
`;

export const STUDY_SLIDER = `
  ...on StudySlider {
    blockType
   backgroundColor
    studies {
      id
      slug
      title
      client
      featuredImage {
        ${MEDIA_FIELDS}
      }
      categories {
        id
        title
        slug
      }
    }
  }
`;
