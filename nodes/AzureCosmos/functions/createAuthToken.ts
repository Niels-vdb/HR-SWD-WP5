import * as crypto from 'crypto';

export function createAuthToken(url: string, masterKey: string, verb: any): string {
	const key: Buffer = Buffer.from(masterKey, 'base64');
	const date: string = new Date().toUTCString();

	// Strip ULR of hostname
	let strippedUrl = url.replace(new RegExp('^https?://[^/]+/'), '/');

	// Push the parts down into an array so we can determine if the call is on a specific item
	// or if it is on a resource (odd would mean a resource, even would mean an item)
	const strippedParts = strippedUrl.split('/');
	const trueStrippedCount = strippedParts.length - 1;

	// define resourceId/Type now so we can assign based on the amount of levels
	let resourceId: string = '';
	let resType: string = '';

	if (trueStrippedCount % 2) {
		// assign resource type to the last part
		resType = strippedParts[trueStrippedCount];

		if (trueStrippedCount > 1) {
			// now pull out the resource id by searching for the last slash and substringing to it.
			const lastPart: number = strippedUrl.lastIndexOf('/');
			resourceId = strippedUrl.substring(1, lastPart);
		}
	} else {
		// assign resource type to the part before the last we found (last is resource id)
		resType = strippedParts[trueStrippedCount - 1];
		// finally remove the leading slash which we used to find the resource if it was
		// only one level deep.
		strippedUrl = strippedUrl.substring(1);
		// assign our resourceId
		resourceId = strippedUrl;
	}

	const text =
		(verb || '').toLowerCase() +
		'\n' +
		(resType || '').toLowerCase() +
		'\n' +
		(resourceId || '') +
		'\n' +
		date.toLowerCase() +
		'\n' +
		'' +
		'\n';

	const body = Buffer.from(text, 'utf8');
	const signature = crypto.createHmac('sha256', key).update(body).digest('base64');

	const typeOfToken: string = 'master';
	const tokenVersion: string = '1.0';

	return encodeURIComponent('type=' + typeOfToken + '&ver=' + tokenVersion + '&sig=' + signature);
}
