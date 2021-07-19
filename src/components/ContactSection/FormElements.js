import styled from 'styled-components'

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px){
    padding:10px;
  }
`
export const Form = styled.form`
  background: #010101;
  max-width: 700px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.9);

  @media screen and (max-width:400px){
    padding: 32px 32px;
  }
`
export const FormH1 = styled.h1`
  margin-bottom: 20px;
  color: #FFFFFA;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  letter-spacing: .05rem;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  letter-spacing: .02rem;
  font-size: 16px;
  font-weight: 500;
  color: #fff;

`
export const FormInput = styled.input`
  padding: 10px 10px;
  margin-bottom: 20px;
  border:none;
  border-radius: 4px;
`

export const FormInputTextArea = styled.textarea`
  padding: 10px 10px;
  margin-bottom: 20px;
  border:none;
  border-radius: 4px;
`
export const FormButton = styled.button`
  background: #E07D44;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #FFFFFA;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover{
    background: #D16C31;
    transition: all 0.2s ease-out;
    text-decoration: none;
  }
`