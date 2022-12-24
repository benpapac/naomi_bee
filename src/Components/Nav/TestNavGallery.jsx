import React, { useEffect, useState } from 'react';
import { FlatList, View, Image } from 'react-native-web';
import NavImage from './NavImage';

const TestNavGallery = ({ keys }) => {
    const BEE_URL = process.env.REACT_APP_BEE_URL;

    useEffect(()=>{
        console.log('keys', keys);
    },[])

    const getRandomSize = Math.floor(Math.random()*10)+1;

    const getRandomAnimation = () => {
        let animations = ['slide-up', 'shrink', 'expand'];
        let randomNumber = Math.floor(Math.random()*animations.length);
        
        return ` 3s infinite alternate ${animations[randomNumber]} `
    }

    return (

        <FlatList 
        
        data={keys}
        keyExtractor={(item)=> item.substring(4)}
        numRows={4}
        horizontal={false}
        renderItem={({item})=>{
            return (
                <View style={{ width: '10vw', height: '10vw' }}>
                    <Image source={{uri: BEE_URL+item}} style={{width: '100%', height: '100%', resize: 'cover'}}>

                    </Image>

                </View>
            )
        }}
        >



        </FlatList>
             
    );
};

export default TestNavGallery;