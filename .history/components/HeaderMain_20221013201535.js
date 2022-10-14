import styled from "styled-components";
import React from 'react';
import { StyleSheet } from 'react-native';


export const HeaderMain = () => {

    return (
        <span style={styles.span}>Header 1</span>
    )
}

const styles = StyleSheet.create({
   span: {
        display:'flex',
        fontFamily:'poppins'
    }
  })