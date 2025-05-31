import styled, { css } from "styled-components/native"
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize"


export const Container = styled.View`

    background-color: ${({theme, type}) => theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: ${({theme}) => theme.borderRadius.large}px;
    padding: 20px 23px;
    padding-bottom: ${RFValue(20)}px;
    margin-right: ${({theme}) => theme.spacing.small};
    margin-bottom: 20px;
`
export const Header = styled.View`
    flex-direction: column;

`
export const Title = styled.Text`
    font-size: ${({theme}) => theme.fontSize.small }px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme, type}) => theme.colors.text};
`
export const Icon = styled(Feather)`
    font-size: ${({theme}) => theme.fontSize.medium}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.textLight};

`
export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 25px;
    
`
export const Amount = styled.Text`
    font-size: ${({theme}) => theme.fontSize.medium};
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme, type}) => theme.colors.success};
`
export const LastTransaction = styled.Text`
    font-size: ${({theme}) => theme.fontSize.small};
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme, type}) => theme.colors.textLight};

`

export const Text = styled.Text`
    font-size: ${({theme}) => theme.fontSize.small}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.textLight};
`
export const IconGroup = styled.View`
    flex-direction: row;
`