/* eslint-disable no-shadow */
import { useEffect, useRef, useState } from 'react';
import canUseDOM from '../_utilities/canUseDOM';

type Resize = [setNode: React.Dispatch<Element>, entry: ResizeObserverEntry];

export const useResize = (): Resize => {
	const [entry, updateEntry] = useState<ResizeObserverEntry>();
	const [node, setNode] = useState(null);

	const observer = useRef(
		canUseDOM ? new window.ResizeObserver(([ent]) => updateEntry(ent)) : null,
	);

	useEffect(() => {
		const { current: currentObserver } = observer;
		currentObserver.disconnect();

		if (node) currentObserver.observe(node);

		return () => currentObserver.disconnect();
	}, [node]);

	return [setNode, entry];
};
