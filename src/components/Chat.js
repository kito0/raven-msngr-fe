import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import {
	AttachFile,
	InsertEmoticon,
	MoreVert,
	SearchOutlined,
	MicOutlined,
} from '@material-ui/icons';

const url =
	'ATLAS_URI=mongodb+srv://Drew:combusken09@raven.zzx9x.mongodb.net/<dbname>?retryWrites=true&w=majority';

export default function Chat() {
	const [state, setState] = useState({ hits: [] });

	useEffect(async () => {
		const res = await axios(url + '/messages');
		setState(res.data);
	});

	return (
		<div className="chat">
			<div className="chat_header">
				<Avatar />
				<div className="chat_header_info">
					<h3>room name</h3>
					<p>last seen at...</p>
				</div>

				<div className="chat_header_r">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className="chat_body">
				<p className="chat_message">
					<span className="chat_name">person</span>
					henlo
					<span className="chat_timestamp">{new Date().toUTCString()}</span>
				</p>
				<p className="chat_message chat_receiver">
					<span className="chat_name">person</span>
					henlo
					<span className="chat_timestamp">{new Date().toUTCString()}</span>
				</p>
				<p className="chat_message">
					<span className="chat_name">person</span>
					henlo
					<span className="chat_timestamp">{new Date().toUTCString()}</span>
				</p>
			</div>

			<div className="chat_footer">
				<InsertEmoticon />
				<form>
					<input placeholder="Type a message" type="text" />
					<button type="submit">Send</button>
				</form>
				<MicOutlined />
			</div>
		</div>
	);
}
