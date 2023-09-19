import styles from './Navbar.module.css'

export default function Navbar() {

  const ScrollToTop = (event) => {
    window.scrollTo( {top: 0, behavior: 'smooth'} );
  }

  return (
    <div className={styles.navbar} onClick={ScrollToTop}>
      <h1 className={styles.test}>Raymond Gaijin Tran</h1>
    </div>
  )
}
