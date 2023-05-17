import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "@/redux/profile_Reducer";
import Link from "next/link";
import {Field, Form, Formik} from "formik";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useRouter } from 'next/router';




const Authorization = () => {
    const router = useRouter();
    const dispatch: any = useDispatch();
    const [isVerified, setIsVerified] = useState(false);
    const isAuth = useSelector((state:any) => state.profilePage.isAuth);
    //const role = useSelector((state) => state.profilePage.role);
    //const usertype = useSelector((state: any) => state.auth?.usertype);
    const loginUser = useSelector(() => login);


    if(isAuth){
        router.push('/');
        return null
        }
     else {
    return (<>
        <Header />
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
                                                value={values.email}/>
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
        </div>
        <Footer />
    </>)

    }
};

export default Authorization;
