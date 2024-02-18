import {
	CONTENT,
	IMAGE,
	SPACER,
	CALL_TO_ACTION,
	CTA_GRID,
	IMAGE_COLLAGE,
	IMAGE_GRID,
	IMAGE_SLIDER,
	IMAGE_CONTENT_COLLAGE,
	IMAGE_STAT_COLLAGE,
	STATISTICS,
	STICKY_CONTENT,
	STUDY_SLIDER,
} from './blocks';

import { LINK_FIELDS } from './link';
import { MEDIA_FIELDS } from './media';
import { META } from './meta';

export const PAGES = `
	query Pages {
		Pages(limit: 300) {
			docs {
				slug
			}
		}
	}
`;

export const PAGE = `
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        hero {
          type
          heroImage {
            ${MEDIA_FIELDS}
          }
          richText
          links {
            link ${LINK_FIELDS()}
          }
        }
        layout {
          ${CONTENT}
          ${IMAGE}
          ${SPACER}
          ${CALL_TO_ACTION}
          ${IMAGE_COLLAGE}
          ${IMAGE_STAT_COLLAGE}
          ${STATISTICS}
          ${STICKY_CONTENT}
        }
        ${META}
      }
    }
  }
`;

//  ${IMAGE_CONTENT_COLLAGE}
//           ${IMAGE_SLIDER}
//           ${IMAGE_GRID}
//           ${CTA_GRID}
//           ${STUDY_SLIDER}
