import React from 'react'

const UserIdPage = () => {
    return (
        <div>UserIdPage</div>
    )
}

export default UserIdPage

export async function getServerSideProps(context) {
    const { params } = context;
    const userId = params.id
    return {
        props: {
            id: 'userid-' + userId
        }
    }
}