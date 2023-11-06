# n8n-nodes-redacted

This is an n8n community node. It lets you use Azure Cosmos DB in your n8n workflows.

Azure Cosmos DB is a node to help you create and manage databases under your Azure Cosmos account.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)
[Compatibility](#compatibility)  
[Usage](#usage)
[Shortcomings](#shortcomings)
[Resources](#resources)  
[Version history](#version-history) <!-- delete if not using this section -->

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Database

This operation lets you create and look up databases under your account name.
The possible operations are:

- Get list of databases
- Get one specific database
- Create a new database
  - Give database a unique name

### Collection

This operation lets you create and look up collections in a database under your account name.
The possible operations are:

- Get list of all collections in a databases
  - Provide database name in input field
- Get one specific collection in a database
  - Provide database name in input field
  - Provide collection name in input field
- Create a new database
  - Provide database name in input field
  - Provide collection name in input field
  - Give database a unique name

### Document

This operation lets you create and look up documents in a collection in a database under your account name.
The possible operations are:

- Get list of all documents in a collection in a databases
  - Provide database name in input field
  - Provide collection name in input field

- Get one specific document in a collection in a database
  - Provide database name in input field
  - Provide collection name in input field
  - Provide document name in input field

- Create a new document in a collection in a database
  - Provide database name in input field
  - Provide collection name in input field
  - Provide a json object with atleast the key "id" with a unique id in this collection.
		- Keys and values need double quotes around them. Example {"key": "value"} 

- Replace a document in a collection in a database
	- When using this operation the entire document will be replaced
  - Provide database name in input field
  - Provide collection name in input field
	- Provide document name in input field
	- Provide a json object with atleast the key "id" with a unique id in this collection.
		- Keys and values need double quotes around them. Example {"key": "value"} 

- Patch a document in a collection in a database 
- When using this operation, additional data will be added
	- Provide database name in input field
  - Provide collection name in input field
	- Provide document name in input field
	- Provide operation type in option field
	- Provide path in input field
		- The path for operations add, replace, remove, set and increment is the curent path in your document starting with a /
		- The path for operation move is the new path you want to put your value in
	- Provide from in input field (move only)
		- The path you want to extract the value from starting with a /
	- Provide value in input field
		- Strings must be "double quoted".
			- This is also true for strings in arrays and objects
		- Objects need {"...": }
		- Arrays need []

### Query

This operation lets you query a specific collection in your database
- Provide database name in input field
- Provide collection name in input field
- Provide a json object with atleast the key "id" with a unique id in this collection.
- Enter a valid query in the input field. You have to use parameters by using @parameter
- Parameters are provided in an object with double queted key value pairs. Every parameter has his own object separated by a comma. Example: {"key": "value"}, {"key": "value"},

## Credentials

> [!WARNING]
> There is no check if the credentials are right.

When entering your credentials be aware that it only needs your account name and not the whole url.
The correct key is the master key from your Azure Cosmos account.

## Compatibility

The node is tested and works on version 1.6.1 through 1.11.1

## Usage

You can use this link to get started with n8n if you are not yet familiar.
[Try it out](https://docs.n8n.io/try-it-out/)

### Testing

In the base directory there is a test directory with a json file that contains a n8n workflow using all the functionality for testing.
Errors messages are commented out but can be uncommented when testing for more detailed message.

- Path is tests/Azure_Cosmos_Test.json

## Shortcoming

With the release of version one there are some issues and shortcomings with the node. such as:

- No check when entering credentials

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Azure Cosmos documentation](https://learn.microsoft.com/en-us/azure/cosmos-db/)

## Version history
Will be filled out on actual release
Version 1.0 was released on ....
