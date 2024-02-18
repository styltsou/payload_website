import type { GlobalConfig } from 'payload/types';

import link from '../fields/link';

export const MegaMenu: GlobalConfig = {
	slug: 'mega-menu',
	label: 'Navigation',
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'navigation',
			labels: {
				singular: 'Navigation Link',
				plural: 'Navigation Links',
			},
			type: 'array',
			maxRows: 6,
			fields: [
				link({
					appearances: false,
				}),
			],
		},
	],
};
