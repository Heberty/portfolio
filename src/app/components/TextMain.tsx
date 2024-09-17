interface TextMainProps {
    title: string
    subtitle: string
}

const TextMain: React.FC<TextMainProps> = ({ title, subtitle}) => {
    return(
        <div className="text-main">
            <h1 className="text-main-title">Heberty</h1>
            <h4 className="text-main-subtitle">Desenvolvedor de Softwares / Full-stack</h4>
        </div>
    )
}

export default TextMain