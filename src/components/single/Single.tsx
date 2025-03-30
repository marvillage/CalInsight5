import { singleUser } from "../../data";
import "./single.scss";


const Single = () => {
  const data = singleUser;

  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <a href="/users" className="backButton">
              Back to Users
            </a>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={data.img}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.title}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.info.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data.info.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {data.info.fullname}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{data.info.status}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
        
        </div>
      </div>
    </div>
  );
};

export default Single;
