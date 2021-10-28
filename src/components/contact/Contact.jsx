import styled from 'styled-components';
// import { mobile, tablet } from '../../responsive';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useGlobalContext } from '../../context';
const C = styled.div`
  height: 100vh;
`;
const Cbg = styled.div`
  width: 20px;
  height: 100%;
  background-color: #59b256;
  position: absolute;
`;
const Cwrapper = styled.div`
  padding: 50px;
  display: flex;
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
const Cinfo = styled.div``;
const CinfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  width: 70%;
`;
const Cicon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;
const Cdesc = styled.p`
  font-weight: 200;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const Input = styled.input`
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
  background-color: #59b256;
  font-weight: 500;
  cursor: pointer;
  color: #fff;
`;
const Notification = styled.span``;

const Contact = () => {
  const { isDark } = useGlobalContext();

  const resetForm = () => {
    formRef.current[0].value = '';
    formRef.current[1].value = '';
    formRef.current[2].value = '';
    formRef.current[3].value = '';
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  const [notification, setNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current);
    resetForm();
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
  };

  const formRef = useRef();
  return (
    <C>
      <Cbg></Cbg>
      <Cwrapper>
        <Cleft>
          <Ctitle>Lets discuss your project</Ctitle>
          <Cinfo>
            <CinfoItem>
              <Cicon src={Phone} alt=''></Cicon>
              +1 8787 897 08
            </CinfoItem>
            <CinfoItem>
              <Cicon src={Email} alt=''></Cicon>
              dsaf@gmail.com
            </CinfoItem>
            <CinfoItem>
              <Cicon src={Address} alt=''></Cicon>
              kralja Djoke 890
            </CinfoItem>
          </Cinfo>
        </Cleft>
        <Cright>
          <Cdesc>
            <b> Lorem ipsum dolor</b> sit amet consectetur adipisicing elit.
            Placeat iure libero amet facilis beatae! Voluptatum totam ad neque
            quod necessitatibus similique recusandae illo quaerat, ipsum sit
            reprehenderit et doloribus magnam!
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
              placeholder='email'
              name='user_email'
            />
            <Text
              isDark={isDark}
              rows='5'
              placeholder='message'
              name='message'
            />
            <SubmitBtn>Submit</SubmitBtn>
            {notification && <Notification>Thank you!</Notification>}
          </Form>
        </Cright>
      </Cwrapper>
    </C>
  );
};

export default Contact;
