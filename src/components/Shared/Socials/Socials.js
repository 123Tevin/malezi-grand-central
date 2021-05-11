import sprite from "../../../assets/icons/sprite.svg";
import "./Socials.scss";

export default function Socials({ twitter, fb, instagram, linkedin, youtube }) {
  return (
    <div className="social">
      <ul className="social__list">
        <li className="social__list--item">
          <a href={twitter} target="blank" className="social__list--link">
            <svg className="social__list--icon">
              <use xlinkHref={`${sprite}#icon-twitter`} fill="#077da2" />
            </svg>
            <span className="social__list--text">Twitter</span>
          </a>
        </li>
        <li className="social__list--item">
          <a href={fb} target="blank" className="social__list--link">
            <svg className="social__list--icon ">
              <use xlinkHref={`${sprite}#icon-facebook`} fill="#077da2" />
            </svg>
            <span className="social__list--text">Facebook</span>
          </a>
        </li>
        <li className="social__list--item">
          <a href={linkedin} target="blank" className="social__list--link">
            <svg className="social__list--icon">
              <use xlinkHref={`${sprite}#icon-linkedin2`} fill="#077da2" />
            </svg>
            <span className="social__list--text">LinkedIn</span>
          </a>
        </li>
        <li className="social__list--item">
          <a href={instagram} target="blank" className="social__list--link">
            <svg className="social__list--icon">
              <use xlinkHref={`${sprite}#icon-instagram`} fill="#077da2" />
            </svg>
            <span className="social__list--text">Instagram</span>
          </a>
        </li>
        <li className="social__list--item">
          <a href={youtube} target="blank" className="social__list--link">
            <svg className="social__list--icon">
              <use xlinkHref={`${sprite}#icon-youtube`} fill="#077da2" />
            </svg>
            <span className="social__list--text">YouTube</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
