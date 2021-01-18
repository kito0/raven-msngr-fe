import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import axios from './axios';

function App() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		axios.get('/messages/sync').then((res) => {
			setMessages(res.data);
		});
	}, []);

	useEffect(() => {
		const pusher = new Pusher('9a411b2a0ee16e4825af', {
			cluster: 'us3',
		});

		const channel = pusher.subscribe('messages');
		channel.bind('inserted', (newMessage) => {
			alert(JSON.stringify(newMessage));
			setMessages([...messages, newMessage]);
		});

		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages]);

	return (
		<div className="app">
			<div className="app_body">
				<Sidebar />
				<Chat />
			</div>
		</div>
	);
}

export default App;
