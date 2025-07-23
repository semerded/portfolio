import { parse } from 'cookie';

export function load({ request }) {
	const cookies = parse(request.headers.get('cookie') || '');
	const theme = cookies.themeMode || 'light';

	return {
		theme
	};
}