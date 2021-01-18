import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';

export default function SidebarChat() {
	return (
		<div className="sidebar_chat">
			<Avatar className="avatar" />
			<div className="sidebar_chat_info">
				<h2>roomname</h2>
				<p>last msg</p>
			</div>
		</div>
	);
}
