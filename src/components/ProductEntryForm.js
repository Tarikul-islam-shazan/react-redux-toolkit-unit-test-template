import { useDispatch,useSelector } from "react-redux";
import { changePrice, changeProductName } from "../store/slices/features/product/productFormSlice";
import { addProduct } from "../store/slices/features/product/productsSlice";

function ProductEntryForm(){
    const dispatch = useDispatch();
    const { productName, price } = useSelector((state)=> {
        return {
            productName: state.productForm.productName,
            price: state.productForm.price,
        }
    });

    const handleChangeProductName = (event) => {
        dispatch(changeProductName(event.target.value))
    }

    const handleChangePrice = (event) => {
        const productPrice = parseInt(event.target.value) || 0;
        dispatch(changePrice(productPrice))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addProduct({ productName,price }))
    }

    return (
        <div className="w-full  max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">
                Product
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="product" 
                    type="text" 
                    placeholder="Product Name"
                    value={productName}
                    onChange={handleChangeProductName}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                Price
                </label>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="price" 
                    type="price" 
                    placeholder="0.00$"
                    value={price}
                    onChange={handleChangePrice}
                />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Add
                </button>
            </div>
            </form>
      </div>
    )
}

export default ProductEntryForm