import type { Readable } from 'stream';

import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { BINARY_ENCODING, NodeOperationError } from 'n8n-workflow';

import { addAdditionalFields, apiRequest, getPropertyName } from './GenericFunctions';
import {
	botOperations,
	callbackOperations,
	chatOperations,
	fileOperations,
	messageOperations,
} from './TelegramDescription';

export class Telegram implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Telegram',
		name: 'telegram',
		icon: 'file:telegram.svg',
		group: ['output'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Sends data to Telegram',
		defaults: {
			name: 'Telegram',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'telegramApi',
				required: true,
			},
		],
		properties: [
			// ----------------------------------
			//         resources
			// ----------------------------------
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Bot',
						value: 'bot',
					},
					{
						name: 'Callback',
						value: 'callback',
					},
					{
						name: 'Chat',
						value: 'chat',
					},
					{
						name: 'File',
						value: 'file',
					},
					{
						name: 'Message',
						value: 'message',
					},
				],
				default: 'message',
			},
			// ----------------------------------
			//         operations
			// ----------------------------------
			...botOperations,
			...chatOperations,
			...callbackOperations,
			...fileOperations,
			...messageOperations,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		// For Post
		let body: IDataObject;
		// For Query string
		let qs: IDataObject;

		let requestMethod: string;
		let endpoint: string;

		const operation = this.getNodeParameter('operation', 0);
		const resource = this.getNodeParameter('resource', 0);
		const binaryData = this.getNodeParameter('binaryData', 0, false);

		for (let i = 0; i < items.length; i++) {
			try {
				// Reset all values
				requestMethod = 'POST';
				endpoint = '';
				body = {};
				qs = {};

				if (resource === 'bot') {
					if (operation === 'deleteCommands') {
						// // ----------------------------------
						// //         bot:deleteMyCommands
						// // ----------------------------------
						endpoint = 'deleteMyCommands';
					} else if (operation === 'getDescription') {
						// // ----------------------------------
						// //         bot:getMyDescription
						// // ----------------------------------
						endpoint = 'getMyDescription';
						body.language_code = this.getNodeParameter(
							'additionalFields.languageCode',
							0,
							'',
						) as string;
					} else if (operation === 'getCommands') {
						// // ----------------------------------
						// //         bot:getMyCommands
						// // ----------------------------------
						endpoint = 'getMyCommands';
						body.language_code = this.getNodeParameter(
							'additionalFields.languageCode',
							0,
							'',
						) as string;
					} else if (operation === 'getName') {
						// // ----------------------------------
						// //         bot:getMyName
						// // ----------------------------------
						endpoint = 'getMyName';
						body.language_code = this.getNodeParameter(
							'additionalFields.languageCode',
							0,
							'',
						) as string;
					} else if (operation === 'getShortDescription') {
						// // ----------------------------------
						// //         bot:getMyShortDescription
						// // ----------------------------------
						endpoint = 'getMyShortDescription';
						body.language_code = this.getNodeParameter(
							'additionalFields.languageCode',
							0,
							'',
						) as string;
					} else if (operation === 'getUpdates') {
						// // ----------------------------------
						// //         bot:getMyName
						// // ----------------------------------
						endpoint = 'getUpdates';
						body.language_code = this.getNodeParameter(
							'additionalFields.languageCode',
							0,
							'',
						) as string;
					} else if (operation === 'setCommands') {
						// // ----------------------------------
						// //         bot:setMyCommands
						// // ----------------------------------
						endpoint = 'setMyCommands';
						body.commands = JSON.parse(this.getNodeParameter('newCommands', i) as string);
						body.language_code = this.getNodeParameter(
							'additionalFields.languageCode',
							0,
							'',
						) as string;
					} else if (operation === 'setDescription') {
						// // ----------------------------------
						// //         bot:setMyDescription
						// // ----------------------------------
						endpoint = 'setMyDescription';
						body.description = this.getNodeParameter('newBotDescription', i) as string;
						body.language_code = this.getNodeParameter(
							'additionalFields.languageCode',
							0,
							'',
						) as string;
					} else if (operation === 'setName') {
						// // ----------------------------------
						// //         bot:setMyName
						// // ----------------------------------
						endpoint = 'setMyName';
						body.name = this.getNodeParameter('newBotName', i) as string;
						body.language_code = this.getNodeParameter(
							'additionalFields.languageCode',
							0,
							'',
						) as string;
					} else if (operation === 'setShortDescription') {
						// // ----------------------------------
						// //         bot:setMyShortDescription
						// // ----------------------------------
						endpoint = 'setMyShortDescription';
						body.short_description = this.getNodeParameter('newBotShortDescription', i) as string;
						body.language_code = this.getNodeParameter(
							'additionalFields.languageCode',
							0,
							'',
						) as string;
					}
				} else if (resource === 'callback') {
					if (operation === 'answerQuery') {
						// ----------------------------------
						//         callback:answerQuery
						// ----------------------------------

						endpoint = 'answerCallbackQuery';

						body.callback_query_id = this.getNodeParameter('queryId', i) as string;

						// Add additional fields
						const additionalFields = this.getNodeParameter('additionalFields', i);
						Object.assign(body, additionalFields);
					} else if (operation === 'answerInlineQuery') {
						// -----------------------------------------------
						//         callback:answerInlineQuery
						// -----------------------------------------------

						endpoint = 'answerInlineQuery';

						body.inline_query_id = this.getNodeParameter('queryId', i) as string;
						body.results = this.getNodeParameter('results', i) as string;

						// Add additional fields
						const additionalFields = this.getNodeParameter('additionalFields', i);
						Object.assign(body, additionalFields);
					}
				} else if (resource === 'chat') {
					if (operation === 'get') {
						// ----------------------------------
						//         chat:get
						// ----------------------------------

						endpoint = 'getChat';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
					} else if (operation === 'administrators') {
						// ----------------------------------
						//         chat:administrators
						// ----------------------------------

						endpoint = 'getChatAdministrators';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
					} else if (operation === 'leave') {
						// ----------------------------------
						//         chat:leave
						// ----------------------------------

						endpoint = 'leaveChat';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
					} else if (operation === 'member') {
						// ----------------------------------
						//         chat:member
						// ----------------------------------

						endpoint = 'getChatMember';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.user_id = this.getNodeParameter('userId', i) as string;
					} else if (operation === 'memberCount') {
						// ----------------------------------
						//         chat:memberCount
						// ----------------------------------

						endpoint = 'getChatMemberCount';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
					} else if (operation === 'setDescription') {
						// ----------------------------------
						//         chat:setDescription
						// ----------------------------------

						endpoint = 'setChatDescription';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.description = this.getNodeParameter('description', i) as string;
					} else if (operation === 'setTitle') {
						// ----------------------------------
						//         chat:setTitle
						// ----------------------------------

						endpoint = 'setChatTitle';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.title = this.getNodeParameter('title', i) as string;
					}
				} else if (resource === 'file') {
					if (operation === 'get') {
						// ----------------------------------
						//         file:get
						// ----------------------------------

						endpoint = 'getFile';

						body.file_id = this.getNodeParameter('fileId', i) as string;
					}
				} else if (resource === 'message') {
					if (operation === 'editMessageText') {
						// ----------------------------------
						//         message:editMessageText
						// ----------------------------------

						endpoint = 'editMessageText';

						const messageType = this.getNodeParameter('messageType', i) as string;

						if (messageType === 'inlineMessage') {
							body.inline_message_id = this.getNodeParameter('inlineMessageId', i) as string;
						} else {
							body.chat_id = this.getNodeParameter('chatId', i) as string;
							body.message_id = this.getNodeParameter('messageId', i) as string;
						}

						body.text = this.getNodeParameter('text', i) as string;

						// Add additional fields and replyMarkup
						addAdditionalFields.call(this, body, i);
					} else if (operation === 'deleteMessage') {
						// ----------------------------------
						//       message:deleteMessage
						// ----------------------------------

						endpoint = 'deleteMessage';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.message_id = this.getNodeParameter('messageId', i) as string;
					} else if (operation === 'pinChatMessage') {
						// ----------------------------------
						//        message:pinChatMessage
						// ----------------------------------

						endpoint = 'pinChatMessage';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.message_id = this.getNodeParameter('messageId', i) as string;

						const { disable_notification } = this.getNodeParameter('additionalFields', i);
						if (disable_notification) {
							body.disable_notification = true;
						}
					} else if (operation === 'unpinChatMessage') {
						// ----------------------------------
						//        message:unpinChatMessage
						// ----------------------------------

						endpoint = 'unpinChatMessage';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.message_id = this.getNodeParameter('messageId', i) as string;
					} else if (operation === 'sendAnimation') {
						// ----------------------------------
						//         message:sendAnimation
						// ----------------------------------

						endpoint = 'sendAnimation';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.animation = this.getNodeParameter('file', i, '') as string;

						// Add additional fields and replyMarkup
						addAdditionalFields.call(this, body, i);
					} else if (operation === 'sendAudio') {
						// ----------------------------------
						//         message:sendAudio
						// ----------------------------------

						endpoint = 'sendAudio';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.audio = this.getNodeParameter('file', i, '') as string;

						// Add additional fields and replyMarkup
						addAdditionalFields.call(this, body, i);
					} else if (operation === 'sendChatAction') {
						// ----------------------------------
						//         message:sendChatAction
						// ----------------------------------

						endpoint = 'sendChatAction';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.action = this.getNodeParameter('action', i) as string;
					} else if (operation === 'sendDocument') {
						// ----------------------------------
						//         message:sendDocument
						// ----------------------------------

						endpoint = 'sendDocument';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.document = this.getNodeParameter('file', i, '') as string;

						// Add additional fields and replyMarkup
						addAdditionalFields.call(this, body, i);
					} else if (operation === 'sendLocation') {
						// ----------------------------------
						//         message:sendLocation
						// ----------------------------------

						endpoint = 'sendLocation';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.latitude = this.getNodeParameter('latitude', i) as string;
						body.longitude = this.getNodeParameter('longitude', i) as string;

						// Add additional fields and replyMarkup
						addAdditionalFields.call(this, body, i);
					} else if (operation === 'sendMessage') {
						// ----------------------------------
						//         message:sendMessage
						// ----------------------------------

						endpoint = 'sendMessage';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.text = this.getNodeParameter('text', i) as string;

						// Add additional fields and replyMarkup
						addAdditionalFields.call(this, body, i);
					} else if (operation === 'sendMediaGroup') {
						// ----------------------------------
						//         message:sendMediaGroup
						// ----------------------------------

						endpoint = 'sendMediaGroup';

						body.chat_id = this.getNodeParameter('chatId', i) as string;

						const additionalFields = this.getNodeParameter('additionalFields', i);
						Object.assign(body, additionalFields);

						const mediaItems = this.getNodeParameter('media', i) as IDataObject;
						body.media = [];
						for (const mediaItem of mediaItems.media as IDataObject[]) {
							if (mediaItem.additionalFields !== undefined) {
								Object.assign(mediaItem, mediaItem.additionalFields);
								delete mediaItem.additionalFields;
							}
							(body.media as IDataObject[]).push(mediaItem);
						}
					} else if (operation === 'sendPhoto') {
						// ----------------------------------
						//         message:sendPhoto
						// ----------------------------------

						endpoint = 'sendPhoto';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.photo = this.getNodeParameter('file', i, '') as string;

						// Add additional fields and replyMarkup
						addAdditionalFields.call(this, body, i);
					} else if (operation === 'sendSticker') {
						// ----------------------------------
						//         message:sendSticker
						// ----------------------------------

						endpoint = 'sendSticker';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.sticker = this.getNodeParameter('file', i, '') as string;

						// Add additional fields and replyMarkup
						addAdditionalFields.call(this, body, i);
					} else if (operation === 'sendVideo') {
						// ----------------------------------
						//         message:sendVideo
						// ----------------------------------

						endpoint = 'sendVideo';

						body.chat_id = this.getNodeParameter('chatId', i) as string;
						body.video = this.getNodeParameter('file', i, '') as string;

						// Add additional fields and replyMarkup
						addAdditionalFields.call(this, body, i);
					}
				} else {
					throw new NodeOperationError(this.getNode(), `The resource "${resource}" is not known!`, {
						itemIndex: i,
					});
				}

				let responseData;
				if (binaryData) {
					const binaryPropertyName = this.getNodeParameter('binaryPropertyName', 0);
					const itemBinaryData = items[i].binary![binaryPropertyName];
					const propertyName = getPropertyName(operation);
					const fileName = this.getNodeParameter('additionalFields.fileName', 0, '') as string;

					const filename = fileName || itemBinaryData.fileName?.toString();

					if (!fileName && !itemBinaryData.fileName) {
						throw new NodeOperationError(
							this.getNode(),
							`File name is needed to ${operation}. Make sure the property that holds the binary data
						has the file name property set or set it manually in the node using the File Name parameter under
						Additional Fields.`,
						);
					}

					body.disable_notification = body.disable_notification?.toString() || 'false';

					let uploadData: Buffer | Readable;
					if (itemBinaryData.id) {
						uploadData = this.helpers.getBinaryStream(itemBinaryData.id);
					} else {
						uploadData = Buffer.from(itemBinaryData.data, BINARY_ENCODING);
					}

					const formData = {
						...body,
						[propertyName]: {
							value: uploadData,
							options: {
								filename,
								contentType: itemBinaryData.mimeType,
							},
						},
					};

					responseData = await apiRequest.call(this, requestMethod, endpoint, {}, qs, { formData });
				} else {
					responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);
				}

				if (resource === 'file' && operation === 'get') {
					if (this.getNodeParameter('download', i, false)) {
						const filePath = responseData.result.file_path;

						const credentials = await this.getCredentials('telegramApi');
						const file = await apiRequest.call(
							this,
							'GET',
							'',
							{},
							{},
							{
								json: false,
								encoding: null,
								uri: `https://api.telegram.org/file/bot${credentials.accessToken}/${filePath}`,
								resolveWithFullResponse: true,
								useStream: true,
							},
						);

						const fileName = filePath.split('/').pop();

						const data = await this.helpers.prepareBinaryData(
							file.body as Buffer,
							fileName as string,
						);

						returnData.push({
							json: responseData,
							binary: { data },
							pairedItem: { item: i },
						});
						continue;
					}
				} else if (resource === 'chat' && operation === 'administrators') {
					const executionData = this.helpers.constructExecutionMetaData(
						this.helpers.returnJsonArray(responseData.result as IDataObject[]),
						{ itemData: { item: i } },
					);
					returnData.push(...executionData);
					continue;
				}

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

		return [returnData];
	}
}
