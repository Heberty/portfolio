interface ProfileProps {
    image: string
    link?: string
    alt?: string
    target?: string
}

const Profile: React.FC<ProfileProps> = ({ image, link, alt, target }) => {
    return(
        <a href={link} className="profile" title={alt} target={target}>
            <span className="profile-image" style={{backgroundImage: `url(${image})`}}></span>
        </a>
    )
}

export default Profile