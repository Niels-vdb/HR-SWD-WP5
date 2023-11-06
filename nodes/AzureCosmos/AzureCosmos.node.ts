import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestOptions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeApiError,
} from 'n8n-workflow';

import {
	collectionOperations,
	databaseOperations,
	documentOperations,
	queryOperations,
} from './AzureCosmosDescription';

// Import and initialize the header class
import { AzureCosmosHeader } from './Classes/AzureCosmosHeader';
const header = new AzureCosmosHeader();
export class AzureCosmos implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details
		displayName: 'Azure Cosmos',
		name: 'AzureCosmos',
		icon: 'file:azurecosmos.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
		description: 'Read and write to Azure Cosmos API',
		defaults: {
			name: 'Azure Cosmos',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'azureCosmosApi',
				required: true,
			},
		],

		properties: [
			// Resources
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Database',
						value: 'database',
					},
					{
						name: 'Collection',
						value: 'collection',
					},
					{
						name: 'Document',
						value: 'document',
					},
					{
						name: 'Query',
						value: 'query',
					},
				],
				default: 'database',
			},
			// Operations imported from description file
			...databaseOperations,
			...collectionOperations,
			...documentOperations,
			...queryOperations,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		let responseData: object;
		const returnData: IDataObject[] = [];

		// Get resource and operation chosen in node
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		// Get credentials the user provided for this node
		const credentials = (await this.getCredentials('azureCosmosApi')) as IDataObject;

		// Inititialize options with the base url
		let options: IHttpRequestOptions = {
			url: `https://${credentials.accountName}.documents.azure.com:443/dbs`,
			method: 'GET',
		};

		// Loops through provided data and creates url, body and method
		// accordingly
		for (let i = 0; i < items.length; i++) {
			try {
				if (resource === 'database') {
					if (operation === 'getDatabase') {
						// // ----------------------------------
						// //         database:getDatabase
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						options.url += `/${databaseName}`;
					} else if (operation === 'getDatabaseList') {
						// // ----------------------------------
						// //         database:getDatabaseList
						// // ----------------------------------
					} else if (operation === 'createDatabase') {
						// // ----------------------------------
						// //         database:createDatabase
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						options.body = JSON.parse(`{ "id": "${databaseName}" }`);
						options.method = 'POST';
					} else if (operation === 'deleteDatabase') {
						// // ----------------------------------
						// //         database:deleteDatabase
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						options.url += `/${databaseName}`;
						options.method = 'DELETE';
					}
				} else if (resource === 'collection') {
					if (operation === 'getCollection') {
						// // ----------------------------------
						// //         collection:getCollection
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						const collectionName = this.getNodeParameter('collectionName', i) as string;
						options.url += `/${databaseName}/colls/${collectionName}`;
					} else if (operation === 'getCollectionList') {
						// // ----------------------------------
						// //         collection:getCollectionList
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						options.url += `/${databaseName}/colls`;
					} else if (operation === 'createCollection') {
						// // ----------------------------------
						// //         collection:createCollection
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						const collectionName = this.getNodeParameter('collectionName', i) as string;
						options.url += `/${databaseName}/colls`;
						options.body = JSON.parse(`{ "id": "${collectionName}" }`);
						options.method = 'POST';
					} else if (operation === 'deleteCollection') {
						// // ----------------------------------
						// //         collection:deleteCollection
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						const collectionName = this.getNodeParameter('collectionName', i) as string;
						options.url += `/${databaseName}/colls/${collectionName}`;
						options.method = 'DELETE';
					}
				} else if (resource === 'document') {
					if (operation === 'getDocument') {
						// // ----------------------------------
						// //         document:getDocument
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						const collectionName = this.getNodeParameter('collectionName', i) as string;
						const documentName = this.getNodeParameter('documentName', i) as string;
						options.url += `/${databaseName}/colls/${collectionName}/docs/${documentName}`;
					} else if (operation === 'getDocumentList') {
						// // ----------------------------------
						// //         document:getDocumentList
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						const collectionName = this.getNodeParameter('collectionName', i) as string;
						options.url += `/${databaseName}/colls/${collectionName}/docs`;
					} else if (operation === 'createDocument') {
						// // ----------------------------------
						// //         document:createDocument
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						const collectionName = this.getNodeParameter('collectionName', i) as string;
						const documentContent = this.getNodeParameter('documentContent', i) as string;
						options.url += `/${databaseName}/colls/${collectionName}/docs`;
						options.body = JSON.parse(documentContent);
						options.method = 'POST';
					} else if (operation === 'deleteDocument') {
						// // ----------------------------------
						// //         collection:deleteDocument
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						const collectionName = this.getNodeParameter('collectionName', i) as string;
						const documentName = this.getNodeParameter('documentName', i) as string;
						options.url += `/${databaseName}/colls/${collectionName}/docs/${documentName}`;
						options.method = 'DELETE';
					} else if (operation === 'patchDocument') {
						// // ----------------------------------
						// //         collection:patchDocument
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						const collectionName = this.getNodeParameter('collectionName', i) as string;
						const documentName = this.getNodeParameter('documentName', i) as string;
						const patchOperation = this.getNodeParameter('patchOperation', i) as string;
						const operationPath = this.getNodeParameter('operationPath', i) as string;
						// Checks what the operation is and provides a suitable JSON object
						if (patchOperation === 'move') {
							const operationFrom = this.getNodeParameter('operationFrom', i) as string;
							options.body = JSON.parse(`{
									"operations": [
										{
											"op": "${patchOperation}",
											"from": "${operationFrom}",
											"path": "${operationPath}"
										}
									]
								}`);
						} else if(patchOperation === 'remove') {
							options.body = JSON.parse(`{
								"operations": [
									{
										"op": "${patchOperation}",
										"path": "${operationPath}"
									}
								]
							}`);
						} else {
							const operationValue = this.getNodeParameter('operationValue', i) as string;
							options.body = JSON.parse(`{
									"operations": [
										{
											"op": "${patchOperation}",
											"path": "${operationPath}",
											"value": ${operationValue}
										}
									]
								}`);
						}
						options.url += `/${databaseName}/colls/${collectionName}/docs/${documentName}`;
						options.method = 'PATCH';
					} else if (operation === 'replaceDocument') {
						// // ----------------------------------
						// //         collection:replaceDocument
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						const collectionName = this.getNodeParameter('collectionName', i) as string;
						const documentName = this.getNodeParameter('documentName', i) as string;
						const documentContent = this.getNodeParameter('documentContent', i) as string;
						options.url += `/${databaseName}/colls/${collectionName}/docs/${documentName}`;
						options.body = JSON.parse(documentContent);
						options.method = 'PUT';
					}
				} else if (resource === 'query') {
					if (operation === 'createQuery') {
						// // ----------------------------------
						// //         query:queryDocuments
						// // ----------------------------------
						const databaseName = this.getNodeParameter('databaseName', i) as string;
						const collectionName = this.getNodeParameter('collectionName', i) as string;
						const query = this.getNodeParameter('queryInput', i) as string;
						const parameters = this.getNodeParameter('queryParameters', i) as string;
						options.url += `/${databaseName}/colls/${collectionName}/docs`;
						options.method = 'POST';
						options.body = JSON.parse(`{"query": "${query}", "parameters": [${parameters}]}`);
					}
				}

				// Sets the right header for the request
				if (options.method === 'POST' && operation === 'createQuery') {
					options.headers = header.queryHeader(
						options.url,
						`${credentials.masterKey}`,
						options.method,
					);
				} else {
					options.headers = header.generalHeader(
						options.url,
						`${credentials.masterKey}`,
						options.method,
					);
				}

				// Tries to send request and puts response in responseData
				try {
					responseData = await this.helpers.httpRequest(options);
				} catch (error) {
					throw new NodeApiError(this.getNode(), { error: error });
				}

				// Puts responseData in a IDataObject to be displayed by n8n
				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData as IDataObject[]),
					{ itemData: { item: i } },
				);

				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: {}, error: error.message });
					continue;
				}
				throw error;
			}
		}
		// // Map data to n8n data structure
		return [this.helpers.returnJsonArray(returnData)];
	}
}
