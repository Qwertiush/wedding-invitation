import ScrollButton from '../primitives/Button/ScrollButton/ScrollButton';
import Section from '../primitives/section/Section'
import styles from './Invite.module.css'

type Props = {
  fullName: string;
};

export default function Invite({fullName} : Props) {
  const couple = fullName.split(" i ");

  const isCouple = couple.length === 2;

  return (
    <Section id='invitation'>
        <div className={styles.parentComponent}>
          <div className={`${styles.name} reveal-down delay-1`}>
            {isCouple ? (
              <>
                <div>{couple[0]}</div>
                <div>i</div>
                <div>{couple[1]}</div>
              </>
            ) : (
              <div>{fullName}</div>
            )}
          </div>
          <div className={`${styles.title} reveal-down delay-2`}>Mam zaszczyt zaprosić {isCouple ? "Was" : "Cię wraz z osobą towarzyszącą"}</div>
          <div className={`${styles.description} reveal-up delay-2-1`}>Na uroczystość weselenia sie</div>
          <div className={`${styles.description} reveal-up delay-2-1`}>Która odbędzie się 20.20.2000 roku pańskiego, pod Kasztanem o godzinie 17:00, czyli w samo południe.</div>
          <div className='reveal-up delay-2-2'>
            <ScrollButton target='gifts'>▽ Więcej informacji ▽</ScrollButton>
          </div>
        </div>
    </Section>
  )
}
