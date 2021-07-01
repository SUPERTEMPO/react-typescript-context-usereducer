import React from 'react'

export interface ListProps{
    id: number,
    name: string,
    age: number,
    photo: string,
    phone: number,
    bio: string
}
const ListComponent = ({id,name,phone,age,photo,bio}: ListProps):JSX.Element => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Bio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td><img src={photo} alt={name} /></td>
                        <td>{phone}</td>
                        <td>{age}</td>
                        <td>{bio}</td>
                    </tr>
                </tbody>
            </table>            
        </div>
    )
}

export default ListComponent
