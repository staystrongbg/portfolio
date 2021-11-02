import { mobile } from '../../responsive';
import styled from 'styled-components';
// import { mobile, tablet } from '../../responsive';
import { ReactComponent as Phone } from '../../img/iconmonstr-phone-8.svg';
import { ReactComponent as Email } from '../../img/iconmonstr-email-1.svg';
import { ReactComponent as Git } from '../../img/iconmonstr-github-1.svg';
import { ReactComponent as Linkedin } from '../../img/iconmonstr-linkedin-4.svg';

import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useGlobalContext } from '../../context';
const C = styled.div`
  height: 100vh;
`;
const Cbg = styled.div`
  width: 20px;
  height: 100%;
  background-color: #1e3888;
  position: absolute;
`;
const Cwrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color: ${({ isDark }) => (isDark ? '#222' : '#fff')};
  ${mobile({ flexDirection: 'column' })}
`;
const Cleft = styled.div`
  flex: 1;
`;
const Cright = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Ctitle = styled.h1`
  font-size: 60px;
  width: 80%;
`;
const Cinfo = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const CinfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  gap: 0.75rem;
  width: 70%;
  svg {
    fill: #000;
  }
`;

const Cdesc = styled.p``;

const Form = styled.form`
  margin-top: 20px;
`;

const Input = styled.input`
  outline: 0;
  background-color: ${({ isDark }) => (isDark ? '#222' : '#fff')};
  color: ${({ isDark }) => (isDark ? '#fff' : '#222')};
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid ${({ isDark }) => (isDark ? '#fff' : '#222')};
  margin: 10px 0;
  padding-left: 10px;
`;

const Text = styled.textarea`
  outline: 0;
  background-color: ${({ isDark }) => (isDark ? '#222' : '#fff')};
  color: ${({ isDark }) => (isDark ? '#fff' : '#222')};
  width: 100%;
  margin: 10px 0;
  font-size: 14px;
  padding-left: 10px;
`;

const SubmitBtn = styled.button`
  border: 0;
  padding: 10px 15px;
  background-color: #1e3888;
  font-weight: 500;
  cursor: pointer;
  color: #fff;
`;
const Notification = styled.span``;

const Contact = () => {
  const { isDark } = useGlobalContext();

  const resetForm = () => {
    formRef.current.reset();
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  const [notification, setNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current);
    emailjs
      .sendForm(
        'service_zzd160n',
        'template_v9zm3r5',
        formRef.current,
        'user_c6RYBq55w7YHC8Ig0xPNf'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetForm();
  };

  const formRef = useRef();
  return (
    <C id='contact'>
      <Cbg></Cbg>
      <Cwrapper isDark={isDark}>
        <Cleft>
          <Ctitle>Want to contact me?</Ctitle>
          <Cinfo>
            <CinfoItem>
              <Phone />
              <a href='tel:+381 60 134 83 99'>+381 60 134 83 99</a>
            </CinfoItem>
            <CinfoItem>
              <Email />
              staystrongbg@gmail.com
            </CinfoItem>
            <CinfoItem>
              <Git />
              /staystrongbg
            </CinfoItem>
            <CinfoItem>
              <Linkedin />
              in/zlazarevic/
            </CinfoItem>
          </Cinfo>
        </Cleft>
        <Cright>
          <Cdesc>
            Feel free to contact me! I'm looking forward to create new stuff.
          </Cdesc>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              isDark={isDark}
              type='text'
              placeholder='Name'
              name='user_name'
            />
            <Input
              isDark={isDark}
              type='text'
              placeholder='Subject'
              name='user_subject'
            />
            <Input
              isDark={isDark}
              type='text'
              placeholder='Email'
              name='user_email'
            />
            <Text
              isDark={isDark}
              rows='5'
              placeholder='Message'
              name='message'
            />
            <SubmitBtn>SUBMIT</SubmitBtn>
            {notification && <Notification>Thank you!</Notification>}
          </Form>
        </Cright>
      </Cwrapper>
    </C>
  );
};

export default Contact;
