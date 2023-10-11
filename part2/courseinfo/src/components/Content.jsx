import Part from './Part'

const Content = ({ content }) => {
    return (
        <>
            {content.map((x) => (
                <Part item={x} />
            ))}
        </>
    )
}

export default Content