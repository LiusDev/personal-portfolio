import React from "react";
import { Title } from "..";

const Contact = ({ id, className }) => {
    return (
        <section id={id} className={`w-full md:mt-0 px-6 md:px-8 ${className}`}>
            <div className="max-w-screen-lg m-auto">
                <Title>Contact</Title>
            </div>
        </section>
    );
};

export default Contact;
