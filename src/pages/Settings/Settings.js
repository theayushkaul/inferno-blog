import "./settings.css";
import Sidebar from "../../Components/Sidebar/sidebar";
import {AiOutlinePicture} from "react-icons/ai"
export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput"><div className="button-container">
              <i className="settingsPPIcon"><AiOutlinePicture/></i>{" "}
              </div>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Ayush" name="name" className='non-focus'/>
          <label>Email</label>
          <input type="email" placeholder="ayush@gmail.com" name="email" className='non-focus'/>
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" className='non-focus'/>
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}