import BannerFilm from "../BannerFilm/BannerFilm";



export default function Footer({ banner, children }) {
    return (
        <footer>
            <BannerFilm banner={banner} />

            <div className="dateSession">
                {children}
            </div>

        </footer>
    )


}
