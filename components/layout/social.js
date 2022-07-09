import styles from './social.module.css';
import Link from "next/link";
import {getAllSocial} from "../../data/social";

const Social = () => {

    const socials = getAllSocial();

    return (
      <div className={`${styles.social}`}>
          <ul>
              {socials.map((social) => (
                  <li key={social.id}>
                      <Link href={social.link}>
                          <a>
                              <i className={social.icon}></i>
                          </a>
                      </Link>
                  </li>
              ))}
          </ul>
      </div>
    );
};

export default Social;