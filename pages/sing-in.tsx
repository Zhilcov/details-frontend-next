import styles from "../styles/Home.module.css";
import Head from "next/head";
import SignIn from "../components/auth/SingIn";

export default function SingInPage() {
    return (
        <>
            <Head>
                <title>Вход</title>
            </Head>
            <SignIn />
        </>
    )
}