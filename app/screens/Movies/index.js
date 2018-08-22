'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../redux/actions'
import { Container, Content} from 'native-base'

class Movies extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            movieData: {}
        };
    };

    componentDidMount() {
        this.props.getData(res => {
            // console.log('get movies:', JSON.parse(res));
            this.setState({
                movieData: JSON.parse(res),
                isLoading: false
            });
        })
    }

    render() {
        return (
            <Container>
                {!this.state.isLoading &&
                <ScrollView>
                    {this.state.movieData.map((movie, i) => {
                        return (
                            <TouchableOpacity key={i} onPress={()=> {
                                this.props.navigation.navigate('comment', {
                                    title: movie.title
                                })
                                }
                            }>
                              <Text style={styles.titleStyle}>{movie.title}</Text>
                            </TouchableOpacity>
                        );
                    }, this)}
                </ScrollView>
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
    }
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
    return {   
        welcome: state.welcome
    }
}, mapDispatchToProps)(Movies);
