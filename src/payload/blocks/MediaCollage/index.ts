import { Block } from 'payload/types';

export const MediaCollage: Block = {
	slug: 'media-collage',
	labels: {
		singular: 'Media Collage',
		plural: 'Media Collage Blocks',
	},
	fields: [
		{
			name: 'images',
			label: 'Images',
			type: 'array',
			minRows: 3,
			maxRows: 6,
			fields: [
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
			],
		},
	],
};
