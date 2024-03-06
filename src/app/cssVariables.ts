// Keep these in sync with the CSS variables in the `_css` directory

export const htmlFontSize = 18;

export const baselinePX = 20;

export const base = (multiplier: number): string =>
	`${(baselinePX / htmlFontSize) * multiplier}rem`;

export const gridContainerWidth = 920;
export const gridOverflow = base(6);

export const zIndices = {
	page: 10,
	modal: 20,
	header: 30,
};

export const breakpoints = {
	xs: 400,
	s: 768,
	m: 1024,
	l: 1440,
	xl: 1680,
	xxl: 1920,
};

export const colors = {
	base0: 'rgb(255, 255, 255)',
	base100: 'rgb(235, 235, 235)',
	base500: 'rgb(128, 128, 128)',
	base850: 'rgb(34, 34, 34)',
	base1000: 'rgb(0, 0, 0)',
	error500: 'rgb(255, 111, 118)',
	red: '#FF322C',
	blue: '#9ED1D8',
	orange: '#FCB449',
	antique: '#FFF9F2',
	gray: '#181818',
	white: '#fff',
	black: '#000',
};
