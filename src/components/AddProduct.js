import { useState } from "react"

const AddProduct = ({onAdd}) => {
    //par défaut ces valeurs sont vides et le reminder est à false par défaut
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name) {
            alert('Please add a product')
            return
        }
        onAdd({name, description, price, category})
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
    }
    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control"> 
                <label>
                    Product
                    <input
                    type="text"
                    placeholder="Add Product"
                    required="required"
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-control"> 
                <label>
                    Description
                    <input
                    type="text"
                    placeholder="Description"
                    required="required"
                    value = {description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-control"> 
                <label>
                    Price
                    <input
                    type="text"
                    placeholder="Price"
                    required="required"
                    value = {price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-control"> 
                <label>
                    Category
                    <input
                    type="text"
                    placeholder="Category"
                    required="required"
                    value = {category}
                    onChange={(e) => setCategory(e.target.value)}
                    />
                </label>
            </div>
            
            <input type="submit" className="btn btn-block" value="Ajouter" />
        </form>
    )
}

export default AddProduct