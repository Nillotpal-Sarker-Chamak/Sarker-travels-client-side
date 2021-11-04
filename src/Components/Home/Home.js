import TouristSpots from './Home Components/TouristSpots';
import Banner from './Home Components/Banner';
import CountryOperations from './Home Components/CountryOperations';
import ContactUs from './Home Components/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristSpots></TouristSpots>
            <CountryOperations></CountryOperations>
            <ContactUs></ContactUs>
        </div>
    )
}
export default Home;