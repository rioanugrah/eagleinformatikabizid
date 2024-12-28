import AppLayout from '@/Layouts/administrator/app-layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/card';

import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Edit(props) {
    const { errors, auth } = usePage().props;
    const [product_category, setProductCategory] = useState(props.product.categories_id);
    const [product_name, setProductName] = useState(props.product.product_name);
    const [product_description, setProductDescription] = useState(props.product.product_description);
    const [product_price, setProductPrice] = useState(props.product.product_price);
    const [product_profit_price, setProductProfitPrice] = useState(props.product.product_profit_price);
    const [product_stock, setProductStock] = useState(props.product.product_stock);
    const [product_status, setProductStatus] = useState(props.product.status);
    const [loading, setLoading] = useState(false);

    const handlerSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        router.post(
            route('products.update',[props.product.id]),
            {
                categories_id: product_category,
                product_name: product_name,
                product_description: product_description,
                product_price: product_price,
                product_profit_price: product_profit_price,
                product_stock: product_stock,
                status: product_status,
            },
            {
                onFinish: () => {
                    setLoading(false);
                    // alert('ok');
                },
            },
        );
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Create Product</CardTitle>
                </CardHeader>
                <form onSubmit={handlerSubmit}>
                    <CardContent>
                        <div className='mb-3'>
                            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Product Name</label>
                            <input type='text' placeholder='Name' value={product_name} onChange={(e) => setProductName(e.target.value)} className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                            {errors.product_name && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.product_name}</p>}
                        </div>
                        <div className='mb-3'>
                            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Product Description</label>
                            <textarea value={product_description} onChange={(e) => setProductDescription(e.target.value)} className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                            {errors.product_description && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.product_description}</p>}
                        </div>
                        <div className='mb-3'>
                            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Category Product</label>
                            <select value={product_category} onChange={(e) => setProductCategory(e.target.value)} class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'>
                                <option selected>-- Select Category --</option>
                                {
                                    props.categories.map((category,index) => (
                                        <option value={category.id}>{category.name}</option>
                                    ))
                                }
                            </select>
                            {errors.categories_id && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.categories_id}</p>}
                        </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-3">
                            <div>
                                <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Product Price</label>
                                <input type='number' placeholder='Price' value={product_price} onChange={(e) => setProductPrice(e.target.value)} className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                {errors.product_price && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.product_price}</p>}
                            </div>
                            <div>
                                <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Product Profit Price</label>
                                <input type='number' placeholder='Profit Price' value={product_profit_price} onChange={(e) => setProductProfitPrice(e.target.value)} className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                {errors.product_profit_price && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.product_profit_price}</p>}
                            </div>
                            <div>
                                <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Product Stock</label>
                                <input type='number' placeholder='Stock' value={product_stock} onChange={(e) => setProductStock(e.target.value)} className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500' />
                                {errors.product_stock && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.product_stock}</p>}
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Status</label>
                            <select value={product_status} onChange={(e) => setProductStatus(e.target.value)} class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'>
                                <option selected>-- Select Status --</option>
                                <option value='Aktif'>Aktif</option>
                                <option value='Nonaktif'>Non Aktif</option>
                            </select>
                            {errors.status && <p className='mt-2 text-sm text-red-500 dark:text-red-400'>{errors.status}</p>}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href={route('products.index')} className='mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700'>
                            Back
                        </Link>
                        {loading ? (
                            <button disabled type='button' class='me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                                <svg aria-hidden='true' role='status' class='me-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                    <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
                                    <path
                                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                                        fill='#1C64F2'
                                    />
                                </svg>
                                Loading...
                            </button>
                        ) : (
                            <button className='mb-2 me-2 rounded-lg bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800'>Update</button>
                        )}
                    </CardFooter>
                </form>
            </Card>
        </>
    );
}

Edit.layout = (page) => <AppLayout title={'Edit Product'} children={page} />;
