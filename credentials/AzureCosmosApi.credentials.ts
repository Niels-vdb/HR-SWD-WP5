import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class AzureCosmosApi implements ICredentialType {
	name = 'azureCosmosApi';
	displayName = 'Azure Cosmos API';
	// eslint-disable-next-line n8n-nodes-base/cred-class-field-documentation-url-not-http-url
	documentationUrl = '';

	properties: INodeProperties[] = [
		{
			displayName: 'Database Account',
			name: 'accountName',
			type: 'string',
			default: '',
			description:
				'The database account is the name of the Azure Cosmos DB account you created under your subscription.',
		},
		{
			displayName: 'Master Key',
			name: 'masterKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description:
				'The authorization token for the request. For more information on generating a valid authorization token, \
				see <a href="https://learn.microsoft.com/en-us/rest/api/cosmos-db/access-control-on-cosmosdb-resources?redirectedfrom=MSDN">\
				Access Control on Cosmos DB Resources</a>',
		},
	];
}
