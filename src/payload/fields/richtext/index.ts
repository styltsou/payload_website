import { slateEditor } from '@payloadcms/richtext-slate';
import { Field } from 'payload/types';
import deepMerge from '../../utilities/deepMerge';

import defaultLeaves from './leaves';
import defaultElements from './elements';

type RichText = (options?: { additions?: any; overrides?: any }) => Field;

const richText: RichText = ({ additions = {}, overrides = {} } = {}) => {
	let fieldResult: Field = {
		name: 'richText',
		label: 'Rich Text',
		type: 'richText',
		required: true,
		editor: slateEditor({
			admin: {
				elements: defaultElements,
				leaves: defaultLeaves,
			},
		}),
	};

	return fieldResult;
};

export default richText;
