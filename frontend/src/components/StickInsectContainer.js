import React, { Component } from 'react'
import styled from 'styled-components';

const StyledStickInsect = styled.div`
    & {
        position: absolute;
        top: ${Math.floor(Math.random()*80)+10}%;
        left: ${Math.floor(Math.random()*80)+10}%;
        color: #FFFFFF;
        padding: 1rem;
        transform: rotate(${Math.floor(Math.random()*180)}deg);
        background-color: #964B00
    
    }
    `
    
    const StyledInsectContainer = styled.div`
        & {
            position: relative;
            width: 100%
            height: 100%
        }
    `

export class StickInsectContainer extends Component {

    
    render() {
        return (
            <StyledInsectContainer>
                <StyledStickInsect onClick={() => alert("Found me!")}>Stick Insect</StyledStickInsect>
            </StyledInsectContainer>
        )
    }
}

export default StickInsectContainer
