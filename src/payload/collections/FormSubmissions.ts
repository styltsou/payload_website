import { CollectionConfig } from 'payload/types';

const FormSubmissions: CollectionConfig = {
	slug: 'form-submissions',
	fields: [
		{
			name: 'from',
			type: 'text',
			label: 'From Email',
			admin: {
				readOnly: true,
			},
		},
		{
			name: 'message',
			type: 'textarea',
			label: 'Message',
			admin: {
				readOnly: true,
			},
		},
		{
			name: 'source',
			type: 'text',
			label: 'Source',
			admin: {
				position: 'sidebar',
				readOnly: true,
			},
		},
	],
	admin: {
		description: 'Forms submitted to your website',
		disableDuplicate: true,
	},
};

export default FormSubmissions;
