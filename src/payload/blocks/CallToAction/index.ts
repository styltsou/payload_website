import { Block } from 'payload/types';
import backgroundColor from '../../fields/backgroundColor';
import linkGroup from '../../fields/linkGroup';

export const CallToAction: Block = {
	slug: 'call-to-action',
	labels: {
		singular: 'Call to Action',
		plural: 'Call to Action Blocks',
	},
	fields: [
		backgroundColor(),
		{
			name: 'richText',
			label: 'Content',
			type: 'richText',
			required: true,
		},
		linkGroup({
			overrides: {
				name: 'actions',
				minRows: 1,
				maxRows: 2,
			},
			appearances: ['primary', 'secondary'],
		}),
	],
};
