import { Block } from 'payload/types';

import statistic from '../../fields/statistic';

export const MediaStatCollage: Block = {
	slug: 'media-stat-collage',
	labels: {
		singular: 'Media Stat Collage',
		plural: 'Media Stat Collage Blocks',
	},
	fields: [
		{
			name: 'stats',
			label: 'Statistics',
			type: 'array',
			minRows: 1,
			maxRows: 3,
			fields: [statistic()],
		},
		{
			name: 'media',
			label: 'Media',
			type: 'array',
			minRows: 3,
			maxRows: 6,
			fields: [
				{
					name: 'media',
					label: 'Media',
					type: 'upload',
					relationTo: 'media',
					required: true,
				},
			],
		},
	],
};
