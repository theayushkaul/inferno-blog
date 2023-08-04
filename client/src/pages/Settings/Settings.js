import "./settings.css";
import Sidebar from "../../Components/Sidebar/sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/context";
import axios from "axios";
import {AiOutlinePicture} from "react-icons/ai"
export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`/users/${user._id}`, {
        data: { userId: user._id },
      });
      dispatch({ type: "LOGOUT" });
      window.location.replace("/");
    } catch (err) {}
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete" onClick={handleDelete}>Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF+user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
            <div className="button-container">
              <i className="settingsPPIcon"><AiOutlinePicture/></i>{" "}
              </div>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
            className='non-focus'
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
            className='non-focus'
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className='non-focus'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}