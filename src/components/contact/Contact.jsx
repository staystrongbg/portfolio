<<<<<<< HEAD
import styled from "styled-components";
import { ReactComponent as Phone } from "../../img/iconmonstr-phone-8.svg";
import { ReactComponent as Email } from "../../img/iconmonstr-email-1.svg";
import { ReactComponent as Git } from "../../img/iconmonstr-github-1.svg";
import { ReactComponent as Linkedin } from "../../img/iconmonstr-linkedin-4.svg";
import { ReactComponent as Hyper } from "../../img/iconmonstr-link-1.svg";
import { mobile, mt, laoptop } from "../../responsive";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useGlobalContext } from "../../context";
=======
import styled from 'styled-components';
import { ReactComponent as Phone } from '../../img/iconmonstr-phone-8.svg';
import { ReactComponent as Email } from '../../img/iconmonstr-email-1.svg';
import { ReactComponent as Git } from '../../img/iconmonstr-github-1.svg';
import { ReactComponent as Linkedin } from '../../img/iconmonstr-linkedin-4.svg';
import { ReactComponent as Hyper } from '../../img/iconmonstr-link-1.svg';
import { mobile, mt, laoptop } from '../../responsive';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useGlobalContext } from '../../context';
>>>>>>> 642c8fb7cd9219384e0cd9bd8d52671c877d033f

const C = styled.div``;
export const Cbg = styled.div`
  width: 20px;
  height: 100%;
  background-color: #1e3888;
  position: absolute;
  left: 0;
  ${mobile({ display: "none" })}
  ${mt({ display: "none" })}
`;

const Cwrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
  height: 100vh;
  ${laoptop({
<<<<<<< HEAD
    flexDirection: "column",
    padding: "0px",
    height: "100%",
=======
    flexDirection: 'column',
    padding: '0px',
    height: '100%',
>>>>>>> 642c8fb7cd9219384e0cd9bd8d52671c877d033f
  })}
  ${mt({ flexDirection: "column", padding: "10px" })};
`;
const Cleft = styled.div`
  text-align: left;

`;
const Cright = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme, isDark }) =>
    isDark ? theme.colors.sucmurastaDarkOp : theme.colors.whiteOp};
  padding: 10px;
  border-radius: 10px;
<<<<<<< HEAD
  border: 2px solid ${({ isDark }) => (isDark ? "#333" : "#f3f2f2")};
=======
  border: 2px solid ${({ isDark }) => (isDark ? '#333' : '#f3f2f2')};
>>>>>>> 642c8fb7cd9219384e0cd9bd8d52671c877d033f
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;

const Hyperlink = styled(Hyper)`
  visibility: hidden;
`;
const Ctitle = styled.h1`
  font-size: 50px;
  font-weight: 600;
  width: 80%;
  a {
    font-size: 50px;
    font-weight: 600;
    text-decoration: none;
  }
  &:hover ${Hyperlink} {
    visibility: visible;
  }
`;
const Cinfo = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
  svg {
    fill: ${({ isDark }) => (isDark ? "orange" : "#000")};
    /* overflow: visible; */
  }
`;

const CinfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  gap: 0.75rem;
  width: 70%;
  ${mobile({ width: "100%" })}
`;

const Cdesc = styled.p``;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  justify-content: center;
`;

const Input = styled.input`
  outline: 0;
  background-color: transparent;
  color: ${({ isDark }) => (isDark ? "#dadada" : "#222")};
  height: 50px;
  border: none;
  border-bottom: 1px solid ${({ isDark }) => (isDark ? "#888" : "#222")};
  margin: 10px 0;
  padding-left: 10px;
`;

const Text = styled.textarea`
  outline: 0;
  border: 1px solid ${({ isDark }) => (isDark ? "#888" : "#222")};

  background-color: transparent;
  color: ${({ isDark }) => (isDark ? "#dadada" : "#222")};
  margin: 10px 0;
  font-size: 14px;
  padding-left: 10px;
`;

const SubmitBtn = styled.button`
  border: 0;
  padding: 10px 15px;
  background-color: #1e884e;
  font-weight: 500;
  cursor: pointer;
  color: #fff;
  transition: ease 0.5s all;
  &:active {
    transform: scale(0.98);
  }
`;

const Notification = styled.span`
  font-weight: 600;
`;

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

    emailjs
      .sendForm(
        "service_zzd160n",
        "template_v9zm3r5",
        formRef.current,
        "user_c6RYBq55w7YHC8Ig0xPNf"
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

  const inputs = [
<<<<<<< HEAD
    { placeholder: "Name", name: "user_name" },
    { placeholder: "Subject", name: "user_subject" },
    { placeholder: "Email", name: "user_email" },
    { placeholder: "Lastname", name: "user_lastnam" },
  ];

  return (
    <C id="contact">
=======
    { placeholder: 'Name', name: 'user_name' },
    { placeholder: 'Subject', name: 'user_subject' },
    { placeholder: 'Email', name: 'user_email' },
    { placeholder: 'Lastname', name: 'user_lastnam' },
  ];

  return (
    <C id='contact'>
>>>>>>> 642c8fb7cd9219384e0cd9bd8d52671c877d033f
      <Cwrapper isDark={isDark}>
        <Cleft>
          <Ctitle>
            <a
              href="#contact"
              style={{ color: isDark ? "#f1f1f4" : "#111", textAlign: "left" }}
            >
              <Hyperlink /> Want to contact me?
            </a>
          </Ctitle>
          <Cinfo isDark={isDark}>
            <CinfoItem>
              <Phone />
              <a href="tel:+381 60 134 83 99">+381 60 134 83 99</a>
            </CinfoItem>
            <CinfoItem>
              <Email />
              <a href="mailto:staystrongbg@gmail.com">staystrongbg@gmail.com</a>
            </CinfoItem>
            <CinfoItem>
              <Git />
              <a
                href="https://github.com/staystrongbg"
                target="_blank"
                rel="noreferrer"
              >
                /staystrongbg
              </a>
            </CinfoItem>
            <CinfoItem>
              <Linkedin />
              <a
                href="https://www.linkedin.com/in/zlazarevic/"
                target="_blank"
                rel="noreferrer"
              >
                in/zlazarevic/
              </a>
            </CinfoItem>
          </Cinfo>
        </Cleft>
        <Cright isDark={isDark}>
          <Cdesc>
            Feel free to contact me! I'm looking forward to create new stuff.
          </Cdesc>
          <Form ref={formRef} onSubmit={handleSubmit}>
            {inputs.map((input, index) => (
              <Input
                key={index}
                isDark={isDark}
                type="text"
                placeholder={input.placeholder}
                name={input.name}
                required
              />
            ))}
            <Text
              isDark={isDark}
              rows="5"
              placeholder="Message"
              name="message"
              required
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
