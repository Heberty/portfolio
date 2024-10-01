interface CardPortfolioProps {
    title: string
    subtitle: string
    image?: string
    link?: string
    text?: string
    target?: string
}

const CardPortfolio: React.FC<CardPortfolioProps> = ({ title, subtitle, image, link, text, target}) => {
    return(
        <a href={link} className="card-portfolio" title={title} style={{backgroundImage: `url(${image})`}} target={target}>
            <div className="card-portfolio-header">
                <p className="card-portfolio-header-title"><strong>{title}</strong></p>
                <p className="card-portfolio-header-subtitle"><strong>{subtitle}</strong></p>
            </div>
            <div className="card-portfolio-body">
                <p className="card-portfolio-body-text">
                    {text}
                </p>
            </div>
            <div className="card-portfolio-footer"></div>
        </a>
    )
}

export default CardPortfolio