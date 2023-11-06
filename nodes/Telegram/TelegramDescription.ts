import { INodeProperties } from 'n8n-workflow';

export const botOperations: INodeProperties[] = [
	// ----------------------------------
	//         operation
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['bot'],
			},
		},
		options: [
			{
				name: 'Delete Commands',
				value: 'deleteCommands',
				description:
					"Use this method to delete the list of the bot's commands for the given scope and user language",
				action: 'Delete commands',
			},
			{
				name: 'Get Commands',
				value: 'getCommands',
				description:
					"Use this method to get the current list of the bot's commands for the given scope and user language",
				action: 'Get commands',
			},
			{
				name: 'Get Description',
				value: 'getDescription',
				description:
					'Use this method to get the current bot description for the given user language',
				action: 'Get description',
			},
			{
				name: 'Get Name',
				value: 'getName',
				description: 'Use this method to get the current bot name for the given user language',
				action: 'Get name',
			},
			{
				name: 'Get Short Description',
				value: 'getShortDescription',
				description:
					'Use this method to get the current bot short description for the given user language',
				action: 'Get short description',
			},
			{
				name: 'Get Updates',
				value: 'getUpdates',
				description: 'Use this method to receive incoming updates using long polling',
				action: 'Get updates',
			},
			{
				name: 'Set Commands',
				value: 'setCommands',
				description:
					"Use this method to change the list of the bot's commands. This will delete all known commands.",
				action: 'Set commands',
			},
			{
				name: 'Set Description',
				value: 'setDescription',
				description:
					"Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty",
				action: 'Set description',
			},
			{
				name: 'Set Name',
				value: 'setName',
				description: "Use this method to change the bot's name",
				action: 'Set name',
			},
			{
				name: 'Set Short Description',
				value: 'setShortDescription',
				description:
					"Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot",
				action: 'Set short description',
			},
		],
		default: 'getName',
	},
	// ----------------------------------
	//         input fields
	// ----------------------------------
	// ----------------------------------
	//         bot:name
	// ----------------------------------
	{
		displayName: 'New Bot Name',
		name: 'newBotName',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['setName'],
				resource: ['bot'],
			},
		},
		required: true,
		description:
			'New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given bot.',
	},
	// ----------------------------------
	//         bot:description
	// ----------------------------------
	{
		displayName: 'New Bot Description',
		name: 'newBotDescription',
		type: 'string',
		default: '',
		typeOptions: {
			rows: 4,
		},
		required: true,
		displayOptions: {
			show: {
				operation: ['setDescription'],
				resource: ['bot'],
			},
		},
		description:
			'New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given bot.',
	},
	// ----------------------------------
	//         bot:shortDescription
	// ----------------------------------
	{
		displayName: 'New Bot Short Description',
		name: 'newBotShortDescription',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: ['setShortDescription'],
				resource: ['bot'],
			},
		},
		description:
			'New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the bot.',
	},
	// ----------------------------------
	//         bot:setCommands
	// ----------------------------------
	{
		displayName: 'New Commands',
		name: 'newCommands',
		type: 'string',
		default:
			'[{"command": "new command", "description": "description of new command"}, {"command": "new command", "description": "description of new command"}],',
		required: true,
		typeOptions: {
			rows: 6,
		},
		displayOptions: {
			show: {
				operation: ['setCommands'],
				resource: ['bot'],
			},
		},
		description: "Use this method to change the list of the bot's commands",
	},
	// ----------------------------------
	//         bot:additional langCode field
	// ----------------------------------
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['bot'],
				operation: [
					'deleteCommands',
					'getCommands',
					'getDescription',
					'getName',
					'getShortDescription',
					'setCommands',
					'setDescription',
					'setName',
					'setShortDescription',
				],
			},
		},
		options: [
			{
				displayName: 'Language Code',
				name: 'languageCode',
				type: 'string',
				default: '',
				description: 'A two-letter ISO 639-1 language code',
			},
		],
	},
];
export const chatOperations: INodeProperties[] = [
	// ----------------------------------
	//         operation
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['chat'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get up to date information about a chat',
				action: 'Get a chat',
			},
			{
				name: 'Get Administrators',
				value: 'administrators',
				description: 'Get the Administrators of a chat',
				action: 'Get all administrators in a chat',
			},
			{
				name: 'Get Chat Member Count',
				value: 'memberCount',
				description: 'Get Amount of users in a chat',
				action: 'Get count of users in a chat',
			},
			{
				name: 'Get Member',
				value: 'member',
				description: 'Get the member of a chat',
				action: 'Get a member in a chat',
			},
			{
				name: 'Leave',
				value: 'leave',
				description: 'Leave a group, supergroup or channel',
				action: 'Leave a chat',
			},
			{
				name: 'Set Description',
				value: 'setDescription',
				description: 'Set the description of a chat',
				action: 'Set description on a chat',
			},
			{
				name: 'Set Title',
				value: 'setTitle',
				description: 'Set the title of a chat',
				action: 'Set a title on a chat',
			},
		],
		default: 'get',
	},
	// ----------------------------------
	//         input fields
	// ----------------------------------
	// ----------------------------------
	//         chat
	// ----------------------------------

	// ----------------------------------
	//         chat:member
	// ----------------------------------
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['member'],
				resource: ['chat'],
			},
		},
		required: true,
		description: 'Unique identifier of the target user',
	},

	// ----------------------------------
	//         chat:setDescription
	// ----------------------------------
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['setDescription'],
				resource: ['chat'],
			},
		},
		required: true,
		description: 'New chat description, 0-255 characters',
	},

	// ----------------------------------
	//         chat:setTitle
	// ----------------------------------
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['setTitle'],
				resource: ['chat'],
			},
		},
		required: true,
		description: 'New chat title, 1-255 characters',
	},
];
export const callbackOperations: INodeProperties[] = [
	// ----------------------------------
	//         operation
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['callback'],
			},
		},
		options: [
			{
				name: 'Answer Query',
				value: 'answerQuery',
				description: 'Send answer to callback query sent from inline keyboard',
				action: 'Answer query a callback',
			},
			{
				name: 'Answer Inline Query',
				value: 'answerInlineQuery',
				description: 'Send answer to callback query sent from inline bot',
				action: 'Answer an inline query callback',
			},
		],
		default: 'answerQuery',
	},
	// ----------------------------------
	//         input fields
	// ----------------------------------
	// ----------------------------------
	//         callback:answerQuery
	// ----------------------------------
	{
		displayName: 'Query ID',
		name: 'queryId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['answerQuery'],
				resource: ['callback'],
			},
		},
		required: true,
		description: 'Unique identifier for the query to be answered',
	},

	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: ['answerQuery'],
				resource: ['callback'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Cache Time',
				name: 'cache_time',
				type: 'number',
				typeOptions: {
					minValue: 0,
				},
				default: 0,
				description:
					'The maximum amount of time in seconds that the result of the callback query may be cached client-side',
			},
			{
				displayName: 'Show Alert',
				name: 'show_alert',
				type: 'boolean',
				default: false,
				description:
					'Whether an alert will be shown by the client instead of a notification at the top of the chat screen',
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description:
					'Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters.',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: "URL that will be opened by the user's client",
			},
		],
	},

	// -----------------------------------------------
	//         callback:answerInlineQuery
	// -----------------------------------------------
	{
		displayName: 'Query ID',
		name: 'queryId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['answerInlineQuery'],
				resource: ['callback'],
			},
		},
		required: true,
		description: 'Unique identifier for the answered query',
	},
	{
		displayName: 'Results',
		name: 'results',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['answerInlineQuery'],
				resource: ['callback'],
			},
		},
		required: true,
		description: 'A JSON-serialized array of results for the inline query',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: ['answerInlineQuery'],
				resource: ['callback'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Cache Time',
				name: 'cache_time',
				type: 'number',
				typeOptions: {
					minValue: 0,
				},
				default: 0,
				description:
					'The maximum amount of time in seconds that the result of the callback query may be cached client-side',
			},
			{
				displayName: 'Show Alert',
				name: 'show_alert',
				type: 'boolean',
				default: false,
				description:
					'Whether an alert will be shown by the client instead of a notification at the top of the chat screen',
			},
			{
				displayName: 'Text',
				name: 'text',
				type: 'string',
				default: '',
				description:
					'Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters.',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: "URL that will be opened by the user's client",
			},
		],
	},
];
export const fileOperations: INodeProperties[] = [
	// ----------------------------------
	//         operation
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['file'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a file',
				action: 'Get a file',
			},
		],
		default: 'get',
	},
	// ----------------------------------
	//         input fields
	// ----------------------------------
	// ----------------------------------
	//         file:get/download
	// ----------------------------------

	{
		displayName: 'File ID',
		name: 'fileId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['file'],
			},
		},
		required: true,
		description: 'The ID of the file',
	},
	{
		displayName: 'Download',
		name: 'download',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['file'],
			},
		},
		default: true,
		description: 'Whether to download the file',
	},
];
export const messageOperations: INodeProperties[] = [
	// ----------------------------------
	//         operation
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['message'],
			},
		},
		options: [
			{
				name: 'Delete Chat Message',
				value: 'deleteMessage',
				description: 'Delete a chat message',
				action: 'Delete a chat message',
			},
			{
				name: 'Edit Message Text',
				value: 'editMessageText',
				description: 'Edit a text message',
				action: 'Edit a test message',
			},
			{
				name: 'Pin Chat Message',
				value: 'pinChatMessage',
				description: 'Pin a chat message',
				action: 'Pin a chat message',
			},
			{
				name: 'Send Animation',
				value: 'sendAnimation',
				description: 'Send an animated file',
				action: 'Send an animated file',
			},
			{
				name: 'Send Audio',
				value: 'sendAudio',
				description: 'Send a audio file',
				action: 'Send an audio file',
			},
			{
				name: 'Send Chat Action',
				value: 'sendChatAction',
				description: 'Send a chat action',
				action: 'Send a chat action',
			},
			{
				name: 'Send Document',
				value: 'sendDocument',
				description: 'Send a document',
				action: 'Send a document',
			},
			{
				name: 'Send Location',
				value: 'sendLocation',
				description: 'Send a location',
				action: 'Send a location',
			},
			{
				name: 'Send Media Group',
				value: 'sendMediaGroup',
				description: 'Send group of photos or videos to album',
				action: 'Send a media group message',
			},
			{
				name: 'Send Message',
				value: 'sendMessage',
				description: 'Send a text message',
				action: 'Send a text message',
			},
			{
				name: 'Send Photo',
				value: 'sendPhoto',
				description: 'Send a photo',
				action: 'Send a photo message',
			},
			{
				name: 'Send Sticker',
				value: 'sendSticker',
				description: 'Send a sticker',
				action: 'Send a sticker',
			},
			{
				name: 'Send Video',
				value: 'sendVideo',
				description: 'Send a video',
				action: 'Send a video',
			},
			{
				name: 'Unpin Chat Message',
				value: 'unpinChatMessage',
				description: 'Unpin a chat message',
				action: 'Unpin a chat message',
			},
		],
		default: 'sendMessage',
	},
	// ----------------------------------
	//         input fields
	// ----------------------------------
	// ----------------------------------
	//         message:editMessageText
	// ----------------------------------

	{
		displayName: 'Message Type',
		name: 'messageType',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['editMessageText'],
				resource: ['message'],
			},
		},
		options: [
			{
				name: 'Inline Message',
				value: 'inlineMessage',
			},
			{
				name: 'Message',
				value: 'message',
			},
		],
		default: 'message',
		description: 'The type of the message to edit',
	},

	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				messageType: ['message'],
				operation: ['editMessageText'],
				resource: ['message'],
			},
		},
		required: true,
		description:
			'Unique identifier for the target chat or username of the target channel (in the format @channelusername). To find your chat ID ask @get_id_bot.',
	},
	// ----------------------------------
	//         message:sendAnimation/sendAudio/sendDocument/sendPhoto/sendSticker/sendVideo
	// ----------------------------------

	{
		displayName: 'Binary Data',
		name: 'binaryData',
		type: 'boolean',
		default: false,
		required: true,
		displayOptions: {
			show: {
				operation: [
					'sendAnimation',
					'sendAudio',
					'sendDocument',
					'sendPhoto',
					'sendVideo',
					'sendSticker',
				],
				resource: ['message'],
			},
		},
		description: 'Whether the data to upload should be taken from binary field',
	},
	{
		displayName: 'Binary Property',
		name: 'binaryPropertyName',
		type: 'string',
		default: 'data',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'sendAnimation',
					'sendAudio',
					'sendDocument',
					'sendPhoto',
					'sendVideo',
					'sendSticker',
				],
				resource: ['message'],
				binaryData: [true],
			},
		},
		placeholder: '',
		description: 'Name of the binary property that contains the data to upload',
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				messageType: ['message'],
				operation: ['editMessageText'],
				resource: ['message'],
			},
		},
		required: true,
		description: 'Unique identifier of the message to edit',
	},
	{
		displayName: 'Inline Message ID',
		name: 'inlineMessageId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				messageType: ['inlineMessage'],
				operation: ['editMessageText'],
				resource: ['message'],
			},
		},
		required: true,
		description: 'Unique identifier of the inline message to edit',
	},
	{
		displayName: 'Reply Markup',
		name: 'replyMarkup',
		displayOptions: {
			show: {
				operation: ['editMessageText'],
				resource: ['message'],
			},
		},
		type: 'options',
		options: [
			{
				name: 'None',
				value: 'none',
			},
			{
				name: 'Inline Keyboard',
				value: 'inlineKeyboard',
			},
		],
		default: 'none',
		description: 'Additional interface options',
	},

	// ----------------------------------
	//         message:sendAnimation
	// ----------------------------------
	{
		displayName: 'Animation',
		name: 'file',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['sendAnimation'],
				resource: ['message'],
				binaryData: [false],
			},
		},
		description:
			'Animation to send. Pass a file_id to send an animation that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get an animation from the Internet.',
	},

	// ----------------------------------
	//         message:sendAudio
	// ----------------------------------
	{
		displayName: 'Audio',
		name: 'file',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['sendAudio'],
				resource: ['message'],
				binaryData: [false],
			},
		},
		description:
			'Audio file to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a file from the Internet.',
	},

	// ----------------------------------
	//         message:sendChatAction
	// ----------------------------------
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['sendChatAction'],
				resource: ['message'],
			},
		},
		options: [
			{
				name: 'Find Location',
				value: 'find_location',
				action: 'Find location',
			},
			{
				name: 'Record Audio',
				value: 'record_audio',
				action: 'Record audio',
			},
			{
				name: 'Record Video',
				value: 'record_video',
				action: 'Record video',
			},
			{
				name: 'Record Video Note',
				value: 'record_video_note',
				action: 'Record video note',
			},
			{
				name: 'Typing',
				value: 'typing',
				action: 'Typing a message',
			},
			{
				name: 'Upload Audio',
				value: 'upload_audio',
				action: 'Upload audio',
			},
			{
				name: 'Upload Document',
				value: 'upload_document',
				action: 'Upload document',
			},
			{
				name: 'Upload Photo',
				value: 'upload_photo',
				action: 'Upload photo',
			},
			{
				name: 'Upload Video',
				value: 'upload_video',
				action: 'Upload video',
			},
			{
				name: 'Upload Video Note',
				value: 'upload_video_note',
				action: 'Upload video note',
			},
		],
		default: 'typing',
		description:
			'Type of action to broadcast. Choose one, depending on what the user is about to receive. The status is set for 5 seconds or less (when a message arrives from your bot).',
	},

	// ----------------------------------
	//         message:sendDocument
	// ----------------------------------
	{
		displayName: 'Document',
		name: 'file',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['sendDocument'],
				resource: ['message'],
				binaryData: [false],
			},
		},
		description:
			'Document to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a file from the Internet.',
	},

	// ----------------------------------
	//         message:sendLocation
	// ----------------------------------
	{
		displayName: 'Latitude',
		name: 'latitude',
		type: 'number',
		default: 0.0,
		typeOptions: {
			numberPrecision: 10,
			minValue: -90,
			maxValue: 90,
		},
		displayOptions: {
			show: {
				operation: ['sendLocation'],
				resource: ['message'],
			},
		},
		description: 'Location latitude',
	},

	{
		displayName: 'Longitude',
		name: 'longitude',
		type: 'number',
		typeOptions: {
			numberPrecision: 10,
			minValue: -180,
			maxValue: 180,
		},
		default: 0.0,
		displayOptions: {
			show: {
				operation: ['sendLocation'],
				resource: ['message'],
			},
		},
		description: 'Location longitude',
	},

	// ----------------------------------
	//         message:sendMediaGroup
	// ----------------------------------
	{
		displayName: 'Media',
		name: 'media',
		type: 'fixedCollection',
		displayOptions: {
			show: {
				operation: ['sendMediaGroup'],
				resource: ['message'],
			},
		},
		description: 'The media to add',
		placeholder: 'Add Media',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		options: [
			{
				displayName: 'Media',
				name: 'media',
				values: [
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						options: [
							{
								name: 'Photo',
								value: 'photo',
							},
							{
								name: 'Video',
								value: 'video',
							},
						],
						default: 'photo',
						description: 'The type of the media to add',
					},
					{
						displayName: 'Media File',
						name: 'media',
						type: 'string',
						default: '',
						description:
							'Media to send. Pass a file_id to send a file that exists on the Telegram servers (recommended) or pass an HTTP URL for Telegram to get a file from the Internet.',
					},
					{
						displayName: 'Additional Fields',
						name: 'additionalFields',
						type: 'collection',
						placeholder: 'Add Field',
						default: {},
						options: [
							{
								displayName: 'Caption',
								name: 'caption',
								type: 'string',
								default: '',
								description: 'Caption text to set, 0-1024 characters',
							},
							{
								displayName: 'Parse Mode',
								name: 'parse_mode',
								type: 'options',
								options: [
									{
										name: 'Markdown',
										value: 'Markdown',
									},
									{
										name: 'HTML',
										value: 'HTML',
									},
								],
								default: 'HTML',
								description: 'How to parse the text',
							},
						],
					},
				],
			},
		],
	},

	// ----------------------------------
	//         message:sendMessage
	// ----------------------------------
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['editMessageText', 'sendMessage'],
				resource: ['message'],
			},
		},
		description: 'Text of the message to be sent',
	},

	// ----------------------------------
	//         message:sendPhoto
	// ----------------------------------
	{
		displayName: 'Photo',
		name: 'file',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['sendPhoto'],
				resource: ['message'],
				binaryData: [false],
			},
		},
		description:
			'Photo to send. Pass a file_id to send a photo that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a photo from the Internet.',
	},

	// ----------------------------------
	//         message:sendSticker
	// ----------------------------------
	{
		displayName: 'Sticker',
		name: 'file',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['sendSticker'],
				resource: ['message'],
				binaryData: [false],
			},
		},
		description:
			'Sticker to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a .webp file from the Internet.',
	},

	// ----------------------------------
	//         message:sendVideo
	// ----------------------------------
	{
		displayName: 'Video',
		name: 'file',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['sendVideo'],
				resource: ['message'],
				binaryData: [false],
			},
		},
		description:
			'Video file to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get a file from the Internet.',
	},

	// ----------------------------------
	//         message:editMessageText/sendAnimation/sendAudio/sendLocation/sendMessage/sendPhoto/sendSticker/sendVideo
	// ----------------------------------

	{
		displayName: 'Reply Markup',
		name: 'replyMarkup',
		displayOptions: {
			show: {
				operation: [
					'sendAnimation',
					'sendDocument',
					'sendMessage',
					'sendPhoto',
					'sendSticker',
					'sendVideo',
					'sendAudio',
					'sendLocation',
				],
				resource: ['message'],
			},
		},
		type: 'options',
		options: [
			{
				name: 'Force Reply',
				value: 'forceReply',
			},
			{
				name: 'Inline Keyboard',
				value: 'inlineKeyboard',
			},
			{
				name: 'None',
				value: 'none',
			},
			{
				name: 'Reply Keyboard',
				value: 'replyKeyboard',
			},
			{
				name: 'Reply Keyboard Remove',
				value: 'replyKeyboardRemove',
			},
		],
		default: 'none',
		description: 'Additional interface options',
	},

	{
		displayName: 'Force Reply',
		name: 'forceReply',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				replyMarkup: ['forceReply'],
				resource: ['message'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Force Reply',
				name: 'force_reply',
				type: 'boolean',
				default: false,
				description:
					'Whether to show reply interface to the user, as if they manually selected the bot‘s message and tapped ’Reply',
			},
			{
				displayName: 'Selective',
				name: 'selective',
				type: 'boolean',
				default: false,
				description: 'Whether to force reply from specific users only',
			},
		],
	},

	{
		displayName: 'Inline Keyboard',
		name: 'inlineKeyboard',
		placeholder: 'Add Keyboard Row',
		description: 'Adds an inline keyboard that appears right next to the message it belongs to',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				replyMarkup: ['inlineKeyboard'],
				resource: ['message'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Rows',
				name: 'rows',
				values: [
					{
						displayName: 'Row',
						name: 'row',
						type: 'fixedCollection',
						description: 'The value to set',
						placeholder: 'Add Button',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						options: [
							{
								displayName: 'Buttons',
								name: 'buttons',
								values: [
									{
										displayName: 'Text',
										name: 'text',
										type: 'string',
										default: '',
										description: 'Label text on the button',
									},
									{
										displayName: 'Additional Fields',
										name: 'additionalFields',
										type: 'collection',
										placeholder: 'Add Field',
										default: {},
										options: [
											{
												displayName: 'Callback Data',
												name: 'callback_data',
												type: 'string',
												default: '',
												description:
													'Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes',
											},
											{
												displayName: 'Pay',
												name: 'pay',
												type: 'boolean',
												default: false,
												description: 'Whether to send a Pay button',
											},
											{
												displayName: 'Switch Inline Query Current Chat',
												name: 'switch_inline_query_current_chat',
												type: 'string',
												default: '',
												description:
													"If set, pressing the button will insert the bot‘s username and the specified inline query in the current chat's input field.Can be empty, in which case only the bot’s username will be inserted",
											},
											{
												displayName: 'Switch Inline Query',
												name: 'switch_inline_query',
												type: 'string',
												default: '',
												description:
													'If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot‘s username and the specified inline query in the input field. Can be empty, in which case just the bot’s username will be inserted.',
											},
											{
												displayName: 'URL',
												name: 'url',
												type: 'string',
												default: '',
												description: 'HTTP or tg:// URL to be opened when button is pressed',
											},
										],
									},
								],
							},
						],
					},
				],
			},
		],
	},

	{
		displayName: 'Reply Keyboard',
		name: 'replyKeyboard',
		placeholder: 'Add Reply Keyboard Row',
		description: 'Adds a custom keyboard with reply options',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				replyMarkup: ['replyKeyboard'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Rows',
				name: 'rows',
				values: [
					{
						displayName: 'Row',
						name: 'row',
						type: 'fixedCollection',
						description: 'The value to set',
						placeholder: 'Add Button',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						options: [
							{
								displayName: 'Buttons',
								name: 'buttons',
								values: [
									{
										displayName: 'Text',
										name: 'text',
										type: 'string',
										default: '',
										description:
											'Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed.',
									},
									{
										displayName: 'Additional Fields',
										name: 'additionalFields',
										type: 'collection',
										placeholder: 'Add Field',
										default: {},
										options: [
											{
												displayName: 'Request Contact',
												name: 'request_contact',
												type: 'boolean',
												default: false,
												description:
													"Whether the user's phone number will be sent as a contact when the button is pressed.Available in private chats only",
											},
											{
												displayName: 'Request Location',
												name: 'request_location',
												type: 'boolean',
												default: false,
												description: "Whether the user's request_location",
											},
										],
									},
								],
							},
						],
					},
				],
			},
		],
	},

	{
		displayName: 'Reply Keyboard Options',
		name: 'replyKeyboardOptions',
		type: 'collection',
		placeholder: 'Add Option',
		displayOptions: {
			show: {
				replyMarkup: ['replyKeyboard'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Resize Keyboard',
				name: 'resize_keyboard',
				type: 'boolean',
				default: false,
				description: 'Whether to request clients to resize the keyboard vertically for optimal fit',
			},
			{
				displayName: 'One Time Keyboard',
				name: 'one_time_keyboard',
				type: 'boolean',
				default: false,
				description: "Whether to request clients to hide the keyboard as soon as it's been used",
			},
			{
				displayName: 'Selective',
				name: 'selective',
				type: 'boolean',
				default: false,
				description: 'Whether to show the keyboard to specific users only',
			},
		],
	},

	{
		displayName: 'Reply Keyboard Remove',
		name: 'replyKeyboardRemove',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				replyMarkup: ['replyKeyboardRemove'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Remove Keyboard',
				name: 'remove_keyboard',
				type: 'boolean',
				default: false,
				description: 'Whether to request clients to remove the custom keyboard',
			},
			{
				displayName: 'Selective',
				name: 'selective',
				type: 'boolean',
				default: false,
				description: 'Whether to force reply from specific users only',
			},
		],
	},

	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: [
					'editMessageText',
					'sendAnimation',
					'sendAudio',
					'sendDocument',
					'sendLocation',
					'sendMessage',
					'sendMediaGroup',
					'sendPhoto',
					'sendSticker',
					'sendVideo',
				],
				resource: ['message'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Caption',
				name: 'caption',
				type: 'string',
				displayOptions: {
					show: {
						'/operation': ['sendAnimation', 'sendAudio', 'sendDocument', 'sendPhoto', 'sendVideo'],
					},
				},
				default: '',
				description: 'Caption text to set, 0-1024 characters',
			},
			{
				displayName: 'Disable Notification',
				name: 'disable_notification',
				type: 'boolean',
				default: false,
				displayOptions: {
					hide: {
						'/operation': ['editMessageText'],
					},
				},
				description:
					'Whether to send the message silently. Users will receive a notification with no sound.',
			},
			{
				displayName: 'Disable WebPage Preview',
				name: 'disable_web_page_preview',
				type: 'boolean',
				displayOptions: {
					show: {
						'/operation': ['editMessageText', 'sendMessage'],
					},
				},
				default: false,
				description: 'Whether to disable link previews for links in this message',
			},
			{
				displayName: 'Duration',
				name: 'duration',
				type: 'number',
				typeOptions: {
					minValue: 0,
				},
				displayOptions: {
					show: {
						'/operation': ['sendAnimation', 'sendAudio', 'sendVideo'],
					},
				},
				default: 0,
				description: 'Duration of clip in seconds',
			},
			{
				displayName: 'File Name',
				name: 'fileName',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						'/operation': [
							'sendAnimation',
							'sendAudio',
							'sendDocument',
							'sendPhoto',
							'sendVideo',
							'sendSticker',
						],
						'/resource': ['message'],
						'/binaryData': [true],
					},
				},
				placeholder: 'image.jpeg',
			},
			{
				displayName: 'Height',
				name: 'height',
				type: 'number',
				typeOptions: {
					minValue: 0,
				},
				displayOptions: {
					show: {
						'/operation': ['sendAnimation', 'sendVideo'],
					},
				},
				default: 0,
				description: 'Height of the video',
			},
			{
				displayName: 'Parse Mode',
				name: 'parse_mode',
				type: 'options',
				options: [
					{
						name: 'Markdown',
						value: 'Markdown',
					},
					{
						name: 'HTML',
						value: 'HTML',
					},
				],
				displayOptions: {
					show: {
						'/operation': [
							'editMessageText',
							'sendAnimation',
							'sendAudio',
							'sendMessage',
							'sendPhoto',
							'sendVideo',
							'sendDocument',
						],
					},
				},
				default: 'HTML',
				description: 'How to parse the text',
			},
			{
				displayName: 'Performer',
				name: 'performer',
				type: 'string',
				displayOptions: {
					show: {
						'/operation': ['sendAudio'],
					},
				},
				default: '',
				description: 'Name of the performer',
			},
			{
				displayName: 'Reply To Message ID',
				name: 'reply_to_message_id',
				type: 'number',
				displayOptions: {
					hide: {
						'/operation': ['editMessageText'],
					},
				},
				default: 0,
				description: 'If the message is a reply, ID of the original message',
			},
			{
				displayName: 'Message Thread ID',
				name: 'message_thread_id',
				type: 'number',
				displayOptions: {
					show: {
						'/operation': [
							'sendAnimation',
							'sendAudio',
							'sendChatAction',
							'sendDocument',
							'sendLocation',
							'sendMediaGroup',
							'sendMessage',
							'sendPhoto',
							'sendSticker',
							'sendVideo',
						],
					},
				},
				default: 0,
				description: 'The unique identifier of the forum topic',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				displayOptions: {
					show: {
						'/operation': ['sendAudio'],
					},
				},
				default: '',
				description: 'Title of the track',
			},
			{
				displayName: 'Thumbnail',
				name: 'thumb',
				type: 'string',
				displayOptions: {
					show: {
						'/operation': ['sendAnimation', 'sendAudio', 'sendDocument', 'sendVideo'],
					},
				},
				default: '',
				description:
					'Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail‘s width and height should not exceed 320.',
			},
			{
				displayName: 'Width',
				name: 'width',
				type: 'number',
				typeOptions: {
					minValue: 0,
				},
				displayOptions: {
					show: {
						'/operation': ['sendAnimation', 'sendVideo'],
					},
				},
				default: 0,
				description: 'Width of the video',
			},
		],
	},
	// ----------------------------------
	//         chat / message
	// ----------------------------------
	{
		displayName: 'Chat ID',
		name: 'chatId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: [
					'administrators',
					'deleteMessage',
					'get',
					'leave',
					'member',
					'memberCount',
					'pinChatMessage',
					'setDescription',
					'setTitle',
					'sendAnimation',
					'sendAudio',
					'sendChatAction',
					'sendDocument',
					'sendLocation',
					'sendMessage',
					'sendMediaGroup',
					'sendPhoto',
					'sendSticker',
					'sendVideo',
					'unpinChatMessage',
				],
				resource: ['chat', 'message'],
			},
		},
		required: true,
		description:
			'Unique identifier for the target chat or username of the target channel (in the format @channelusername)',
	},

	// ----------------------------------
	//       message:deleteMessage
	// ----------------------------------
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['deleteMessage'],
				resource: ['message'],
			},
		},
		required: true,
		description: 'Unique identifier of the message to delete',
	},

	// ----------------------------------
	//       message:pinChatMessage
	// ----------------------------------
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['pinChatMessage', 'unpinChatMessage'],
				resource: ['message'],
			},
		},
		required: true,
		description: 'Unique identifier of the message to pin or unpin',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: ['pinChatMessage'],
				resource: ['message'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Disable Notification',
				name: 'disable_notification',
				type: 'boolean',
				default: false,
				description:
					'Whether to send a notification to all chat members about the new pinned message',
			},
		],
	},
];
