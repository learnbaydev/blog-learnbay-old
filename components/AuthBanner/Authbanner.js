import styles from './authBanner.module.css';

const Banner = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
