import { useState } from "react"

const EditProduct = ({onEdit, product}) => {
    //par défaut ces valeurs sont vides 
    const id = product.id
    const [name, setName] = useState(product.name)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [category, setCategory] = useState(product.category)

    const onSubmit = (e) => {
        e.preventDefault();
        onEdit({id, name, description, price, category})
    }
    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control"> 
                <label>
                    Product
                    <input
                    type="text"
                    placeholder="Add Product"
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
                    value = {category}
                    onChange={(e) => setCategory(e.target.value)}
                    />
                </label>
            </div>
            
            <input type="submit" className="btn btn-block" value="save" />
        </form>
    )
}

export default EditProduct