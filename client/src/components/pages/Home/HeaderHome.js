import './HeaderHome.css';
import ironHome from './logo.svg';

const HeaderHome = () => {


    return (
        <>
            <div className="bg-blue">
                <div class='hero'>
                    <div class="hero-one"></div>
                    <div class="hero-two"></div>
                    <div className='text-hero'>
                        <img src={ironHome} alt="Iron Kitchen" />
                        <h1 class="header-title">
                            <span class="header-sub">Donde dormir está</span>
                            <span class="header-primary">Sobrevalorado</span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderHome