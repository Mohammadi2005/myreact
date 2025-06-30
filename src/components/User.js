const User = (props) => {
    return (
        props.users.map((user, index) => {
            return (<p key={index}>Name : {user.name} - Age : {user.age}</p>)
        })
    )
}
export default User;