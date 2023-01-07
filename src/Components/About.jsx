import { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground } from 'react-native-web';
import AboutStyles from '../Stylesheets/AboutStyles';

import useObserver from "../Hooks/useObserver";
import useScroll from '../Hooks/useScroll';
import '../Animations/animation.about.css';


const NestedImage = ({ source, ratio }) => {
    return (
            <Image source={source} 
                style={
                    {
                        borderColor: 'white',
                        borderWidth: '10px',
                        boxShadow: '10px 10px 10px black',
                        height: '70%',
		                width: 'fit-content',
                        aspectRatio: 1,
                        resizeMode: 'cover',
                    animation:  ratio > 0.7 ? 'slidein 3s' : 'slideout 2s', 
                    transform: ratio > 0.7 ? 'translateX(0)' : 'translateX(200%)',
                    }
                }
            />
    )
}

const About = () => {

    const [refOne, entryOne] = useObserver({ threshold: Array.from( Array(100), (_,idx) => idx *0.01 +.01 )});
    const [refTwo, entryTwo] = useObserver({threshold: Array.from( Array(100), (_,idx) => idx *0.01 +.01 )} );
    const [refThree, entryThree] = useObserver({threshold: Array.from( Array(100), (_,idx) => idx *0.01 +.01 )} );
    const [refFour, entryFour] = useObserver({threshold: Array.from( Array(100), (_,idx) => idx *0.01 +.01 )} );

  

    return (
        <View  style={{...AboutStyles.container}}>
        <Image source={{uri: process.env.REACT_APP_BEE_URL+'muertos/SkullBoyGrinning.jpg'}} resizeMode='cover' style={{height: '100vh', width: '100vw', justifyContent: 'center', position: 'fixed', zIndex: '0'}}>

            </Image>
        <View style={{...AboutStyles.section, backgroundColor: '#F2AA4F'}}  ref={refOne}>
            <Text style={{...AboutStyles.p, 
                opacity: `${entryOne.intersectionRatio || 1}`,
                animation:  entryOne.intersectionRatio > 0.7 ? 'slide-up 3s' : 'slide-down 2s', 
                }}> 
            <Text style={{...AboutStyles.title}}>Hello from Section 1</Text>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Text>
             <NestedImage 
            ratio={entryOne.intersectionRatio}
            source={{ uri: process.env.REACT_APP_BEE_URL+'birthdays/birthdays_Naomi_painting_child.jpg' }} /> 
        </View>
        <View style={{...AboutStyles.section}} ref={refTwo} > 
            <Text style={{...AboutStyles.p, opacity: `${entryTwo.intersectionRatio || 1}` }}>
                 <Text style={AboutStyles.title} >Hello from Section 2</Text>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                  {/* <NestedImage 
            ratio={entryTwo.intersectionRatio}
            source={{ uri: process.env.REACT_APP_BEE_URL+process.env.REACT_APP_SKULL }} />  */}
        </View>
        <View style={{...AboutStyles.section, ...AboutStyles.opaque}} ref={refThree} >
            <Text style={{...AboutStyles.p, opacity: `${entryThree.intersectionRatio || 1}`}}>
                <Text style={AboutStyles.title}>Hello from Section 3</Text>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                 <NestedImage 
            ratio={entryThree.intersectionRatio}
            source={{ uri: process.env.REACT_APP_BEE_URL+process.env.REACT_APP_SKULL }} /> 
        </View>
         <View style={{...AboutStyles.section, ...AboutStyles.opaque}} ref={refFour} >
            <Text style={{...AboutStyles.p, opacity: `${entryFour.intersectionRatio || 1}`}}>
                <Text style={AboutStyles.title}>Hello from Section 4</Text>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                 <NestedImage 
            ratio={entryFour.intersectionRatio}
            source={{ uri: process.env.REACT_APP_BEE_URL+process.env.REACT_APP_SKULL }} /> 
        </View>
        </View> 
    )
}

export default About;