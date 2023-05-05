import s from "./Accordion.module.css"
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import React from "react";





const ProductAccordion = ({cancel_info,description}:any) => {
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