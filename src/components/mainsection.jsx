import webdev from "../../public/webdevlopment.jpeg"
import uxui from "../../public/UX-UI.jpeg"
import SEO from "../../public/SEO.jpeg"
export function MainSection() {
    return <>
        <section className="container my-5">
            <h2 className="text-center mb-4">Our Services</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src={webdev} className="card-img-top" alt="Service 1" />
                        <div className="card-body">
                            <h5 className="card-title">Web Development</h5>
                            <p className="card-text">Build modern, responsive websites with the latest technologies.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={uxui} className="card-img-top" alt="Service 2" />
                        <div className="card-body">
                            <h5 className="card-title">UI/UX Design</h5>
                            <p className="card-text">Create user-friendly and visually appealing interfaces.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={SEO} className="card-img-top" alt="Service 3" />
                        <div className="card-body">
                            <h5 className="card-title">SEO Optimization</h5>
                            <p className="card-text">Boost your website ranking and visibility in search engines.</p>
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}