import "./footer.css";

export default function Footer() {
	return (
		<div className="footerItem">
			<small>
				Designed & Build by
				<a
					href="mailto:saikathossen3@gmail.com"
					style={{ color: "rgb(26 210 14)", marginLeft: "5px"}}
				>
					Saikat Hossain
				</a>
			</small>
			<br />
			<small>
				{new Date().getFullYear()} &copy; copyright | Saikat
			</small>
			<div className="footerSocial">
				<i className="footerIcon fab fa-facebook-square"></i>
				<i className="footerIcon fab fa-twitter-square"></i>
				<i className="footerIcon fab fa-pinterest-square"></i>
				<i className="footerIcon fab fa-instagram-square"></i>
			</div>
		</div>
	);
}
