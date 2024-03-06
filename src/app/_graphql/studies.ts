export const STUDIES = `
	query Studies {
		Studies(limit: 300) {
			docs {
				slug
			}
		}
	}
`;
