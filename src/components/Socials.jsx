/* @format */

import Link from "./Link";
import image from "../images/avatar-jessica.jpeg";
import "../style.css";

export default function Socials() {
  return (
    <div className='container'>
      <img src={image} />
      <div className='text'>
        <div className='name'>
          <label> Jessica Randall</label>
        </div>
        <div className='state'>
          <span> London, United Kingdom</span>
        </div>

        <div className='front'>
          <label>"Front-end developer and avid reader."</label>
        </div>
      </div>

      <Link />
    </div>
  );
}
