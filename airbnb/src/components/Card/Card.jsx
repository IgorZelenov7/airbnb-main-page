import starIcon from './star.svg';
import styles from './style.module.scss';

const Card = () => {
  return (
    <article className={styles.card}>
      <img src='./img/objects/01.jpg' srcSet='./img/objects/01@2x.jpg 2x' alt='photo' className={styles.img} />
      <div className={styles.descWrapper}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Knoxville, Tennessee</h3>
          <div className={styles.rating}>
            <img src={starIcon} alt='star' />
            5.0
          </div>
        </div>
        <p className={styles.desc}>Mountain and lake views</p>
        <p className={styles.date}>Apr 16 – 21</p>
        <p className={styles.price}>
          <strong>$388</strong> night
        </p>
      </div>
    </article>
  );
};
export default Card;
