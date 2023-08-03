import { Link } from "react-router-dom";
import "./BlogPost.css";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
        Protecting the public’s right to free expression
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"><AiOutlineEdit/></i>
            <i className="singlePostIcon far fa-trash-alt"><AiOutlineDelete/></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Ayush">
                Ayush
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          On X, people are free to be their true selves. We believe people of all backgrounds and beliefs should have the right to freely express themselves, so long as they do so within the bounds of the law.

          Free expression is fundamental to a healthy functioning global society - and if it’s taken away, it’s almost impossible to get back. That’s why we will continue to stand up for people’s rights, including over half a billion passionate users who turn to our platform continually.

          Free expression and platform safety are not at odds. We are proving this every day through innovative enforcement policies that have helped reduce hateful content viewed on the platform. Today, more than 99.99% of post impressions are healthy.

          Despite our continued progress, the Center for Countering Digital Hate (CCDH) and its backers have been actively working to assert false and misleading claims encouraging advertisers to pause investment on the platform. X is a free public service funded largely by advertisers. Through the CCDH's scare campaign and its ongoing pressure on brands to prevent the public’s access to free expression, the CCDH is actively working to prevent public dialogue.
          <br />
          <br />
          Recently Brandwatch made X aware that the CCDH gained access to X's data without Brandwatch’s authorization, and that the purported CCDH "research" cited in a Bloomberg article “contained metrics used out of context to make unsubstantiated assertions about X (formerly Twitter).” Additionally, the CCDH has recently scraped X's platform, which is a violation of our terms of service.

          That’s why X has filed a legal claim against the CCDH and its backers. X not only rejects all claims made by the CCDH, but, through our own investigation, we have identified several ways in which the CCDH is actively working to prevent free expression. That includes:

          Targeting people on all platforms who speak about issues the CCDH does not agree with.
          Attempting to coerce the deplatforming of users whose views do not conform to the CCDH's ideological agenda.
          Targeting free-speech organizations by focusing on their revenue stream to remove free services for people.
          Attempting to illegally gain unauthorized access to social media platform data and to misuse that data.
          We have a big responsibility to protect free expression. And we will continue to cooperate with all partners who want to both preserve people’s right to freely express themselves, and equally work to create a safe and healthy space for everyone.
        </p>
      </div>
    </div>
  );
}
