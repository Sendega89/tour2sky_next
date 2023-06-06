import React from 'react';
import {List, styled} from "@mui/material";
import usePagination from "@mui/material/usePagination";

const PaginatorContainer = ({totalItemCount,pageSize,currentPage,totalPages,links,setPage}) => {
    const List = styled('ul')({
        display:"flex",
        justifyContent:"center",
        padding: "24px 0 54px 0",
        marginTop: "28px",
        borderTop: "1px solid #ecf0f1",
        textAlign: "center",
        fontSize: "22px",
        "& li":{
            display: "inline-block"
        },
        "& li a":{
            paddingTop: "7px",
            display: "inline-block",
            border: "1px solid #ECF0F1",
            margin:" 0 4px",
            borderRadius: "50%",
            width: "48px",
            height: "48px",
            textAlign: "center",
            color: "#B6C2CC",
            backgroundImage: "none",
        },
        "& li a:hover":{
            boxShadow: "0 8px 10px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)",
            backgroundColor: "#ffffff",
            color: "#2980b9",
            cursor: "pointer",
            textDecoration: "none",
            transition: "0.5s",
            "& li a.active": {
                boxShadow: "0 8px 10px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)",
                backgroundColor: "#ffffff",
                color: "#2980b9",
                cursor: "pointer",
                textDecoration: "none",
                transition: "0.5s",
            }
        }

    })


    const handleChange =(event) => {
        setPage(event.currentTarget.name)
    }
    const { items } = usePagination({
        count:totalPages,
        hidePrevButton:true,
        hideNextButton:true,
        page:currentPage||null,
        onChange:handleChange,

    });
    return (
        <nav>
            <List>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;
                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        if(page > 1){
                            children = (
                                <a name={page}
                                   type="button"
                                   style={{
                                       boxShadow:selected ?  "0 8px 10px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)": undefined,
                                       backgroundColor:selected ?  "#ffffff": undefined,
                                       color:selected ?  "#2980b9": undefined,
                                       cursor:selected ?  "pointer": undefined,
                                       textDecoration:selected ?  "none": undefined,
                                       transition:selected ?  "0.5s": undefined,
                                       fontWeight: selected ? '' : undefined,
                                   }}
                                   {...item}
                                >
                                    {page}
                                </a>
                            );
                        }

                    } else {
                        children = (
                            <a type="button" {...item}>
                                {type}
                            </a>
                        );
                    }
                    return <li key={index}>{children}</li>
                })}
            </List>
        </nav>
    );
};

export default PaginatorContainer;