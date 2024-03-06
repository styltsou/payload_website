import { Block } from 'payload/types';

import stat from '../../fields/statistic';
import backgroundColor from '../../fields/backgroundColor';

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
		backgroundColor(),
		{
			type: 'row',
			fields: [
				{
					name: 'topOverlap',
					type: 'select',
					defaultValue: 'none',
					options: overlapSizeOptions,
					admin: {
						width: '50%',
					},
				},
				{
					name: 'bottomOverlap',
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
