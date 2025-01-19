import React, { HTMLAttributeAnchorTarget, useState } from "react";
import "./PersonTile.css";
import Transition from "../Transition/Transition";
import { Facebook, GithubIcon, Globe, Linkedin, Slack, TwitterIcon, XIcon, YoutubeIcon } from "lucide-react";

type SocialSite = "linkedin" | "x" | "facebook" | "instagram" | "personal_site" | "github" | "youtube";
type PersonTileSocial = {
  icon: SocialSite;
  style?: React.CSSProperties;
  href?: string;
  href_target?: HTMLAttributeAnchorTarget;
};

export default function PersonTile({
  tileStyle,
  previewTitle,
  previewSubTitle,
  fullTitle,
  fullSubtitle,
  fullDescription,
  socials,
}: {
  tileStyle?: React.CSSProperties;
  previewTitle?: string;
  previewSubTitle?: string;
  fullTitle?: string;
  fullSubtitle?: string;
  fullDescription?: string;
  socials?: PersonTileSocial[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          position: "relative",
          width: 160,
          height: 200,
          borderRadius: 10,
          backgroundColor: "grey",
          overflow: "hidden",
          ...tileStyle,
        }}
      >
        <img
          style={{ height: "100%", objectFit: "cover" }}
          src="/src/assets/Gael.png"
        />
        <div style={{ position: "absolute", bottom: 0, left: 0, margin: 10 }}>
          <p style={{ color: "white", margin: 0, fontSize: "1.25rem" }}>
            {previewTitle || "Title"}
          </p>
          <p style={{ color: "white", margin: 0, fontSize: "0.75rem" }}>
            {previewSubTitle || "Subtitle"}
          </p>
        </div>
      </div>
      <PersonTileExpanded
        t={fullTitle}
        sT={fullSubtitle}
        desc={fullDescription}
        setOpen={setOpen}
        open={open}
        socials={socials}
      />
    </>
  );
}


const SocialIconStyle: React.CSSProperties = {
  margin: 3,
  padding: 3,
  borderRadius: 10,
  border: '1px solid #000a',
  cursor: 'pointer'
};

function PersonTileExpanded({
  open,
  setOpen,
  style,
  t,
  sT,
  desc,
  socials,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  style?: React.CSSProperties;
  t?: string;
  sT?: string;
  desc?: string;
  socials?: PersonTileSocial[];
}) {

  function HandleClickSocialIcon(href?: string, href_target?: HTMLAttributeAnchorTarget) {
    href && window.open(href, href_target || '_blank');
  }

  return (
    <Transition
      delayAfter={300}
      transitionSpeedMS={200}
      numFrames={50}
      type="fade"
      toggle={open}
      forceStyle={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100%",
        zIndex: 1000
      }}
    >
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "#0004",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={'expandedImgAndCardContainer'}>
          <Transition
            transitionSpeedMS={300}
            hideOnToggleOff={false}
            type="wipe"
            toggle={open}
            delayBefore={200}
            delayAfter={100}
            easing="inOutQuart"
            forceClass="imageShiftMobile"
          >
            <div
              style={style}
              className={'expandedImgContainer'}
            >
              <img
                style={{ height: "100%", objectFit: "cover", position: 'relative' }}
                src="/src/assets/Gael.png"
              />
            </div>
          </Transition>
          <Transition
            transitionSpeedMS={400}
            delayBefore={200}
            hideOnToggleOff={false}
            type="wipe"
            toggle={open}
            easing="inOutQuart"
          >
            <div
              className={'expandedDescriptionCard'}
            >
              <div style={{ margin: 10 }}>
                <p
                  style={{
                    color: "black",
                    margin: 0,
                    fontSize: "1.5rem",
                    textWrap: "nowrap",
                    marginBottom: -5
                  }}
                  className={'expandedCardText'}
                >
                  {t || "Title"}
                </p>
                <p
                  style={{
                    color: "black",
                    margin: 0,
                    fontSize: "1rem",
                    textWrap: "nowrap",
                    fontWeight: 300,
                    fontStyle: 'italic'
                  }}
                  className={'expandedCardText'}
                >
                  {sT || "Subtitle"}
                </p>
                <p
                  className={'expandedCardText expandedCardFullDescription'}
                >
                  {desc || "Description"}
                </p>
              </div>
              <div
                className="expandedCardIconContainer"
              >
                {socials?.map(({ icon, style, href, href_target }, index) => {
                  const key = `Social_Icon_${index}`;
                  switch (icon) {
                    case 'personal_site':
                      return <Globe size={40} strokeWidth={1} style={{...SocialIconStyle, ...style}} onClick={() => HandleClickSocialIcon(href, href_target)} key={key} />
                      case 'facebook':
                        return <Facebook size={40} strokeWidth={1} style={{...SocialIconStyle, ...style}} onClick={() => HandleClickSocialIcon(href, href_target)} key={key} />
                      case 'instagram':
                        return <Slack size={40} strokeWidth={1} style={{...SocialIconStyle, ...style}} onClick={() => HandleClickSocialIcon(href, href_target)} key={key} />
                      case 'linkedin':
                        return <Linkedin size={40} strokeWidth={1} style={{...SocialIconStyle, ...style}} onClick={() => HandleClickSocialIcon(href, href_target)} key={key} />
                      case 'x':
                        return <TwitterIcon size={40} strokeWidth={1} style={{...SocialIconStyle, ...style}} onClick={() => HandleClickSocialIcon(href, href_target)} key={key} />
                      case 'github':
                        return <GithubIcon size={40} strokeWidth={1} style={{...SocialIconStyle, ...style}} onClick={() => HandleClickSocialIcon(href, href_target)} key={key} />
                      case 'youtube':
                        return <YoutubeIcon size={40} strokeWidth={1} style={{...SocialIconStyle, ...style}} onClick={() => HandleClickSocialIcon(href, href_target)} key={key} />
                  }
                  // <Facebook size={40} strokeWidth={1} style={SocialIconStyle}  />
                  // <Slack size={40} strokeWidth={1} style={SocialIconStyle}  />
                  // <TwitterIcon size={40} strokeWidth={1} style={SocialIconStyle} />
                })}
              </div>
              <XIcon style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }} onClick={() => setOpen(false)}/>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  );
}
