import { getAccessToken } from './jwt.service';

export default async function getNotes() {
	const accessToken = getAccessToken();

	const response = await fetch(
		`https://quartz-server-python.onrender.com/api/ai/auth/refresh?accessToken=${accessToken}`,
		{
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		}
	);

	const data = await response.json();

	return data;
}
