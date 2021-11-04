import { Carousel } from "react-bootstrap";


const TopBanner = () => {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.self.com/photos/5f0885ffef7a10ffa6640daa/4:3/w_2560%2Cc_limit/travel_plane_corona.jpeg"
                        alt="First slide"
                        height="400px"
                    />
                    <Carousel.Caption>
                        <h3>Travel With Us</h3>
                        <p>Gather the Best Experience</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.worldtravelguide.net/wp-content/uploads/2021/09/shu-Bolivia-Ugyuni-SaltFlats_1551438398-1440x823-1.jpg"
                        alt="Third slide"
                        height="400px"
                    />
                    <Carousel.Caption>
                        <h3>Explore The World With Us</h3>
                        <p>We Will Make You at home everywhere</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cloudly.io/wp-content/uploads/2020/01/travel.jpg"
                        alt="Third slide"
                        height="400px"
                    />

                    <Carousel.Caption>
                        <h3>Travel and Save Money</h3>
                        <p>We will give you a good travel experience at a extremely low cost</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default TopBanner;