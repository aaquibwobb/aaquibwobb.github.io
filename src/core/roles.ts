import { nanoid } from 'nanoid';

export interface OTPEntry {
	value: string;
	key: string;
}

export function randomID(length = 21) {
	return nanoid(length);
}

export function randomOTPArray(length: number): OTPEntry[] {
	let items: OTPEntry[] = [];
	for (let i = 0; i < length; i++) {
		items.push({
			value: '',
			key: randomID(),
		});
	}
	return items;
}
