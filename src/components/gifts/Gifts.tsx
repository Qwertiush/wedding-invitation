import ScrollButton from '../primitives/Button/ScrollButton/ScrollButton'
import Section from '../primitives/section/Section'
import styles from './Gifts.module.css'

export default function Gifts() {
  return (
    <Section id='gifts'>
        <div className={styles.parentContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.description} reveal-down delay-1`}>
              Nie musisz przyność, żednych kwiatów, czy prezentów.
              <br/>
              Wystaczy że przyjdziesz z dobrym humorem i 💪 siłą 💪 na zabawę do białego rana :).
            </div>
            <div className={styles.divider}></div>
            <div className={`${styles.description2} reveal-up delay-2`}>
              <div className={styles.dynamicEmogi}>🤣</div> <div>Aczkolwiek chętnie przyjmiemy butelkę, pieniądze albo zdrapkę czy kupon na loterię.</div> <div className={styles.dynamicEmogi}>🤣</div>
            </div>
            <div className='reveal-up delay-2-1'>
              <ScrollButton target='confirmation'>▽ Przejdź do potwierdzenia ▽</ScrollButton>
            </div>
            </div>
        </div>
    </Section>
  )
}
