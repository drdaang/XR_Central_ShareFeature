import styled from "styled-components";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './App.css';
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";

const uri = window.location.href;
const title = "";
const text = "";
const subject=""
const body = ""

export const socials = [
  {
    outlet: "WhatsApp",
    href: `whatsapp://send?text=${uri}`,
    background: "#25D366",
    color: "white",
    label: "Share on WhatsApp",
    icon: <WhatsAppIcon />,
  },
  {
    outlet: "WhatsApp",
    href: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(uri)}&title=${encodeURIComponent(title)}`,
    background: "#0a66c2",
    color: "white",
    label: "Share on LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    outlet: "Facebook",
    href: `https://www.facebook.com/sharer.php?u=${encodeURIComponent(uri)}`,
    background: "#3b5898",
    color: "white",
    label: "Share on Facebook",
    icon: <FacebookIcon />
  },
  {
    outlet: "Twitter",
    href: `https://www.twitter.com/intent/tweet?url=${encodeURIComponent(uri)}&text=${encodeURIComponent(text)}`,
    background: "#00aced",
    color: "white",
    label: "Share on Twitter",
    icon: <TwitterIcon />
    },
    {
        outlet: "Email",
        href:
          `mailto:Abhinavdang123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        background: "#dd4b39",
        color: "white",
        label: "Share via Email",
        icon: <EmailIcon />
    },
];




export default function App() {
  const [menuActive, setMenuActive] = useState(false);
  const handleToggleMenu = () => {
    setMenuActive((menuActive) => !menuActive);
  };

  const socialLinks = socials.map((social, index) => {
    return (
      <SocialLink
        as="a"
        href={social.href}
        target="_blank"
        rel="noreferrer"
        aria-label={social.label}
        role="button"
        isActive={menuActive}
        background={social.background}
        color={social.color}
        position={index}
        key={index}
      >
        {social.icon}
      </SocialLink>
    );
  });

  return (
    <Container>
      <h1>Share Feature</h1>
      <ShareContainer>
        <ShareButton
          isActive={menuActive}
          aria-label="Share Button"
          aria-expanded={menuActive}
          role="button"
          background="#242424"
          color="white"
          onClick={handleToggleMenu}
        >
          <ShareIcon />
        </ShareButton>
        {socialLinks}
      </ShareContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: mistyrose;
 height:100vh
`;

const ShareContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ShareButton = styled.button`
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 100%;
  outline: none;
  border: 2px solid ${({ background }) => background};
  padding: 8px;
  transform: ${({ isActive }) => (isActive ? "scale(0.8)" : "scale(1.0)")};
  transition: all 0.2s, transform 0.2s 0.2s;
  
`;

const SocialLink = styled(ShareButton)`
  position: absolute;
  z-index: 0;
  transform: none;
  transition: top 0.2s ${({ position }) => `${position * 50}ms`},
    left 0.2s ${({ position }) => `${position * 50}ms`};
  left: ${({ isActive, position }) =>
    isActive ? `${(-1) ** position * Math.ceil(position / 2) * 50}px` : "0"};
  top: ${({ isActive }) => (isActive ? `50px` : "0")};
  box-shadow: ${({ isActive }) => (isActive ? `0 4px 10px 0 gray` : `0`)};
`;