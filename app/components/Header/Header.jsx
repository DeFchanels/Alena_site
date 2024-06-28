import Styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={Styles.side_menu}>
      <div className={Styles.site_logo}>
        <h2>Alena Asrieva</h2>
      </div>
      <ul className={Styles.pages_list}>
      <a href="/storyboards" className={Styles.menu_link}>
          <li className={Styles.list_element}>Storyboards</li>
        </a>
        <a href="/animation" className={Styles.menu_link}>
          <li className={Styles.list_element}>Animation</li>
        </a>
        <a href="/illustration" className={Styles.menu_link}>
          <li className={Styles.list_element}>Illustration</li>
        </a>
        <a href="/about" className={Styles.menu_link}>
          <li className={Styles.list_element}>About</li>
        </a>
        <a href="/contacts" className={Styles.menu_link}>
          <li className={Styles.list_element}>Contacts</li>
        </a>
      </ul>
    </header>
  );
};
