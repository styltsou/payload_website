import type { ArrayField } from 'payload/dist/fields/config/types';
import type { Field } from 'payload/types';

import deepMerge from '../utilities/deepMerge';
import type { LinkAppearance } from './link';
import link, { Type as LinkType } from './link';

export type Type = LinkType[];

type LinkGroupType = (options?: {
	overrides?: Partial<ArrayField>;
	appearances?: LinkAppearance[] | false;
}) => Field;

const linkGroup: LinkGroupType = ({ overrides = {}, appearances } = {}) => {
	const generatedLinkGroup: Field = {
		name: 'links',
		type: 'array',
		fields: [
			link({
				appearances,
			}),
		],
	};

	return deepMerge(generatedLinkGroup, overrides);
};

export default linkGroup;
