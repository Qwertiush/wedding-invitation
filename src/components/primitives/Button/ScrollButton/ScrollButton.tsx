import styles from './ScollButton.module.css'

type Props = {
  children: React.ReactNode;
  target: string;
  variant?: 'primary' | 'secondary';
};

export default function ScrollButton({
  children,
  target,
  variant = 'primary',
}: Props) {

    const scrollToSection = () => {
        document.getElementById(target)?.scrollIntoView({
        behavior: 'smooth',
        });
    };

  return (
    <button
      onClick={scrollToSection}
      className={`${styles.button} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}