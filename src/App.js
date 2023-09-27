import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import ManyProducts from './components/ManyProducts'
import AddProduct from './components/AddProduct'
import EditProduct from  './components/EditProduct'
import About from './components/About'
import Footer from './components/Footer'
import Home from './components/Home'


function App() {
//variable globale
  const [products, setProducts] = useState([])
  useEffect(() =>{
    const getProducts = async () => {
        const productsFromServer = await fetchProducts()
        setProducts(productsFromServer)
    }
    getProducts()
}, [])

const fetchProducts = async () => {
  const res = await fetch('http://localhost:5000/products')
  const data = await res.json()
  //console.log(data)
  return data
}

  //add a product
  const addProduct = async (product) => {
    const res = await fetch('http://localhost:5000/products', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    const newProduct = await res.json()
    setProducts([...products, newProduct])
}


  //delete a product
  const deleteProduct = async (id) => {
    //console.log(id)
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    })
    setProducts(products.filter((product) => product.id !== id))
}

  //update a product
  const updateThisProduct = (product) => {
    setShowEditProduct(product)
  } 
  
  const updateProduct = async (finalUpdateProduct) => {
   console.log(finalUpdateProduct)
        await fetch(`http://localhost:5000/products/${finalUpdateProduct.id}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(finalUpdateProduct)
   })
   setProducts(products.map((product) => product.id === finalUpdateProduct.id ? finalUpdateProduct : product ))
  }


  //TOGGLE FORM
  const [showAddProduct, setShowAddProduct] = useState(false)

  const [showEditProduct, setShowEditProduct] = useState(null)


  return (
    <BrowserRouter>
      <div className="container">
        <Header onAddBtn={() => setShowAddProduct(!showAddProduct)} showAdd={showAddProduct}/>
        {showAddProduct && <AddProduct onAdd={addProduct}/>}
        {showEditProduct && <EditProduct onEdit={updateProduct} product={showEditProduct}/>}
        <Home/>
        <Routes>
          <Route path='/products' element={<ManyProducts products={products} onDeleteMany={deleteProduct} onUpdateMany={updateThisProduct}/> }/>

          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    );
}

export default App;
