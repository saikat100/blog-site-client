import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get("/categories");
			setCats(res.data);
		};
		getCats();
	}, []);
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					src="https://res.cloudinary.com/saikathossain/image/upload/v1630251423/about-section_lgoweo.jpg"
					alt=""
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
					necessitatibus nostrum illum reprehenderit.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					{cats.map((c) => (
						<Link to={`/?cat=${c.name}`} className="link">
							<li className="sidebarListItem">{c.name}</li>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
}
