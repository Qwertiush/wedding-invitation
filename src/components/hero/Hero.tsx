import ScrollButton from '../primitives/Button/ScrollButton/ScrollButton'
import Section from '../primitives/section/Section'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <Section>
      <div className={styles.backgroundPanel}>
        <div className={styles.overlay}>
          <div className={`${styles.leftOrnament}`}></div>
          <div className={styles.rightOrnament}></div>
          <div className={styles.frontPanel}>
            <div className={`${styles.title} reveal-down delay-1`}>Zaproszenie na ślub</div>
            <div className={styles.namesContainer}>
              <div className={`${styles.name} reveal-left delay-2`} >Roma Nowaczyk</div>
              <div className={`${styles.name} reveal delay-2`}>i</div>
              <div className={`${styles.name} reveal-right delay-2`}>Robert Rycerz</div>
            </div>
            <div className='reveal-up delay-2-1'>
              <ScrollButton target='invitation'>▽ Otwórz zaproszenie ▽</ScrollButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
