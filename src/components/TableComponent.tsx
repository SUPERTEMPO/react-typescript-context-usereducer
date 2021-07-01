import React from 'react'

export interface IDataProps{
    data:{
            id: number,
            name: string,
            age: number,
            photo: string,
            phone: number,
            bio: string
        }[],
    deleteData: (id: number) => void
}
// {data}:IDataProps
const TableComponent: React.FC<IDataProps> = ({data, deleteData}):JSX.Element => {
    return (
        <div>
            <table>
                <caption>My Employees</caption>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Bio</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(d => (
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td><img src={d.photo} alt={d.name} /></td>
                            <td>{d.phone}</td>
                            <td>{d.age}</td>
                            <td>{d.bio}</td>
                            <td onClick={() => deleteData(d.id)}>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>            
        </div>
    )
}

export default TableComponent
