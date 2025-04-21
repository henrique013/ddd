import styles from '@/components/Footer/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="pageContainer">
        <p>
          Desenvolvido com dedicação por
          <a href="https://github.com/henrique013" target="_blank">
            Henrique Alves <i className="bx bx-link-external"></i>
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
