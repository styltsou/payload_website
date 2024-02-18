import { MEDIA_FIELDS } from './media';
import { META } from './meta';
import {
	CONTENT,
	IMAGE,
	SPACER,
	CALL_TO_ACTION,
	CTA_GRID,
	IMAGE_COLLAGE,
	IMAGE_CONTENT_COLLAGE,
	IMAGE_SLIDER,
	IMAGE_GRID,
	IMAGE_STAT_COLLAGE,
	STATISTICS,
	STICKY_CONTENT,
} from './blocks';

export const STUDIES = `
	query Studies {
		Studies(limit: 300) {
			docs {
				slug
			}
		}
	}
`;

export const STUDY = `
	query Study($slug: String, $draft: Boolean) {
		Studies(where: { slug: { equals: $slug } }, limit: 1, draft: $draft) {
			docs {
				id
        slug
				title
        featuredImage {
          ${MEDIA_FIELDS}
        }
        previewImages {
          image {
            ${MEDIA_FIELDS}
          }
        }
        client
        location
        categories {
          id
          slug
          title
        }
        layout {
          ${CONTENT}
          ${IMAGE}
          ${SPACER}
          ${CALL_TO_ACTION}
          ${CTA_GRID}
          ${IMAGE_COLLAGE}
          ${IMAGE_GRID}
          ${IMAGE_SLIDER}
          ${IMAGE_CONTENT_COLLAGE}
          ${IMAGE_STAT_COLLAGE}
          ${STATISTICS}
          ${STICKY_CONTENT}
        }
        ${META}
			}
		}
	}
`;
