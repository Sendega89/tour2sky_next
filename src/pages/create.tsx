import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import s from "../styles/AuthProfiles.module.css"
import Link from "next/link";
import {Field, Form, Formik} from "formik";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {createAccount, getUsertype} from "@/redux/profile_Reducer";
import {useRouter} from "next/router";

const Create = () => {
    const router = useRouter();
    const dispatch:any = useDispatch();
    const createdSuccess = useSelector((state: any) => state.auth?.createdSuccess);
    const usertype = useSelector((state: any) => state.auth?.usertype);
    const  getCreateAccount= useSelector(()=>createAccount);
    const  getOneUsertype= useSelector(()=>getUsertype);


    useEffect(() => {
       dispatch(getOneUsertype());
    }, [])
    if (createdSuccess) {
        router.push('authorization');
        return null
    }

    return (
        <>
            <Header />
            <div className={s.authContainer}>
                <div id="create" className="white-popup mfp-with-anim mfp-hide order_popup">
                    <div className="popup_content">
                        <div className="h3 center">Create an account</div>
                        <div className="popup_form">

                            <div className="login_wrap">
                                <Formik initialValues={{
                                    name: "",
                                    surname: "",
                                    email: "",
                                    password: "",
                                    phone: "",
                                    type: null,
                                    company_name: "",
                                    company_type: null,

                                }} onSubmit={(values, submitProps) => {
                                   dispatch(getCreateAccount(values, submitProps.setStatus));
                                }}>
                                    {({values, status, setFieldValue}) => (
                                        <Form>
                                            <div>
                                                {status && status.error.name &&
                                                    <span className={s.error}>{status.error.name}</span>}
                                                <Field placeholder={"First name"}
                                                       type={"text"}
                                                       name={"name"}
                                                       value={values.name}
                                                       className={status && status.error.name && s.error}/></div>

                                            <div>
                                                {status && status.error.surname &&
                                                    <span className={s.error}>{status.error.surname}</span>}
                                                <Field type="text"
                                                       placeholder={"Last name"}
                                                       name={"surname"}
                                                       value={values.surname}
                                                       className={status && status.error.surname && s.error}/></div>

                                            <div>
                                                {status && status.error.email &&
                                                    <span className={s.error}>{status.error.email}</span>}
                                                <Field type="email"
                                                       placeholder={"E-mail"}
                                                       name={"email"}
                                                       value={values.email}
                                                       className={status && status.error.email && s.error}
                                                />
                                            </div>
                                            <div>
                                                {status && status.error.password &&
                                                    <span className={s.error}>{status.error.password}</span>}
                                                <Field type="password"
                                                       placeholder={"Password"}
                                                       name={"password"}
                                                       value={values.password}
                                                       className={status && status.error.password && s.error}
                                                /></div>
                                            <div>
                                                {status && status.error.phone &&
                                                    <span className={s.error}>{status.error.phone}</span>}
                                                <Field type="phone"
                                                       placeholder={"Phone"}
                                                       name={"phone"}
                                                       value={values.phone}
                                                       className={status && status.error.phone && s.error}
                                                /></div>
                                            <div>
                                                {status && status.error.company_name &&
                                                    <span className={s.error}>{status.error.company_name}</span>}
                                                <Field type="text"
                                                       placeholder={"Company Name"}
                                                       name={"company_name"}
                                                       value={values.company_name}
                                                       className={status && status.error.company_name && s.error}
                                                /></div>
                                            <div>
                                                <select onChange={(event) => {
                                                    setFieldValue("type", event.currentTarget.value)
                                                }}>
                                                    <option>Choose necessary type</option>
                                                    {usertype?.map((i:any) =>
                                                        <option key={i.id} value={i.id}>{i.name}</option>) || ""}
                                                </select>
                                            </div>
                                            <button type="submit">Create an account</button>
                                        </Form>)}
                                </Formik>


                            </div>


                            <div className="row authorization_link">
                                Or <Link href="/authorization" className="create">log in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>)
};

export default Create;