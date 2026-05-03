import Section from "../primitives/section/Section";
import styles from './Confirmation.module.css'

export default function Confirmation() {
  return (
    <Section id="confirmation">
        <div className={styles.parentContainer}>
          <div className={styles.description}>
            Bylibyśmy wdźięczni za potwierdzenie swojego przybycia do czerwca 2026 roku.
          </div>
        </div>
    </Section>
  )
}
