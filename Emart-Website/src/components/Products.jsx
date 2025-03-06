import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products", { signal: controller.signal });
                const jsonData = await response.json();
                setData(jsonData);
                setFilter(jsonData);
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Fetch error:", error);
                }
            } finally {
                setLoading(false);
            }
        };
        getProducts();

        return () => {
            controller.abort();
        };
    }, []);

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.cat === cat);
        setFilter(updatedList);
    };

    const Loading = () => {
        return (
            <>
                {[...Array(4)].map((_, index) => (
                    <div className="col-md-3" key={index}>
                        <Skeleton height={350} />
                    </div>
                ))}
            </>
        );
    };



    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
                        All
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
                        Men's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
                        Women's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>
                        Jewelry
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>
                        Electronics
                    </button>
                </div>
                <div className="row">
                    {filter.map((product) => (
                        <div className="col-md-3 mb-4" key={product.id}>
                            <div className="card h-100 text-center p-4">
                                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <Link to={`/products/${product.id}`} className="btn btn-outline-dark">
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">{loading ? <Loading /> : <ShowProducts />}</div>
        </div>
    );
};

export default Products;

