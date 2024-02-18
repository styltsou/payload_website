import { Block } from 'payload/types';

import backgroundColor from '../../fields/backgroundColor';

export const ImageGrid: Block = {
	slug: 'image-grid',
	labels: {
		singular: 'Image Grid',
		plural: 'Image Grid Blocks',
	},
	fields: [
		backgroundColor(),
		{
			name: 'richText',
			label: 'Content',
			type: 'richText',
		},
		{
			name: 'images',
			type: 'array',
			minRows: 3,
			maxRows: 12,
			fields: [
				{
					name: 'image',
					label: 'Image',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
				{
					name: 'description',
					label: 'Description',
					type: 'textarea',
				},
			],
		},
	],
};
