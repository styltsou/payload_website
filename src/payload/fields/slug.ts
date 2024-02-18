import type { Field } from 'payload/types';

import deepMerge from '../utilities/deepMerge';
import formatSlug from '../utilities/formatSlug';

export type Type = string;

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

const slugField: Slug = (fieldToUse = 'title', overrides = {}) =>
	deepMerge<Field, Partial<Field>>(
		{
			name: 'slug',
			label: 'Slug',
			type: 'text',
			index: true,
			admin: {
				position: 'sidebar',
			},
			hooks: {
				beforeValidate: [formatSlug(fieldToUse)],
			},
		},
		overrides,
	);

export default slugField;
