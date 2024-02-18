import type { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';

const Categories: CollectionConfig = {
	slug: 'categories',
	admin: {
		useAsTitle: 'title',
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			label: 'Title',
			required: true,
		},
		slug(),
	],
};

export default Categories;
