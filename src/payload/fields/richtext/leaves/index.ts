import { RichTextLeaf } from '@payloadcms/richtext-slate';
import RedHeadline from './RedHeadline';
import RedUnderline from './RedUnderline';

const defaultLeaves: RichTextLeaf[] = [
	'bold',
	'italic',
	'underline',
	'strikethrough',
	RedHeadline,
	RedUnderline,
];

export default defaultLeaves;
