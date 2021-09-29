import "./header.css";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slideImg1 from "../../img/slideImg1.jpg";
import slideImg2 from "../../img/slideImg2.jpg";
import slideImg3 from "../../img/slideImg3.jpg";
import slideImg4 from "../../img/slideImg4.jpg";
import slideImg5 from "../../img/slideImg5.jpg";
import slideImg6 from "../../img/slideImg6.jpg";
import slideImg7 from "../../img/slideImg7.jpg";
import slideImg8 from "../../img/slideImg8.jpg";
import slideImg9 from "../../img/slideImg9.jpg";
import slideImg10 from "../../img/slideImg10.jpg";
export default function Header() {
	const allCarousel = [
		slideImg1,
		slideImg2,
		slideImg3,
		slideImg4,
		slideImg5,
		slideImg6,
		slideImg7,
		slideImg8,
		slideImg9,
		slideImg10,
	];

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">Welcome to</span>
				<span className="headerTitleLg">Saikat's Blog</span>
			</div>
			<div className="slider-container">
				<Container>
					<Carousel
						responsive={responsive}
						infinite={true}
						autoPlay={true}
						autoPlaySpeed={2500}
						keyBoardControl={true}
						dotListClass="custom-dot-list-style"
						showDots={true}
					>
						{allCarousel.map((carousel, index) => {
							return (
								<div key={index + 100}>
									<img className="carousel-image" src={carousel} alt="" />
								</div>
							);
						})}
					</Carousel>
				</Container>
			</div>
			{/* <img
				className="headerImg"
				src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt=""
			/> */}
		</div>
	);
}
