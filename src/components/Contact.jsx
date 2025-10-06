import React from "react";

const Contact = () => (
  <section id="Contact" className="py-16 px-6 bg-[#1A237E] text-white text-center">
    
    <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
      Connect with KAIM Labs
    </h2>

    <p className="mb-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
      Whether you’re a learner, professional, or innovator, we welcome collaboration, mentorship, and project partnerships.  
      Reach out to explore opportunities or seek guidance.
    </p>

    <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-6">
      <p className="text-lg">
        Email:{" "}
        <a href="mailto:contact@kaimlabs.space" className="underline font-semibold hover:text-green-400 transition-colors">
          contact@kaimlabs.space
        </a>
      </p>
      <p className="text-lg">
        WhatsApp / Telegram:{" "}
        <a href="https://wa.me/+919541780035" className="underline font-semibold hover:text-green-400 transition-colors">
          +91-9541780035
        </a>
      </p>
    </div>

    <a
      href="mailto:contact@kaimlabs.space"
      className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
    >
      Join Our Community
    </a>

  </section>
);

export default Contact;

