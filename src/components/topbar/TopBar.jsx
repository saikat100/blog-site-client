import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import logo from "../../img/logo.png";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
		<div className="top">
			<div className="topLeft">
				<img className="topIcon" src={logo} alt="" />
				{/* <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i> */}
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link iconForPc" to="/">
							HOME
						</Link>
						<Link className="link" to="/">
							<i className="fas fa-home iconForMobile"></i>
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link iconForPc" to="/">
							ABOUT
						</Link>
						<Link className="link" to="/">
							<i className="fa fa-fas fa-user iconForMobile"></i>
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link iconForPc" to="/">
							CONTACT
						</Link>
						<Link className="link" to="/">
							<i className="fas fa-phone-square-alt iconForMobile"></i>
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link iconForPc" to="/write">
							WRITE
						</Link>
						<Link className="link" to="/write">
							<i className="fas fa-user-edit iconForMobile"></i>
						</Link>
					</li>
					<li className="topListItem iconForPc" onClick={handleLogout}>
						{user && "LOGOUT"}
					</li>
					<li className="topListItem iconForMobile" onClick={handleLogout}>
						{user && <i class="fas fa-sign-in-alt iconForMobile"></i>}
					</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<Link to="/settings">
						<img className="topImg" src={PF + user.profilePic} alt="" />
					</Link>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link className="link iconForPc" to="/login">
								LOGIN
							</Link>
							<Link className="link" to="/login">
								<i class="fas fa-sign-in-alt iconForMobile"></i>
							</Link>
						</li>
						<li className="topListItem">
							<Link className="link iconForPc" to="/register">
								REGISTER
							</Link>
							<Link className="link" to="/register">
								<i class="fas fa-user-plus iconForMobile"></i>
							</Link>
						</li>
					</ul>
				)}
				{/* <i className="topSearchIcon fas fa-search"></i> */}
			</div>
		</div>
	);
}
