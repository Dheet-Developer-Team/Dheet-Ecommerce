import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Eo_circle_blue_letter-d.svg/768px-Eo_circle_blue_letter-d.svg.png"
          alt=""
        />
        <h2>Dheet Shop</h2>
      </div>
      <input
        type="text"
        placeholder="Search items, collections, and accounts"
      />
      <div className="right-nav">
        <ul>
          <li>
            <a href="">Marketplace</a>
          </li>
          <li>
            <a href="">Stats</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
          <li>
            <a href="">Create</a>
          </li>
        </ul>

        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle fill="none" cx="12" cy="7" r="3"></circle>
          <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"></path>
        </svg>

        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 12H18V16H16z"></path>
          <path d="M20,7V5c0-1.103-0.897-2-2-2H5C3.346,3,2,4.346,2,6v12c0,2.201,1.794,3,3,3h15c1.103,0,2-0.897,2-2V9 C22,7.897,21.103,7,20,7z M5,5h13v2H5C4.448,7,4,6.551,4,6S4.448,5,5,5z M20,19H5.012C4.55,18.988,4,18.805,4,18V8.815 C4.314,8.928,4.647,9,5,9h15V19z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
