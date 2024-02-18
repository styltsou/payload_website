import { Block } from 'payload/types';

import backgroundColor from '../../fields/backgroundColor';
import link from '../../fields/link';

export const ImageContentCollage: Block = {
	slug: 'image-content-collage',
	labels: {
		singular: 'Image Content Collage',
		plural: 'Image Content Collage Blocks',
	},
	fields: [
		backgroundColor(),
		{
			name: 'richText',
			label: 'Content',
			type: 'richText',
			required: true,
		},
		{
			name: 'enableCTA',
			label: 'Enable CTA',
			type: 'checkbox',
		},
		link({
			appearances: ['primary'],
			overrides: {
				admin: {
					condition: (_, siblingData) => siblingData.enableCTA,
				},
			},
		}),
		{
			name: 'images',
			label: 'Images',
			type: 'array',
			minRows: 3,
			maxRows: 6,
			fields: [
				{
					name: 'image',
					label: 'Image',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
			],
		},
	],
};
