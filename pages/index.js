import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const clickHandler = () => {
    //بازگشت
    // router.push("/admin");
    //بدون بازگشت
    router.replace("/users");
  };

  return (
    <div className={styles.container}>
      <h1>erfanmah7.ir</h1>
      <ul>
        <li>
          <Link href="/courses">Courses List</Link>
        </li>
        <li>
          <Link href="/users" replace>
            Users List
          </Link>
        </li>
        <li>
          <button onClick={clickHandler}>Login</button>
        </li>
      </ul>
    </div>
  );
}
