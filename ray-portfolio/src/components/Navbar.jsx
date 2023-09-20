import styles from './Navbar.module.css'

export default function Navbar() {

  const ScrollToTop = (event) => {
    window.scrollTo( {top: 0, behavior: 'smooth'} );
  }

  return (
    <div className={styles.navbar}>
      <h1 className={styles.header} onClick={ScrollToTop}>Raymond Gaijin Tran</h1>
    </div>
  )
}
