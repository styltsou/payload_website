import { Field } from 'payload/types';
import deepMerge from '../utilities/deepMerge';

const sizeOptions = [
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

export type Size = 'none' | 'small' | 'medium' | 'large';

export type Type = {
	marginTop: Size;
	marginBottom: Size;
	paddingTop: Size;
	paddingBottom: Size;
} & (
	| {
			marginTop: Size;
			marginBottom: Size;
	  }
	| {
			paddingTop: Size;
			paddingBottom: Size;
	  }
);

type SpacingPropeties = 'padding' | 'margin';

type SpacingType = (options?: {
	spacingProperties?: SpacingPropeties[];
	overrides?: Record<string, unknown>;
}) => Field;

const paddingField: Field = {
	type: 'row',
	fields: [
		{
			name: 'paddingTop',
			label: 'Padding Top',
			type: 'select',
			defaultValue: 'none',
			options: sizeOptions,
			admin: {
				width: '50%',
			},
		},
		{
			name: 'paddingBottom',
			label: 'Padding Bottom',
			type: 'select',
			defaultValue: 'none',
			options: sizeOptions,
			admin: {
				width: '50%',
			},
		},
	],
};

const marginField: Field = {
	type: 'row',
	fields: [
		{
			name: 'marginTop',
			label: 'Margin Top',
			type: 'select',
			defaultValue: 'none',
			options: sizeOptions,
			admin: {
				width: '50%',
			},
		},
		{
			name: 'marginBottom',
			label: 'Margin Bottom',
			type: 'select',
			defaultValue: 'none',
			options: sizeOptions,
			admin: {
				width: '50%',
			},
		},
	],
};

const spacingField: SpacingType = ({ spacingProperties, overrides = {} } = {}) => {
	let availableSpacingFields = { padding: paddingField, margin: marginField };

	if (spacingProperties.length === 1) {
		return deepMerge(availableSpacingFields[spacingProperties[0]], overrides);
	} else {
		let spacingResult: Field = {
			label: 'Spacing',
			type: 'collapsible',
			fields: [availableSpacingFields.padding, availableSpacingFields.margin],
		};

		return deepMerge(spacingResult, overrides);
	}
};

export default spacingField;
