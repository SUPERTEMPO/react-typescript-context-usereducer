import React, { useState } from 'react'
import { IDataProps } from './TableComponent'

interface Idata {
    setTableData: React.Dispatch<React.SetStateAction<IDataProps['data']>>
}
interface IFormProp {
    name: string,
    photo: string,
    phone: number,
    age: number,
    bio: string
}
const AddEmployeeForm = ({setTableData}:Idata) => {
    const [name, setName] = useState<IFormProp['name']>("")
    const [photo, setPhoto] = useState<IFormProp['photo']>("")
    const [phone, setPhone] = useState<IFormProp['phone']>(0)
    const [age, setAge] = useState<IFormProp['age']>(0)
    const [bio, setBio] = useState<IFormProp['bio']>("")
    // this will still work
    /*const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [phone, setPhone] = useState(0)
    const [age, setAge] = useState(0)
    const [bio, setBio] = useState("")*/
    // this will still work
    /*const [name, setName] = useState<string>("")
    const [photo, setPhoto] = useState<string>("")
    const [phone, setPhone] = useState<string>(0)
    const [age, setAge] = useState<string>(0)
    const [bio, setBio] = useState<string>("")*/

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)

    }
    const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPhoto(e.target.value)
    }
    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPhone(e.target.valueAsNumber)
    }
    const handleAge = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setAge(e.target.valueAsNumber)
    }
    const handleBio = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setBio(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(!name || !age || !phone || !photo || !bio) return 
        const id = parseInt(Math.random().toFixed(3).split('.').join().replace(',',''))
        setTableData((prev:IDataProps['data']) => ([...prev,{id,name,age,phone,photo,bio}]))
        setName("")
        setPhoto("")
        setPhone(0)
        setAge(0)
        setBio("")
    }
    return (
        <div className="addForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" value={name} onChange={handleName} placeholder="Enter name" />
                <label htmlFor="phone">Photo url</label>
                <input id="photo" type="text" value={photo}  onChange={handlePhoto} placeholder="Enter photo url" />
                <label htmlFor="phone">Phone number</label>
                <input id="phone" type="number" maxLength={13} value={phone} onChange={handlePhone} placeholder="Enter Mobile number" />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" max={120} value={age} onChange={handleAge} placeholder="Enter age" />
                <label htmlFor="bio">Bio</label>
                <textarea id="bio" rows={10} value={bio} onChange={handleBio} placeholder="Enter bio" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddEmployeeForm
