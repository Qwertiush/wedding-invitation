import styles from './Section.module.css'

type Props = {
  children: React.ReactNode;
  id?: string;
};

export default function Section({children, id} : Props) {
  return (
    <section id={id} className={styles.parentContainer}>
        {children}
    </section>
  )
}
