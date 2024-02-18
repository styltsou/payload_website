import { Block } from 'payload/types';

import backgroundColor from '../../fields/backgroundColor';

export const StudySlider: Block = {
	slug: 'study-slider',
	labels: {
		singular: 'Study Slider',
		plural: 'Study Slider Blocks',
	},
	fields: [
		backgroundColor(),
		{
			name: 'studies',
			label: 'Studies',
			type: 'relationship',
			relationTo: 'studies',
			hasMany: true,
			required: true,
		},
	],
};
