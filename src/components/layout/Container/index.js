import React from 'react'
import styled from 'styled-components';
import Menu from '../Menu';
import Search from '../Search';
import { ContainerWrapper } from './styles/ContainerWrapper';

export default function Container() {

    return (
        <ContainerWrapper>
           <Menu /> 
           <Search />
        </ContainerWrapper>
    )
}
