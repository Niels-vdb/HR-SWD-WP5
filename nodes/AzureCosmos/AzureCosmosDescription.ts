import { INodeProperties } from 'n8n-workflow';

export const databaseOperations: INodeProperties[] = [
	// ---------------------------------------------
	//  Database operator
	// ---------------------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['database'],
			},
		},
		options: [
			{
				name: 'Get Database',
				value: 'getDatabase',
				action: 'Get a specific database',
				description: 'Get a specific database under your Cosmos account',
			},
			{
				name: 'Get List',
				value: 'getDatabaseList',
				action: 'Get list of databases',
				description: 'Get a list of all the databases under your Cosmos account',
			},
			{
				name: 'Create Database',
				value: 'createDatabase',
				action: 'Create a new database',
				description: 'Create a new database under your Cosmos account',
			},
			{
				name: 'Delete Database',
				value: 'deleteDatabase',
				action: 'Delete a database',
				description: 'Delete a database under your Cosmos account',
			},
		],
		default: 'getDatabase',
	},
	// ---------------------------------------------
	//  Database name input
	// ---------------------------------------------
	{
		displayName: 'Database Name',
		name: 'databaseName',
		type: 'string',
		required: true,
		default: '',
		description:
			'The user-generated unique name for the database. It is a string that must not be more than 255 characters.',
		displayOptions: {
			show: {
				resource: ['database'],
				operation: ['getDatabase', 'createDatabase', 'deleteDatabase'],
			},
		},
	},
];

export const collectionOperations: INodeProperties[] = [
	// ---------------------------------------------
	//  Collection operator
	// ---------------------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['collection'],
			},
		},
		options: [
			{
				name: 'Get Collection',
				value: 'getCollection',
				action: 'Get a specific collection',
				description: 'Get a specific collection in a database under your Cosmos account name',
			},
			{
				name: 'Get List',
				value: 'getCollectionList',
				action: 'Get list of collections',
				description:
					'Get a list of all the collections in a database under your Cosmos account name',
			},
			{
				name: 'Create Collection',
				value: 'createCollection',
				action: 'Create a new collection',
				description: 'Create a new collection in a database under your Cosmos account name',
			},
			{
				name: 'Delete Collection',
				value: 'deleteCollection',
				action: 'Delete a collection',
				description: 'Delete a collection in a database under your Cosmos account name',
			},
		],
		default: 'getCollection',
	},
	// ---------------------------------------------
	//  Database name input
	// ---------------------------------------------
	{
		displayName: 'Database Name',
		name: 'databaseName',
		type: 'string',
		required: true,
		default: '',
		description: 'This value is the user generated name/ID of the database',
		displayOptions: {
			show: {
				resource: ['collection'],
				operation: ['getCollection', 'getCollectionList', 'createCollection', 'deleteCollection'],
			},
		},
	},
	// ---------------------------------------------
	//  Collection name input
	// ---------------------------------------------
	{
		displayName: 'Collection Name',
		name: 'collectionName',
		type: 'string',
		required: true,
		default: '',
		description:
			'The user-generated unique name for the collection. No two collections can have the same IDs. It is a string that must not be more than 255 characters.',
		displayOptions: {
			show: {
				resource: ['collection'],
				operation: ['getCollection', 'createCollection', 'deleteCollection'],
			},
		},
	},
];

export const documentOperations: INodeProperties[] = [
	// ---------------------------------------------
	// Operations
	// ---------------------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['document'],
			},
		},
		options: [
			{
				name: 'Create Document',
				value: 'createDocument',
				action: 'Create a new document',
				description: 'Create a new document in a collection under your Cosmos account',
			},
			{
				name: 'Delete Document',
				value: 'deleteDocument',
				action: 'Delete a document',
				description: 'Delete a document in a collection under your Cosmos account',
			},
			{
				name: 'Get Document',
				value: 'getDocument',
				action: 'Get a specific document',
				description: 'Get a specific document in a collection under your Cosmos account',
			},
			{
				name: 'Get List',
				value: 'getDocumentList',
				action: 'Get list of documents',
				description: 'Get a list of all the documents in a collection under your Cosmos account',
			},
			{
				name: 'Patch Document',
				value: 'patchDocument',
				action: 'Patch a document',
				description: 'Patch a document in a collection under your Cosmos account',
			},
			{
				name: 'Replace Document',
				value: 'replaceDocument',
				action: 'Replace a document',
				description: 'Replace a document in a collection under your Cosmos account',
			},
		],
		default: 'getDocument',
	},
	// ---------------------------------------------
	//  Database name input
	// ---------------------------------------------
	{
		displayName: 'Database Name',
		name: 'databaseName',
		type: 'string',
		required: true,
		default: '',
		description: 'This value is the user generated name/ID of the database',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: [
					'getDocument',
					'getDocumentList',
					'createDocument',
					'replaceDocument',
					'deleteDocument',
					'patchDocument',
				],
			},
		},
	},
	// ---------------------------------------------
	//  Collection name input
	// ---------------------------------------------
	{
		displayName: 'Collection Name',
		name: 'collectionName',
		type: 'string',
		required: true,
		default: '',
		description: 'The value is the name of the collection that contains the document',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: [
					'getDocument',
					'getDocumentList',
					'createDocument',
					'replaceDocument',
					'deleteDocument',
					'patchDocument',
				],
			},
		},
	},
	// ---------------------------------------------
	//  Document name input
	// ---------------------------------------------
	{
		displayName: 'Document Name',
		name: 'documentName',
		type: 'string',
		required: true,
		default: '',
		description: 'It is the unique ID that identifies the document',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['getDocument', 'replaceDocument', 'deleteDocument', 'patchDocument'],
			},
		},
	},
	// ---------------------------------------------
	//  JSON input: createDocument, replaceDocument
	// ---------------------------------------------
	{
		displayName: 'Content (JSON)',
		name: 'documentContent',
		type: 'json',
		default: '{"id": "documentName", "custom": "own data"}',
		description: 'Enter document data in JSON format {"key": "value",}',
		typeOptions: {
			rows: 4,
		},
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument', 'replaceDocument'],
			},
		},
	},
	// ---------------------------------------------
	//  Operation Type: patchDocument
	// ---------------------------------------------
	{
		displayName: 'Patch Operation',
		name: 'patchOperation',
		type: 'options',
		description: 'Extra information <a href="https://learn.microsoft.com/en-us/azure/cosmos-db/partial-document-update#supported-operations">here</a>. Only works with single operations and single document patch.',
		options: [
			{
				name: 'Add',
				value: 'add',
			},
			{
				name: 'Increment',
				value: 'incr',
				description: 'Increments an integer by the specified value',
			},
			{
				name: 'Move',
				value: 'move',
				description:
					'Removes the value at a specified location and adds it to the target location',
			},
			{
				name: 'Remove',
				value: 'remove',
			},
			{
				name: 'Replace',
				value: 'replace',
			},
			{
				name: 'Set',
				value: 'set',
			},
		],
		default: 'add',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['patchDocument'],
			},
		},
	},
	// ---------------------------------------------
	//  Operation Path: patchDocument
	// ---------------------------------------------
	{
		displayName: 'Path',
		name: 'operationPath',
		type: 'string',
		required: true,
		default: '/',
		description: 'Path refers to a location within the JSON document',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['patchDocument'],
			},
		},
	},
	{
		displayName: 'Value',
		name: 'operationValue',
		type: 'string',
		required: true,
		default: '',
		description: 'The value that needs to be patched',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['patchDocument'],
			},
			hide: {
				patchOperation: ['move', 'remove']
			}
		},
	},
	{
		displayName: 'From',
		name: 'operationFrom',
		type: 'string',
		required: true,
		default: '/',
		description: 'The path to the value you want to move',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['patchDocument'],
				patchOperation: ['move']
			},
		},
	},
];

export const queryOperations: INodeProperties[] = [
	// ---------------------------------------------
	// Operations
	// ---------------------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['query'],
			},
		},
		options: [
			{
				name: 'Create Query',
				value: 'createQuery',
				action: 'Create a new query',
				description:
					'Create a new query to search for information in a collection in your Cosmos account',
			},
		],
		default: 'createQuery',
	},
	// ---------------------------------------------
	//  Database name input
	// ---------------------------------------------
	{
		displayName: 'Database Name',
		name: 'databaseName',
		type: 'string',
		required: true,
		default: '',
		description: 'This value is the user generated name/ID of the database',
		displayOptions: {
			show: {
				resource: ['query'],
			},
		},
	},
	// ---------------------------------------------
	//  Collection name input
	// ---------------------------------------------
	{
		displayName: 'Collection Name',
		name: 'collectionName',
		type: 'string',
		required: true,
		default: '',
		description: 'The value is the name of the collection',
		displayOptions: {
			show: {
				resource: ['query'],
			},
		},
	},
	// ------------------------------------------
	//  Query input
	// ---------------------------------------------
	{
		displayName: 'Query',
		name: 'queryInput',
		type: 'string',
		required: true,
		default: '',
		typeOptions: {
			rows: 4,
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-description-miscased-id
		description:
			'Contains the SQL query text. For grammar, see <a href="https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/query/">SQL Grammar</a>.\
			Example: SELECT * FROM Families f WHERE f.ID = @id AND f.Address.City = @city',
		displayOptions: {
			show: {
				resource: ['query'],
			},
		},
	},
	// ------------------------------------------
	//  Paramater input
	// ------------------------------------------
	{
		displayName: 'Query Parameters',
		name: 'queryParameters',
		type: 'string',
		required: true,
		default: '{"name": "@", "value": ""},',
		typeOptions: {
			rows: 4,
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-description-miscased-id
		description:
			'An object of parameter values for the query. Example: {"name": "@id", "value": "AndersenFamily"}, {"name": "@city", "value": "Seattle"},}.',
		displayOptions: {
			show: {
				resource: ['query'],
			},
		},
	},
];
