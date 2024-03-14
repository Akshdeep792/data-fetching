
import React from 'react'

const UserProfile = (props) => {
    return (
        <div>{props.username}</div>
    )
}

export default UserProfile

export async function getServerSideProps(context) {
    const { params, req, res } = context
    console.log("Server side code")
    return {
        props: {
            username: "Aksh"
        }
    }
}