import React from 'react';
import { View, Pressable, Image } from 'react-native-web';

import GridStyles from '../Stylesheets/GridStyles';
import ImageStyles from '../Stylesheets/ImageStyles';
import HomeStyles from '../Stylesheets/HomeStyles';
import { useNavigate } from 'react-router-dom';

const Grid = ({ rows, columns, gridStyles}) => {
    const BEE_URL = process.env.REACT_APP_BEE_URL;
    const navigate = useNavigate();
    const links = ['about', 'faq', 'booking'];


    const handlePress = (key) => {
         for(let i = 0; i < links.length; i++){
            if(key.includes(links[i])){
                console.log(links[i]);
                navigate('/'+links[i]);
            }
        }
        return '/';
    }

    const Row = ({ children } ) => <View style={GridStyles.row}>{children}</View>

    const Col = ({ numRows, children }) => <View style={GridStyles[`${numRows}col`]}>{children}</View>
    return (
        <View style={{...GridStyles.grid, ...gridStyles}}>

        <Row  style={GridStyles.row}>
            <Col numRows={'empty'}>
            </Col>
            <Col numRows={'empty'}></Col>
            <Col numRows={1}>
                
                <Image style={ImageStyles.butterfly} source={BEE_URL+process.env.REACT_APP_BUTTERFLY}></Image>

            </Col>
        </Row>
        <Row style={GridStyles.row}> 
            <Col numRows={1}>
                 <Pressable 
               style={ HomeStyles.pressable }
               onPress={()=> handlePress(process.env.REACT_APP_BOOKING)}
               >
                    <Image  
                    source={process.env.REACT_APP_BOOKING} 
                    style={ImageStyles.basicImage}
                    />
                            
                </Pressable>
            </Col>
            <Col numRows={'empty'}>
            </Col>
            <Col numRows={1}>
                <Image style={ImageStyles.skull} source={BEE_URL+process.env.REACT_APP_SKULL}></Image>
            </Col>
            </Row>
        <Row style={GridStyles.row}> 
<Col numRows={1}>
     <Pressable 
               style={ HomeStyles.pressable }
               onPress={()=> handlePress(process.env.REACT_APP_HOME)}
               >            
                <Image style={ImageStyles.basicImage} source={process.env.REACT_APP_HOME}></Image>
                </Pressable>
                 <Pressable 
               style={ HomeStyles.pressable }
               onPress={()=> handlePress(process.env.REACT_APP_FAQ)}
               >            
                <Image style={ImageStyles.basicImage} source={process.env.REACT_APP_FAQ}></Image>
                </Pressable>
            </Col>
            <Col numRows={'empty'}></Col>
            <Col numRows={1}>
                {/* <Image style={ImageStyles.skull} source={BEE_URL+process.env.REACT_APP_SKULL}></Image> */}

            </Col>
            </Row>
            
        </View>
    );
};

export default Grid;