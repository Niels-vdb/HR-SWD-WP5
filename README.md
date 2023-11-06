# n8n-nodes-redacted

This node module for n8n consist of two nodes.
A node for Azure Cosmos DB.
An extension on the original Telegram node.

Both nodes have a own directory in the nodes directory. They both have some basic files
- Node JSON
- Node function
- Node description
	- Consists of the operations and their input fields
- README.md
	- Specific readme for the node
- Node svg
- Functions to make the node work properly

The test directory has json files with n8n workflows in them.
These can be loaded in to test the nodes.

- Azure_Cosmos_test
	- A node that goes through all Cosmos options available in the node to test if they still work
- Telegram_Bot_Description
	- A workflow that checks the current information of a telegram bot and changes them to check if all functionalitiy still works
- TeleGram_Member_Count
	- A workflow that has two components
		- Bot functionality that responds to messages send in a chat
		- A Cosmos link that checks if the group already exists in the database
			- If it exists it checks if the membercount has changed, if so the owner gets a message and the database is updated.
			- If it does not exist it is created in the database and the bot owner gets a message.

## Prerequisites

You need the following installed on your development machine:

* [git](https://git-scm.com/downloads)
* Node.js and npm. Minimum version Node 16. You can find instructions on how to install both using nvm (Node Version Manager) for Linux, Mac, and WSL [here](https://github.com/nvm-sh/nvm). For Windows users, refer to Microsoft's guide to [Install NodeJS on Windows](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows).
* Install n8n with:
	```
	npm install n8n -g
	```
* Recommended: follow n8n's guide to [set up your development environment](https://docs.n8n.io/integrations/creating-nodes/build/node-development-environment/).


## Using this starter

These are the basic steps for working with the starter. For detailed guidance on creating and publishing nodes, refer to the [documentation](https://docs.n8n.io/integrations/creating-nodes/).

1. [Generate a new repository](https://github.com/n8n-io/n8n-nodes-starter/generate) from this template repository.
2. Clone your new repo:
    ```
    git clone https://github.com/<your organization>/<your-repo-name>.git
    ```
3. Run `npm i` to install dependencies.
4. Open the project in your editor.
5. Browse the examples in `/nodes` and `/credentials`. Modify the examples, or replace them with your own nodes.
6. Update the `package.json` to match your details.
7. Run `npm run lint` to check for errors or `npm run lintfix` to automatically fix errors when possible.
8. Test your node locally. Refer to [Run your node locally](https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally/) for guidance.
9. Replace this README with documentation for your node. Use the [README_TEMPLATE](README_TEMPLATE.md) to get started.
10. Update the LICENSE file to use your details.
11. [Publish](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) your package to npm.

## More information

Refer to our [documentation on creating nodes](https://docs.n8n.io/integrations/creating-nodes/) for detailed information on building your own nodes.

## License

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
