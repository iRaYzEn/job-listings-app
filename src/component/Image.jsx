import photosnap from "../images/photosnap.svg";
import manage from "../images/manage.svg";
import insure from "../images/insure.svg";
import faceit from "../images/faceit.svg";
import myHome from "../images/myhome.svg";
import shortly from "../images/shortly.svg";
import eyecam from "../images/eyecam-co.svg";
import account from "../images/account.svg";
import filter from "../images/the-air-filter-company.svg";
import loop from "../images/loop-studios.svg";

function Image({ logo }) {
  const conditions =
    logo == "./images/manage.svg"
      ? manage
      : logo === "./images/insure.svg"
        ? insure
        : logo == "./images/faceit.svg"
          ? faceit
          : logo === "./images/myhome.svg"
            ? myHome
            : logo === "./images/shortly.svg"
              ? shortly
              : logo === "./images/eyecam-co.svg"
                ? eyecam
                : logo === "./images/account.svg"
                  ? account
                  : logo === "./images/the-air-filter-company.svg"
                    ? filter
                    : logo === "./images/loop-studios.svg" ? loop : photosnap;
  return (
    <div className="job__image-box">
      <img className="job__image" src={conditions} alt="job-image" />
    </div>
  );
}

export default Image;
