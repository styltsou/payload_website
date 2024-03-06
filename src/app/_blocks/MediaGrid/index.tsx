import { Page } from '../../../payload/payload-types';
import { BlockTypes } from '../blocksMap';

type Props = Extract<Page['layout'][0], { blockType: BlockTypes['mediaGrid'] }>;

export const MediaGridBlock: React.FC<Props> = props => {
	return <div></div>;
};
