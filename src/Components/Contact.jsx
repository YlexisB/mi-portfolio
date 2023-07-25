import React from "react";
import { CONTACT_STUFF } from "../constants";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact sec-pad dynamicBg">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main heading-sec__main--lt">
              {CONTACT_STUFF.contact}
            </span>
            <span className="heading-sec__sub heading-sec__sub--lt">
              {CONTACT_STUFF.contact1}
              <strong>{CONTACT_STUFF.contact2}</strong>
              {CONTACT_STUFF.contact3}
            </span>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Contact;
