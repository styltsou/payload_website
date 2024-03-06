import { Block } from 'payload/types';
import backgroundColor from '../../fields/backgroundColor';
import link from '../../fields/link';

export const CTAGrid: Block = {
	slug: 'cta-grid',
	labels: {
		singular: 'CTA Grid',
		plural: 'CTA Grid Blocks',
	},
	fields: [
		backgroundColor(),
		{
			name: 'actions',
			labels: {
				singular: 'Action',
				plural: 'Actions',
			},
			type: 'array',
			minRows: 2,
			fields: [
				{
					name: 'label',
					label: 'Label',
					type: 'text',
					required: true,
				},
				{
					name: 'linkIcon',
					label: 'Link Icon',
					type: 'checkbox',
					defaultValue: true,
				},
				link({ appearances: false }),
			],
		},
	],
};
