import ScrollButton from '../primitives/Button/ScrollButton/ScrollButton';
import Section from '../primitives/section/Section'
import styles from './Invite.module.css'

type Props = {
  fullName: string;
};

export default function Invite({fullName} : Props) {
  return (
    <Section id='invitation'>
        <div className={styles.parentComponent}>
          <div className={`${styles.title} reveal-down delay-1`}>Zaproszenie dla:</div>
          <div className={`${styles.name} reveal-down delay-2`}>{fullName}</div>
          <div className={`${styles.description} reveal-up delay-2-1`}>Na uroczystość weselenia sie</div>
          <div className={`${styles.description} reveal-up delay-2-1`}>Która odbędzie się 20.20.2000 roku pańskiego, pod Kasztanem o godzinie 17:00, czyli w samo południe.</div>
        </div>
        <div className='reveal-up delay-2-2'>
          <ScrollButton target='gifts'>▽ Więcej informacji ▽</ScrollButton>
        </div>
    </Section>
  )
}
