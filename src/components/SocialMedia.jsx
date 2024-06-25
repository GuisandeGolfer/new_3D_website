import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { socialMediaLinks } from "../constants";

function ServiceCard({ index, name, icon, link }) {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-3 rounded-lg md:w-[90px] w-full"
      >
        <div
          className="relative w-full h-[40px]"
          onClick={() => window.open(link, "_blank", "noreferrer")}
        >
          <img src={icon} alt={name} className="w-full h-full rounded-lg" />
        </div>
      </Tilt>
    </motion.div>
  );
}

function SocialMedia() {
  return (
    <>
      {socialMediaLinks.map((social, index) => (
        <MDBBtn
          key={`project-${index}`}
          index={index}
          //style={{ backgroundColor: "#55acee" }}
          href={social.link}
        >
          <MDBIcon className="me-2" fab icon={social.name} /> {social.name}
        </MDBBtn>
      ))}
    </>
  );
}

export default SocialMedia;

//TODO: fix the blue background issue that probably was inherited through the CSS rules or something.
