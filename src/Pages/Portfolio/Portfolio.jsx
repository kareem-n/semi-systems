import PageBanner from "../../Components/pageBanner/PageBanner"
import Portfolio from './../../Components/Portfolio/Portfolio';

function PortfolioPage() {
    return (
        <div>

            <PageBanner head={'أعمالنا'} />

            <div className="my-20">
                <div className="">
                    
                    <Portfolio />

                </div>

            </div>


        </div>
    )
}

export default PortfolioPage