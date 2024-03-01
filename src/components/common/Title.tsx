import React from "react";

const Title = ({ children }: { children: any }) => {
    return (
        <h3 className="text-tertiary-dark dark:text-secondary-dark font-light text-3xl tracking-[6px] uppercase relative transition-all duration-300 mb-10 before:absolute before:-bottom-[5px] before:left-0 before:h-[1px] before:content-[''] before:w-[60px] before:bg-primary after:absolute after:-bottom-[7px] after:right-0 after:left-[56px] after:w-[6px] after:h-[6px] after:rounded-full after:bg-primary">
            {children}
        </h3>
    );
};

export default Title;
