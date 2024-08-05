import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ProductCard from '../components/product-card';
import { useCategoriesQuery } from '../redux/api/productAPI';
import { CustomError } from '../types/api-types';

const Search = () => {
    const { data: categoriesResponse, isLoading: loadingCategories, isError, error } = useCategoriesQuery('');

    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [maxPrice, setMaxPrice] = useState(100000);
    const [category, setCategory] = useState('');
    const [page, setPage] = useState(1);

    const addToCartHandler = () => {

    };

    const isPrevPage = page > 1;
    const isNextPage = page < 4;

    if (isError) {
        const err = error as CustomError;
        toast.error(err.data.message);
    }

    return (
        <div className="product-search-page">
            <aside>
                <h2>Filters</h2>
                <div>
                    <h4>Sort</h4>
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="">None</option>
                        <option value="asc">Price (Low to High)</option>
                        <option value="dsc">Price (High to Low)</option>
                    </select>
                </div>

                <div>
                    <h4>Max Price: {maxPrice || ""}</h4>
                    <input
                        type="range"
                        min={1}
                        max={100000}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                </div>

                <div>
                    <h4>Category</h4>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">ALL</option>
                        {!loadingCategories &&
                            categoriesResponse?.categories.map((i) => (
                                <option key={i} value={i}>
                                    {i.toUpperCase()}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </aside>
            <main>
                <h1>Products</h1>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="search-product-list">
                    <ProductCard
                        productId="13124sdad"
                        name="Macbook"
                        price={3000}
                        stock={50}
                        handler={addToCartHandler}
                        photo="https://cdn.ozone.bg/media/catalog/product/cache/1/image/400x498/a4e40ebdc3e371adff845072e1c73f37/l/a/ed5c71a52c7ecfaa4f01d07f5eb3d534/laptop-apple---macbook-air-15--153----m3-8-10--8gb-512gb--sin-30.jpg"
                    />
                </div>

                <article>
                    <button
                        disabled={!isPrevPage}
                        onClick={() => setPage((prev) => prev - 1)}
                    >
                        Prev
                    </button>
                    <span>
                        {page} of {4}
                    </span>
                    <button
                        disabled={!isNextPage}
                        onClick={() => setPage((prev) => prev + 1)}
                    >
                        Next
                    </button>
                </article>
            </main>
        </div>
    );
}

export default Search;