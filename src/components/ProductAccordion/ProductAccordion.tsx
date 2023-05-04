import s from "./Accordion.module.css"
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import React from "react";





const ProductAccordion:React.FC = ({cancel_info,description}:{cancel_info:string,description:string}) => {
    return (
        <div className="row accordion">
            <div className={s.accElementDiv}>
                <Accordion className={s.accContainer}>
                    <AccordionSummary className={s.accSummary}
                                      expandIcon={<svg width="14" height="7" viewBox="0 0 14 7" fill="none"
                                                       xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 1L7 6L13 1" stroke="#797979"/>
                                      </svg>
                                      }
                                      aria-controls="panel2a-content"
                                      id="panel2a-header2"
                    >
                        <span>Tour overview</span>
                    </AccordionSummary>
                    <AccordionDetails className={s.accDetails}>
                    <span dangerouslySetInnerHTML={{__html:description}}>
                    </span>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className={s.accElementDiv}>
                <Accordion className={s.accContainer}>
                    <AccordionSummary className={s.accSummary}
                                      expandIcon={<svg width="14" height="7" viewBox="0 0 14 7" fill="none"
                                                       xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 1L7 6L13 1" stroke="#797979"/>
                                      </svg>
                                      }
                                      aria-controls="panel2a-content"
                                      id="panel2a-header2"
                    >
                        <span>What included</span>
                    </AccordionSummary>
                    <AccordionDetails className={s.accDetails}>
                    <span>
                        Join a pilot on a unique flight and share the cost with them, a nice way to discover the city
                        skyline aboard a private plane. Your pilot will happily share their passion for flying and take
                        you on a memorable trip around London's area, providing stunning views of the capital's suburbs.
                        Please note this aircraft is not allowed to fly over London and the flight schedule is subject
                        to changes depending on the pilot’s availability. Wingly is the leading Flight Sharing platform
                        in Europe. This is not a commercial flight but a private flight operated under the European cost
                        sharing rule (EASA). We provide an insurance by Allianz on each flight. Be aware that
                        cost-shared flights don’t have the same safety rules as commercial air transport flights. The
                        risks involved can be higher, as private pilots are not subject to the same level of continuous
                        checks and strict oversight rules from the authority. They still apply safety checks for every
                        flight and are responsible for passengers safety.
                    </span>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className={s.accElementDiv}>
                <Accordion className={s.accContainer}>
                    <AccordionSummary className={s.accSummary}
                                      expandIcon={<svg width="14" height="7" viewBox="0 0 14 7" fill="none"
                                                       xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 1L7 6L13 1" stroke="#797979"/>
                                      </svg>
                                      }
                                      aria-controls="panel2a-content"
                                      id="panel2a-header2"
                    >
                        <span>Cancelation info</span>
                    </AccordionSummary>
                    <AccordionDetails className={s.accDetails}>
                    <span>
                        {cancel_info || ""}
                    </span>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default ProductAccordion;