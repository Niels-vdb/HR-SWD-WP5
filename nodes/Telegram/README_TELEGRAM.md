# n8n-nodes-redacted

This is an n8n community node. It lets you use Telegram in your n8n workflows.
This is a extension on the original Telegram node [This link redirects to the original README.md](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/).


Telegram is a message application which lets you talk to people.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

We added the following opperations

- Bot
 - Set/Get bot name
	- This lets you change the name of your Telegram bot
 - Set/Get bot description
	- This lets you change the description of your Telegram bot
 - Set/Get bot short description
	- This lets you change the short description of your Telegram bot
 - Set/Get/Delete bot commands
	- This is for the description of your commands in Telegram.
	- When you use '/' in a chat you get a box with bot options. IT DOES NOT DO THE FUNCTIONALITY
	- This lets you change the command decsriptions of your Telegram bot
	- It also lets you delete your command descriptions

- Chat
	- Get chat number count
		- This operation lets you see how many users an active chat has.
		- You can only use this operation when you have the chat id. The chat id can be seen by executing the Telegram trigger and searching for the chat id.


## Credentials

Users need to authenticate for using this node.
This is done by filling in your bot credentials.

## Compatibility

This node is tested with n8n version 1.6.1 to 1.11.1

## Usage

You can use this link to get started with n8n if you are not yet familiar.
[Try it out](https://docs.n8n.io/try-it-out/)

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Telegram Bot Api](https://core.telegram.org/bots/api)

## Version history
Will be filled out on actual release
Version 1.0 was released on ....


