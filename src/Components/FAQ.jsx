import { forwardRef, useEffect, useState } from 'react';
import { View, FlatList, Pressable, Text } from'react-native-web';
import FAQStyles from '../Stylesheets/FAQStyles';
import '../Animations/faq-animations.css';


const Item = ({id, question, answer, answerDisplays, setAnswerDisplays}) => {
    let display = FAQStyles[answerDisplays[id]];
    const [displayPrompt, setDisplayPrompt] = useState('more');

    const toggleDisplay = () => {
        let newDisplays = {...answerDisplays};
        newDisplays[id] = !newDisplays[id];
        setAnswerDisplays(newDisplays);
        setDisplayPrompt(displayPrompt === 'more' ? 'less' : 'more');
    }

    const modulus = id % 2 ? 'odd' : 'even';

        return (
        <View style={{...FAQStyles[modulus],...FAQStyles.itemView}}>
            <Pressable onPress={toggleDisplay}>
            <Text style={FAQStyles.itemQ}>{question} {displayPrompt}</Text>
            </Pressable>
            <View style={FAQStyles.itemA}>
            <Text style={display}>{answer}</Text>
            </View>
        </View>
        )
    }

const FAQ = forwardRef((props, ref) => {
    const DATA = [
        {id: 0, question: 'How did she do it?', answer: 'No one knows! It\' a mystery, and she\'ll never tell.'},
        {id: 1, question: 'How do I schedule a burlesque routine?', answer: 'Just press the Nav button, then choose \'Booking,\' from the menu options. I like to add a bunch of text to the end of my answers, just to see if you read to the end. If you did, use the contact form to send me the exact word, \'buzzzzzbzzbuttzzzz\' and you will get a free burlesque routine!'},
        {id: 2, question: 'Does she teach classes?', answer: 'Yes, she could teach you. But she\'d have to charge.'},
    ]

    const renderItem = ({ item }) => {
        return <Item 
            id={item.id}
            question={item.question} 
            answer={item.answer} 
            answerDisplays={answerDisplays} 
            setAnswerDisplays={setAnswerDisplays}
        />
    }

    const [answerDisplays, setAnswerDisplays] = useState({});

    useEffect(()=>{
        let displays = DATA.reduce((accum, el) => {
            accum[el.id] = false;
            return accum;
        }, {});

        setAnswerDisplays(displays);
    },[]);

    return ( 
        <View ref={ref} style={FAQStyles.container}>
            <Text style={FAQStyles.title}>
               Frequently Asked Questions
            </Text>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                style={{height: '80vh', width: '100vw'}}
            />

        </View>
    )
})

export default FAQ;