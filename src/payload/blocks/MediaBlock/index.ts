import type { Block } from 'payload/types';

export const MediaBlock: Block = {
	slug: 'media-block',
	labels: {
		singular: 'Media Block',
		plural: 'Media Blocks',
	},
	fields: [
		{
			name: 'media',
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
