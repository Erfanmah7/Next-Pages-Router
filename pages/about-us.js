import styles from "../styles/about.module.scss";

function About() {
  return (
    <div>
      <h1 className={styles.h1}>About</h1>
      <p>test</p>

      <style jsx>{`
        p {
          background-color: red;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default About;
