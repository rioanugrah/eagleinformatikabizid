import{q as C,r as a,j as e,d as v,y as w}from"./app-f4b2b26a.js";import{A as N}from"./app-layout-9d97b23d.js";import{C as P,a as _,b as S,d as A,e as F}from"./card-a2d9c09a.js";import"./icon-9fca5145.js";import"./IconCheck-a1a20fda.js";import"./menu-7ef95d7f.js";import"./index-30f71a51.js";import"./label-4990a51b.js";import"./logo_eagle_media_informatika-1c2c03a6.js";import"./floating-ui.react-dom-70cfe16a.js";function D(d){const{errors:t,auth:L}=C().props,[o,b]=a.useState(""),[s,x]=a.useState(""),[l,m]=a.useState(""),[c,p]=a.useState(""),[u,h]=a.useState(""),[i,k]=a.useState(""),[n,f]=a.useState(""),[y,g]=a.useState(!1),j=r=>{r.preventDefault(),g(!0),w.post(route("products.store"),{categories_id:o,product_name:s,product_description:l,product_price:c,product_profit_price:u,product_stock:i,status:n},{onFinish:()=>{g(!1)}})};return e.jsx(e.Fragment,{children:e.jsxs(P,{children:[e.jsx(_,{children:e.jsx(S,{children:"Create Product"})}),e.jsxs("form",{onSubmit:j,children:[e.jsxs(A,{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Product Name"}),e.jsx("input",{type:"text",placeholder:"Name",value:s,onChange:r=>x(r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"}),t.product_name&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:t.product_name})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Product Description"}),e.jsx("textarea",{value:l,onChange:r=>m(r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"}),t.product_description&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:t.product_description})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Category Product"}),e.jsxs("select",{value:o,onChange:r=>b(r.target.value),class:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",children:[e.jsx("option",{selected:!0,children:"-- Select Category --"}),d.categories.map((r,M)=>e.jsx("option",{value:r.id,children:r.name}))]}),t.categories_id&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:t.categories_id})]}),e.jsxs("div",{className:"grid gap-6 mb-6 md:grid-cols-3",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Product Price"}),e.jsx("input",{type:"number",placeholder:"Price",value:c,onChange:r=>p(r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"}),t.product_price&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:t.product_price})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Product Profit Price"}),e.jsx("input",{type:"number",placeholder:"Profit Price",value:u,onChange:r=>h(r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"}),t.product_profit_price&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:t.product_profit_price})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Product Stock"}),e.jsx("input",{type:"number",placeholder:"Stock",value:i,onChange:r=>k(r.target.value),className:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"}),t.product_stock&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:t.product_stock})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-gray-900 dark:text-white",children:"Status"}),e.jsxs("select",{value:n,onChange:r=>f(r.target.value),class:"block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",children:[e.jsx("option",{selected:!0,children:"-- Select Status --"}),e.jsx("option",{value:"Aktif",children:"Aktif"}),e.jsx("option",{value:"Nonaktif",children:"Non Aktif"})]}),t.status&&e.jsx("p",{className:"mt-2 text-sm text-red-500 dark:text-red-400",children:t.status})]})]}),e.jsxs(F,{children:[e.jsx(v,{href:route("categories.index"),className:"mb-2 me-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700",children:"Back"}),y?e.jsxs("button",{disabled:!0,type:"button",class:"me-2 inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",children:[e.jsxs("svg",{"aria-hidden":"true",role:"status",class:"me-3 inline h-4 w-4 animate-spin text-gray-200 dark:text-gray-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"#1C64F2"})]}),"Loading..."]}):e.jsx("button",{className:"mb-2 me-2 rounded-lg bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-green-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:shadow-lg dark:shadow-green-800/80 dark:focus:ring-green-800",children:"Submit"})]})]})]})})}D.layout=d=>e.jsx(N,{title:"Create Product",children:d});export{D as default};
