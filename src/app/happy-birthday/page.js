"use client";
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
            {`Happiest birthday to my Bubuuuu!! ❤️ my favourite person my butter
            half my whole world...You coming to my life was the bestest thing
            ever happened to me 😘. Wish I could go back to the day I saw you
            and tell myself...man she she really is the one for you..never let
            this one go...u light my world like nobody else...u don't know but
            you are the prettiest girl I know..So beautiful 😍. I love you this
            much because...well...sun doesn't need a reason to rise...does stars
            need a reason to shine...Have the most bestest birthday my
            love.Sometimes I just look and I feel I won the best girl in the
            world 💘💝. I love you soo much my kuttyy..there is soo much I wanna
            say..but words relly can't describe my feelings for you....I am here
            for you.`}
          </p>
          <p className={`${styles.name} ${styles.birthdayText}`}>Mr.Bean ❤️</p>
        </div>
      </div>
    </div>
  );
}
