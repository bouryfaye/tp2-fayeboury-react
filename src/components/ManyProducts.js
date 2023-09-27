import SingleProduct from "./SingleProduct"

const ManyProducts = ({products, onDeleteMany, onUpdateMany}) => {
    return(
        <>
            {products.map((product)=>(
            <SingleProduct product={product} key={product.id} onDelete={onDeleteMany} onUpdate={onUpdateMany}/>
            ))}
        </>
    )
}

export default ManyProducts

