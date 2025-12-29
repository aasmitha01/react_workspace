function ProductList({products,onSelectProduct}){
    console.log("ProductList rendered");
    return (
        <div>
            <h3>Products</h3>
            {products.map((product)=>(
                <div key={product.id}>
                    <span>
                        {product.name}-₹{product.price}
                    </span>
                    <button onClick={()=>onSelectProduct(product)}>
                        Select
                    </button>
                </div>
            ))}
        </div>
    );
}
export default ProductList;