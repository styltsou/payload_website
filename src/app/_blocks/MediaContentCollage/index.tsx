import { Page } from '../../../payload/payload-types';
import { BlockTypes } from '../blocksMap';

type Props = Extract<
	Page['layout'][0],
	{ blockType: BlockTypes['mediaContentCollage'] }
>;

export const MediaContentCollageBlock: React.FC<Props> = props => {
	return <div></div>;
};
