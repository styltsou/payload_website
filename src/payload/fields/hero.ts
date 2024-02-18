import type { Field } from 'payload/types';

import linkGroup, { Type as LinkGroupType } from './linkGroup';

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
				{
					label: 'None',
					value: 'none',
				},
			],
		},
		{
			name: 'heroImage',
			label: 'Hero Image',
			type: 'upload',
			relationTo: 'media',
			required: true,
			admin: {
				condition: (_, { type } = {}) => ['contentAboveImage', 'contentLeftOfImage'].includes(type),
			},
		},
		{
			name: 'richText',
			label: 'Rich Text',
			type: 'richText',
			required: true,
		},
		linkGroup({
			overrides: {
				maxRows: 2,
			},
		}),
	],
};

export default heroField;
