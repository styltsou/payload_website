import { Block } from 'payload/types';

export const StickyContent: Block = {
	slug: 'sticky-content',
	labels: {
		singular: 'Sticky Content',
		plural: 'Sticky Content Blocks',
	},
	fields: [
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
