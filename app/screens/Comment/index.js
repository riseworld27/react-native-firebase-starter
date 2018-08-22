'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, Button} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../redux/actions'
import { Container, Content} from 'native-base'

class Comment extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            commentData: {},
            text: '',
            title: ''
        };
    };

    componentDidMount() {
        const { params } = this.props.navigation.state;
        const title = params ? params.title : null;
        this.setState({title});
        this.props.getComment(title, (res) => {
            this.setState({
                commentData: res,
                isLoading: false
            });
        })
    }

    onSubmit() {
        this.props.addComment({
            title: this.state.title,
            comment: this.state.text
        })
    }

    render() {
        let commentData = this.state.commentData;
        return (
            <Container>
                {!this.state.isLoading &&
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                        {
                            Object.keys(commentData).map(function(i) {
                                return (
                                    <Text key={i} style={styles.titleStyle}>{commentData[i]}</Text>
                                )
                            })
                        }
                    </ScrollView>
                    <View style={{flex: 1, flexDirection:'row', position: 'absolute', bottom: 0}}>
                        <TextInput
                            style={styles.textInputStyle}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                        />
                        <Button
                            style={styles.buttonStyle}
                            onPress={() => this.onSubmit()}
                            title="Submit"
                        />
                    </View>
                </View>
                }
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        color: 'black',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputStyle: {
        flex: 8,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    buttonStyle: {
        flex: 1,
    }
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
    return {   
        welcome: state.welcome
    }
}, mapDispatchToProps)(Comment);
