import React from "react";
import styles from "./styles.module.css";

export default function HappyBirthday() {
  return (
    <div className={styles.birthdayContainer}>
      <div className={styles.birthdayCard}>
        <div className={styles.cardFront}>
          <h3 className={styles.happy}>HAPPY BIRTHDAY BUBU ❤️</h3>
          <div className={styles.balloons}>
            <div className={styles.balloonOne} />
            <div className={styles.balloonTwo} />
            <div className={styles.balloonThree} />
            <div className={styles.balloonFour} />
          </div>
        </div>
        <div className={styles.cardInside}>
          <h3 className={styles.insideCardHeader}>HAPPY BIRTHDAY BUBU ❤️</h3>
          <p className={`${styles.birthdayText}`}>Dear Bubu,</p>
          <p className={`${styles.birthdayText} ${styles.birthdayContent}`}>
            Happy birthday!! I hope your day is filled with lots of love and
            laughter! May all of your birthday wishes come true. Happy
            birthday!! I hope your day is filled with lots of love and laughter!
            May all of your birthday wishes come true. Happy birthday!! I hope
            your day is filled with lots of love and laughter! May all of your
            birthday wishes come true. Happy birthday!! I hope your day is
            filled with lots of love and laughter! May all of your birthday
            wishes come true.
          </p>
          <p className={`${styles.name} ${styles.birthdayText}`}>Mr.Bean ❤️</p>
        </div>
      </div>
    </div>
  );
}
