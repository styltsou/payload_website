import { LINK_FIELDS } from './link';

export const MEGA_MENU = `
  query MegaMenu {
  MegaMenu {
    navigation {
      id
      link ${LINK_FIELDS({ disableAppearance: true })}
    }
  }
}
`;

export const FOOTER = `
  query Footer {
    Footer {
      navItems {
        id
        link ${LINK_FIELDS({ disableAppearance: true })}
      }
    }
  }
`;

export const SOCIAL_MEDIA = `
	query SocialMedia {
    SocialMedia {
      links {
        id
        label
        url
      }
    }
	}
`;
