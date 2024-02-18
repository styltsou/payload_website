import { Block } from 'payload/types';

import stat from '../../fields/statistic';

const overlapSizeOptions = [
	{
		label: 'None',
		value: 'none',
	},
	{
		label: 'Small',
		value: 'small',
	},
	{
		label: 'Medium',
		value: 'medium',
	},
	{
		label: 'Large',
		value: 'large',
	},
];

export const Statistics: Block = {
	slug: 'statistics',
	labels: {
		singular: 'Statistics',
		plural: 'Statistics Blocks',
	},
	fields: [
		{
			type: 'row',
			fields: [
				{
					name: 'topOverlap',
					label: 'Top Overlap',
					type: 'select',
					defaultValue: 'none',
					options: overlapSizeOptions,
					admin: {
						width: '50%',
					},
				},
				{
					name: 'bottomOverlap',
					label: 'Bottom Overlap',
					type: 'select',
					defaultValue: 'none',
					options: overlapSizeOptions,
					admin: {
						width: '50%',
					},
				},
			],
		},
		{
			name: 'statistics',
			label: 'Statistics',
			type: 'array',
			minRows: 1,
			maxRows: 3,
			fields: [stat()],
		},
	],
};
