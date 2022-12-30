import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native-web';
import emailjs from '@emailjs/browser';
import ContactStyles from '../../Stylesheets/ContactStyles';
import '../../Stylesheets/forms.css';

 const Contact = () => {
    const user_id = process.env.REACT_APP_USER_ID;
    const service_id = process.env.REACT_APP_SERVICE_ID;

    const [name, onNameChange] = useState('');
    const [email, onEmailChange] = useState('');
    const [subject, onSubjectChange] = useState('');
    const [message, onMessageChange] = useState('');

	const [sent, setSent] = useState('');

	useEffect(() => {
		setSent('');
		window.scroll(0,0);
	}, [])

	const handleSubmit = () => {
        let params = {to_name: 'Naomi', name: name, email: email, subject: subject, message: message}
        console.log(params);
		emailjs
			.send(
				`${service_id}`,
				'naomi_template',
				params,
				`${user_id}`
			)
			.then(
				(result) => {
					console.log(result.text);
					setSent('pass');
				},
				(error) => {
					console.log(error.text);
					setSent('fail')

				}
			);

	};

	return (
		<View className='contact' style={ContactStyles.container} >
		{sent === 'pass' ? 
		<>
		<Text>Your message was successfully sent!</Text> 
		</>
		: ( sent === 'fail' ?
			<>
			<Text>Oops! Something went wrong. Refresh the page, and try again.</Text>
			</>
			: 
			<View style={ContactStyles.form}>
            <label className='label'>Name</label>
				<TextInput style={ContactStyles.input} onChangeText={onNameChange} value={name} placeholder='Naomi' name='name' />
				<label className='label'>Email</label>
				<TextInput style={ContactStyles.input} onChangeText={onEmailChange} value={email} placeholder='user@email.com' name='email' />
				<label className='label'>Subject</label>
				<TextInput style={ContactStyles.input} onChangeText={onSubjectChange} value={subject} placeholder="What's on your mind?" name='subject'/>
				<label className='label'>Message</label>
				<TextInput style={ContactStyles.textArea} onChangeText={onMessageChange} placeholder='Share your thoughts here.' value={message} />
				<Button className='contact-button' title="Submit" style={ContactStyles.button} onPress={handleSubmit} />
			</View>
		)
		}
		</View>
	);
};

export default Contact;
