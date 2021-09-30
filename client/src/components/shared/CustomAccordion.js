import React from "react";

export const AccordionPage = ({ description }) => {
  return (
    <Accordion>
      <AccordionItem toggle="section-1">Details</AccordionItem>
      <AccordionPanel id="section-1">
        <p className="mb-4">
          {(description && description) ||
            "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor."}
        </p>
      </AccordionPanel>
      <AccordionItem toggle="section-2">Paper</AccordionItem>
      <AccordionPanel id="section-2">
        <p className="mb-4">
          This beautifully minimal wedding invitation is adorned with a charming
          leaf illustration. The information is set in a classic typeface, and
          the design is left simple to create a modern, elegant appearance.
          Colors are easily customizable to match your wedding decor.
        </p>
      </AccordionPanel>
      <AccordionItem toggle="section-3">Shipping</AccordionItem>
      <AccordionPanel id="section-3">
        <p className="mb-4">
          This beautifully minimal wedding invitation is adorned with a charming
          leaf illustration. The information is set in a classic typeface, and
          the design is left simple to create a modern, elegant appearance.
          Colors are easily customizable to match your wedding decor.
        </p>
      </AccordionPanel>
    </Accordion>
  );
};

/* Logic */

const Context = React.createContext({});

function Accordion({ children }) {
  const [selected, setSelected] = React.useState();

  const toggleItem = React.useCallback(
    (id) => () => {
      setSelected((prevState) => (prevState !== id ? id : ""));
    },
    []
  );
  return (
    <Context.Provider value={{ selected, toggleItem }}>
      {children}
    </Context.Provider>
  );
}

//custom hook to consume all accordion values
const useAccordion = () => React.useContext(Context);

const style = {
  item: `block focus:outline-none bg-transparent text-[#000000] border-b my-1 p-3 w-[320px]`,
  panel: `overflow-hidden md:overflow-x-hidden transition-height ease duration-300 text-gray-600 w-[320px] text-justify`,
};

function AccordionItem({ toggle, children }) {
  const { selected, toggleItem } = useAccordion();
  return (
    <div role="button" onClick={toggleItem(toggle)} className={style.item}>
      {children}
      <span className="float-right">
        {selected === toggle ? <AngleUpIcon /> : <AngleDownIcon />}
      </span>
    </div>
  );
}

function AccordionPanel({ children, id }) {
  const { selected } = useAccordion();
  const ref = React.useRef();
  const inlineStyle =
    selected === id ? { height: ref.current?.scrollHeight } : { height: 0 };

  return (
    <div ref={ref} id={id} className={style.panel} style={inlineStyle}>
      {children}
    </div>
  );
}

const AngleUpIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="9" r="6.5" stroke="#292D32" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.6875 9C4.6875 8.68934 4.93934 8.4375 5.25 8.4375H14.25C14.5607 8.4375 14.8125 8.68934 14.8125 9C14.8125 9.31066 14.5607 9.5625 14.25 9.5625H5.25C4.93934 9.5625 4.6875 9.31066 4.6875 9Z"
      fill="#292D32"
    />
  </svg>
);

const AngleDownIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="9" r="6.5" stroke="#292D32" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.9375 9C3.9375 8.68934 4.18934 8.4375 4.5 8.4375H13.5C13.8107 8.4375 14.0625 8.68934 14.0625 9C14.0625 9.31066 13.8107 9.5625 13.5 9.5625H4.5C4.18934 9.5625 3.9375 9.31066 3.9375 9Z"
      fill="#292D32"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 3.9375C9.31066 3.9375 9.5625 4.18934 9.5625 4.5V13.5C9.5625 13.8107 9.31066 14.0625 9 14.0625C8.68934 14.0625 8.4375 13.8107 8.4375 13.5V4.5C8.4375 4.18934 8.68934 3.9375 9 3.9375Z"
      fill="#292D32"
    />
  </svg>
);
