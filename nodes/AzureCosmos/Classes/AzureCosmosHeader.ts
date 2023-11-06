import { IDataObject } from 'n8n-workflow';
import { createAuthToken } from '../functions/createAuthToken';

export class AzureCosmosHeader {
	header: IDataObject = {};

	public generalHeader(url: string, masterKey: string, verb: any): IDataObject {
		return (this.header = {
			Authorization: createAuthToken(url, masterKey, verb),
			Accept: 'application/json',
			'x-ms-version': '2016-07-11',
			'x-ms-date': new Date().toUTCString(),
		});
	}

	public queryHeader(url: string, masterKey: string, verb: any): IDataObject {
		return (this.header = {
			Authorization: createAuthToken(url, masterKey, verb),
			'Content-Type': 'application/query+json',
			'x-ms-version': '2016-07-11',
			'x-ms-date': new Date().toUTCString(),
			'x-ms-documentdb-isquery': true,
		});
	}
}
