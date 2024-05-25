import Styles from "./About.module.css";

export const About = () => {
  return (
    <div className={Styles.about}>
      <h1 className={Styles.center_h}> About me </h1>
      <img className={Styles.avatar} src="/Ava.png" />
      <div className={Styles.about_text}>
        <p>
          My name is Alyona and I was born in Russia, living here my whole life.
          From a young age I was introduced to the art of animation and now,
          years later, I am working to make it my full-time job.
        </p>
        <p>
          I started my serious art journey in 2015, when I joined an art studio
          lead by Olga Bor. For 5 years I have learned academism, gaining a
          certain level of skill in techniques such as watercolor and oil
          painting and pencil art. From 2018 to 2020 I have completed courses in
          the Russian State University of Cinematography named after
          S.A.Gerasimov, a.k.a VGIK, learning to create storyboards and starting
          my education in animation history. In 2020 I was accepted into Higher
          School of Economics: Art and Design School to study 2D animation.
          Here, I have worked on my first animated short films: "Homo Comfortus"
          and "Smoke Without Fire".
        </p>
        <p>
          Now, I am looking to find work and further my skills in art and
          animation.
        </p>
      </div>
    </div>
  );
};
