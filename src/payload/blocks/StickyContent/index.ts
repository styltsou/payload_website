import { Block } from 'payload/types';

import backgroundColor from '../../fields/backgroundColor';

export const StickyContent: Block = {
	slug: 'sticky-content',
	labels: {
		singular: 'Sticky Content',
		plural: 'Sticky Content Blocks',
	},
	fields: [
		backgroundColor(),
		{
			name: 'sections',
			label: 'sections',
			type: 'array',
			minRows: 2,
			maxRows: 8,
			fields: [
				{
					name: 'title',
					label: 'Title',
					type: 'text',
					required: true,
				},
				{
					name: 'description',
					label: 'Description',
					type: 'textarea',
					required: true,
				},
			],
		},
	],
};
