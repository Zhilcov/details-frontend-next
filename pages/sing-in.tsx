import styles from "../styles/Home.module.css";
import Head from "next/head";
import SignIn from "../components/Auth/SingIn";

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