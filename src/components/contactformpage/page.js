import React from "react";
import ContactImage from "./contactimage/page";
import ContactForm from "./contactform/page";

function ContactFormPage() {
  return (
    <div className="w-full h-auto flex justify-between items-center mt-[100px] mobile:flex-col mobile:mt-[20px] mobile:gap-4">
      <ContactImage />
      <ContactForm />
    </div>
  );
}

export default ContactFormPage;
