import type { Block, Field } from 'payload/types';

import backgroundColor from '../../fields/backgroundColor';
import spacing from '../../fields/spacing';

const columnFields: Field[] = [
	{
		type: 'row',
		fields: [
			{
				name: 'size',
				type: 'select',
				required: true,
				defaultValue: 'oneThird',
				options: [
					{
						value: 'oneThird',
						label: 'One Third',
					},
					{
						value: 'half',
						label: 'Half',
					},
					{
						value: 'twoThirds',
						label: 'Two Thirds',
					},
					{
						value: 'full',
						label: 'Full',
					},
				],
				admin: {
					width: '50%',
				},
			},
			{
				name: 'textAlignment',
				label: 'Text alignment',
				type: 'select',
				required: true,
				defaultValue: 'center',
				options: [
					{
						label: 'Left',
						value: 'left',
					},
					{
						label: 'Center',
						value: 'center',
					},
					{
						label: 'Right',
						value: 'right',
					},
				],
				admin: {
					width: '50%',
				},
			},
		],
	},
	{
		name: 'richText',
		label: 'Content',
		type: 'richText',
		required: true,
	},
];

export const Content: Block = {
	slug: 'content',
	labels: {
		singular: 'Content',
		plural: 'Content Blocks',
	},
	fields: [
		backgroundColor(),
		{
			name: 'columns',
			label: 'Columns',
			type: 'array',
			minRows: 1,
			fields: columnFields,
		},
		{
			name: 'accentLine',
			label: 'Enable Accent Line',
			type: 'checkbox',
			defaultValue: false,
		},
		{
			name: 'accentLineAlignment',
			label: 'Accent Line Alignment',
			type: 'radio',
			options: [
				{
					label: 'Left',
					value: 'left',
				},
				{
					label: 'Right',
					value: 'right',
				},
			],
			admin: {
				condition: (_, siblingData) => siblingData.accentLine,
			},
		},
		spacing({
			spacingProperties: ['padding'],
		}),
	],
};
