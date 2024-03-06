export const PAGES = `
	query Pages {
		Pages(limit: 300) {
			docs {
				slug
			}
		}
	}
`;
