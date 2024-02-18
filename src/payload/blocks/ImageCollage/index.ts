import { Block } from 'payload/types';

export const ImageCollage: Block = {
	slug: 'image-collage',
	labels: {
		singular: 'Image Collage',
		plural: 'Image Collage Blocks',
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
