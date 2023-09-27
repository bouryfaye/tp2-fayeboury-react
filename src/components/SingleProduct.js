import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const SingleProduct = ({ product, onDelete, onUpdate }) => {
  return (
    <div className={"product"} >
      <h3>
        {product.name}
        <span>
          <div onClick={() => onUpdate(product)}>
            <EditButton onClick={() => onUpdate(product)}
              text={"Mettre à jour"} //on met à jour un objet grâce à son id
            />
            </div>
            <div>
            <DeleteButton
              onClick={() => onDelete(product.id)}
              text={"Supprimer"} //on efface un objet grâce à son id
            />
            </div>
        </span>
      </h3>
      <p>${product.price}</p>
    </div>
  );
};

export default SingleProduct;
