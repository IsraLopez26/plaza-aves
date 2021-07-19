import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, FormWrap } from './ContactElements'
import EmailForm from './EmailForm';

const ContactSection = () => {

  const imgStart = true;
  return (
    <>
      <InfoContainer id='contact'>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Contáctanos</TopLine>
                <Heading>Estamos para Servirte</Heading>
                <Subtitle>Si te interesa conocer acerca de los locales en Renta, o alguna otra información, escríbenos y con gusto te atenderemos.</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <FormWrap>
                <EmailForm />
              </FormWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default ContactSection
