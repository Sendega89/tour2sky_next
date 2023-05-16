import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from "../styles/AuthProfiles.module.css"
import {login} from "@/redux/profile_Reducer";
import Link from "next/link";
import {Field, Form, Formik} from "formik";
import Home from "@/pages/index";
import {dividerClasses} from "@mui/material";

const Authorization = () => {
    const dispatch: any = useDispatch();
    const [isVerified, setIsVerified] = useState(false);
    const isAuth = useSelector((state) => state.profilePage.isAuth);
    const role = useSelector((state) => state.profilePage.role);
    const usertype = useSelector((state: any) => state.auth?.usertype);
    const loginUser = useSelector(() => login);

    if(isAuth){
return <div>auth</div>
    } else {
    return (

    <div>
        <div className="white-popup mfp-with-anim mfp-hide order_popup">
            <div className="popup_content">
                <div className="h3 center">Authorization</div>
                <p>Hi and welcome to the Tour2Sky personal account area.<br/> Please, enter your email address in
                    order to verify you. </p>
                <div className="popup_form">

                    <div className="login_wrap">
                        <Formik initialValues={{
                            email: "",
                            password: "",
                        }}
                                onSubmit={(values, submitProps) => {
                                    dispatch(loginUser(values.email, values.password,submitProps.setStatus))
                                }}>
                            {({values, status}) => (
                                <Form>
                                    {status && status.error &&
                                        <div>{status.error}</div>}
                                    <div>
                                        <Field
                                            placeholder={"Your email"}
                                            type={"email"}
                                            name={"email"}
                                            value={values.firstName}/>
                                    </div>

                                    <div>

                                        <Field type="password"
                                               placeholder={"Password"}
                                               name={"password"}
                                               value={values.password}
                                        /></div>

                                    <button type="submit">Log In</button>
                                </Form>)}
                        </Formik>
                    </div>

                    <div className="row authorization_link">
                        New here? <Link href="/create" className="create">Create an
                        account</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>)}
};

export default Authorization;