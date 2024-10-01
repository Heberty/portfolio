interface SectionProps {
    id?: string
    children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({id, children}) => {
    return <section id={id} className="section-default">{ children }</section>
}

export default Section