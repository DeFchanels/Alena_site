import Styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <>
        <h1 className={Styles.contact_header}>Contact me</h1>
        <h2 className={Styles.email}>verysmgiant@gmail.com</h2>
        <div className={Styles.buttons}>
            <a href="https://twitter.com/verysmallgiant1" className={Styles.button_link}>
                <button className={Styles.button}>Twitter</button>
            </a>
            <a href="https://www.tumblr.com/blog/very-small-giant" className={Styles.button_link}>
                <button className={Styles.button}>Tumblr</button>
            </a>
            <a href="https://vimeo.com/verysmallgiant" className={Styles.button_link}>
                <button className={Styles.button}>Vimeo</button>
            </a>
        </div>
    </>
  );
};
