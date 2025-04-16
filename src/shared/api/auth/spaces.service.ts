import { getRefreshToken } from '../auth/jwt.service';

export default async function getSpaces() {
	const refreshToken = getRefreshToken();

	const response = await fetch(
		`https://quartz-server-python.onrender.com/api/ai/auth/refresh?refreshToken=${refreshToken}`,
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
