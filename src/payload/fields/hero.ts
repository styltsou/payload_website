import type { Field } from 'payload/types';

import richText from './richtext';
import linkGroup from './linkGroup';

const heroField: Field = {
	name: 'hero',
	label: false,
	type: 'group',
	fields: [
		{
			type: 'select',
			name: 'type',
			label: 'Type',
			required: true,
			defaultValue: 'minimal',
			options: [
				{
					label: 'Minimal',
					value: 'minimal',
				},
				{
					label: 'Content Above Image',
					value: 'contentAboveImage',
				},
				{
					label: 'Content Left of Image',
					value: 'contentLeftOfImage',
				},
			],
		},
		{
			name: 'heroMedia',
			label: 'Hero Media',
			type: 'upload',
			relationTo: 'media',
			required: true,
			admin: {
				condition: (_, { type } = {}) =>
					['contentAboveImage', 'contentLeftOfImage'].includes(type),
			},
		},
		richText(),
		linkGroup({
			overrides: {
				maxRows: 2,
			},
		}),
	],
};

export default heroField;
