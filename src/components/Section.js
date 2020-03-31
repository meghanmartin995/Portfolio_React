import React from 'react'
import styled from 'styled-components'
import Wave from '../components/Wave';

const SectionGroup = styled.div `
  background: white;
  height: 600px;
  background-size: cover;
  display: grid;
  grid-template-rows: 220px auto;
  grid-gap: 40px;
  justify-items: center;
  position: relative;

    @media (max-width: 900px) {
        height: 800px;
    }

    @media (max-width: 700px) {
        height: 720px;
    }
`

const SectionLogo = styled.img`
  width: 210px;
  margin: 0 auto;
  align-self: end;
`

const SectionTitleGroup = styled.div`
    max-width: 800px;
    margin: 0 80px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: black;
    font-size: 62px;
    margin: 0;
    line-height: 1.15;

    @media (max-width: 640px) {
        font-size: 40px;
    }
`

const SectionText = styled.p`
   color: black;
`

const WaveBottom = styled.div`
   bottom: -6px;
   width: 100%;
   position: absolute;
   display: none;
`

const WaveTop = styled.div`
   top: -180px;
   width: 100%;
   position: absolute;
`

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop><Wave /></WaveTop>
    <WaveBottom><Wave /></WaveBottom>
    <SectionLogo src={props.logo}/>
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
