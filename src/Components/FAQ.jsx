import { forwardRef } from 'react';
import { View, FlatList, Text } from'react-native-web';
import FAQStyles from '../Stylesheets/FAQStyles';
import NavReturn from './Nav/NavReturn';

const FAQ = forwardRef((props, ref) => {
    const DATA = [
        {question: 'How did she do it?', answer: 'No one knows! It\' a mystery, and she\'ll never tell.'},
        {question: 'Does she teach classes?', answer: 'Yes, she could teach you. But she\'d have to charge.'},
        {question: 'How do I schedule a burlesque routine?', answer: 'Just press the Nav button, then choose \'Booking,\' from the menu options.'},
    ]

    const renderItem = (item) => {
        return (
        <View style={FAQStyles.itemView}>
            <Text style={FAQStyles.itemQ}>{item.question}</Text>
            <Text style={FAQStyles.itemA}>{item.answer}</Text>
        </View>
        )
    }

    return ( 
        <View ref={ref} style={FAQStyles.container}>
            <NavReturn />
            <Text style={FAQStyles.title}>
               Frequently Asked Questions
            </Text>

            <FlatList
                data={DATA}
                renderItem={renderItem}
            />

        </View>
    )
})

export default FAQ;