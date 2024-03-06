import { Button } from '../_components/Button';
import { Padding } from '../_components/layout/Padding';

export default function NotFound() {
	return (
		<Padding top="none" bottom="large">
			<h1 style={{ marginBottom: 0 }}>404</h1>
			<p>This page could not be found.</p>
			<Button href="/" label="Go Home" appearance="primary" />
		</Padding>
	);
}
