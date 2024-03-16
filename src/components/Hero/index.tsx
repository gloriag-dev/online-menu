import styles from "./Hero.module.scss";
export const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>Taste flavours from around the world</h1>
      <h2>subtitle</h2>
    </div>
  );
};
export default Hero;
