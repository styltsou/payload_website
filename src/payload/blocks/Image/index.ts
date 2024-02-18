import type { Block } from 'payload/types';

export const Image: Block = {
	slug: 'image',
	labels: {
		singular: 'Image',
		plural: 'Image Blocks',
	},
	fields: [
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'type',
			type: 'radio',
			defaultValue: 'normal',
			options: [
				{
					label: 'Normal',
					value: 'normal',
				},
				{
					label: 'Wide',
					value: 'wide',
				},
				{
					label: 'Fullscreen',
					value: 'fullscreen',
				},
			],
		},
		{
			name: 'caption',
			label: 'Caption',
			type: 'richText',
		},
	],
};
