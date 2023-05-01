
const About = ({title,description}) => {
    return<div className="articles-wrapper">
            <h2 className="article__title">About {title}</h2>
            <article className="article__content " dangerouslySetInnerHTML={{__html:description}}>
            </article>
    </div>
}
export default About