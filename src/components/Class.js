const Class = (props) => {
    return (
        props.classes.map((Class, index) => {
            if (Class.finished)
                return (<p key={index}>name : {Class.name}</p>)
        })
    )
}
export default Class
