import Link from 'next/link';
import Image from 'next/image';
import styles from '/styles/header.module.css';

const Header = () => {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Logo on the left */}
          <div className={styles.logo}>
            <Link href="/" passHref>
              <Image src="/images/wisestrats_logo.png" alt="Wise Strategies Logo" width={150} height={50} />
            </Link>
          </div>
  
          {/* Navigation Links on the right */}
          <nav className={styles.nav}> 
            <Link href="/" passHref>Home</Link>
            <Link href="/investing" passHref>Investing</Link>
            <Link href="/consulting" passHref>Consulting</Link>
            <Link href="/careers" passHref>Careers</Link>
            <Link href="/contact-us" passHref>Contact us</Link>
            {/* LinkedIn icon */}
            <Link href="https://www.linkedin.com/company/pearl-io" passHref>
              <img src="/images/linkedin.png" alt="LinkedIn" className={styles.linkedinIcon} width={20} height={20} />
            </Link>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;


// import Link from 'next/link';
// import styles from '../app/header.css';

// const Header = () => {
//   return (
//     <header className={styles.header}>
//       <div className="container">
//         <Link href="/">
//           <img src="/images/logo.png" alt="WiseStrats Logo" />
//         </Link>
//         <nav>
//           <Link href="/about">About</Link>
//           <Link href="/services">Services</Link>
//           <Link href="/contact">Contact</Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

