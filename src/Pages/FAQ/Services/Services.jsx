import PageBanner from "../../../Components/pageBanner/PageBanner"
import Services from "../../../Components/Services/Services"

function ServicesPage() {
    return (
        <div>

            <PageBanner head={'الخدمات'} />

            <div className="my-20">
                <Services rocket={false} />
            </div>

        </div>
    )
}

export default ServicesPage