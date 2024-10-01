interface ButtonLinkProps {
    text: string
    href: string
    target?: string
}


const ButtonLink: React.FC<ButtonLinkProps> = ({ text, href, target}) => {
    return (
        <a href={href} className="button-link btn-default" target={target}>
            <p className="btn-default-text">{text}</p>
        </a>
    )
}

export default ButtonLink