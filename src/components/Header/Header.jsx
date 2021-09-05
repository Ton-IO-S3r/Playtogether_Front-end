import Navbar from 'components/Navbar/Navbar'
import Hero from 'components/Header/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
            <header>
                <Navbar isLogin={false}/>
                <Hero/>

            </header>
    )
}

export default Header
