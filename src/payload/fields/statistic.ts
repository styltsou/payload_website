import { Field } from 'payload/types';
import deepMerge from '../utilities/deepMerge';

type StatisticType = (options?: {
	overrides?: Record<string, unknown>;
}) => Field;

const stat: StatisticType = ({ overrides = {} } = {}) =>
	deepMerge<Field, Record<string, unknown>>(
		{
			type: 'row',
			fields: [
				{
					name: 'stat',
					label: 'Statistic',
					type: 'text',
					required: true,
					admin: {
						width: '50%',
					},
				},
				{
					name: 'description',
					label: 'Description',
					type: 'text',
					required: true,
					admin: {
						width: '50%',
					},
				},
			],
		},
		overrides,
	);

export default stat;
