import{r as b,j as e,d as u}from"./app-ada48f69.js";import{C as p,a as k,b as _,d as w,e as C}from"./card-8219e882.js";import{u as v,S as y,a as P,b as N,c as S,d as n,T,e as I,f as a,g as d,h as c,i as A,j as r}from"./sort-indicator-3dd14a3e.js";import{I as E}from"./input-86eb67b6.js";import{A as H}from"./app-layout-29e6236b.js";import{I as f}from"./icon-12e08395.js";import{S as D}from"./simple-pagination-044c96c9.js";import"./IconCheck-f24aec6c.js";import"./react-icons.esm-426d89fb.js";import"./index-b47bf91e.js";import"./Combination-7f0925ed.js";import"./index-e580da4c.js";import"./floating-ui.react-dom-1360a790.js";import"./index-6783fb7d.js";import"./index-3665fb2d.js";import"./menu-9a97370e.js";import"./label-c2bb6414.js";import"./logo_eagle_media_informatika-4d9f9cd9.js";import"./button-cbd10051.js";function F(s){const{data:h,meta:j,links:m}=s.products,[t,x]=b.useState(s.state);v({route:route("products.index"),values:t});const l=i=>{let o=(t==null?void 0:t.direction)??"asc";const g=(t==null?void 0:t.field)??"created_at";i===g&&(o=o==="asc"?"desc":"asc"),x({...t,field:i,direction:o})};return e.jsxs(p,{children:[e.jsx(k,{children:e.jsx(_,{children:"Products"})}),e.jsxs(w,{children:[e.jsx("div",{className:"mb-3 flex",children:e.jsx(u,{href:route("products.create"),className:"mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800",children:"Create"})}),e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("div",{children:e.jsxs(y,{value:t==null?void 0:t.limit,onValueChange:i=>x({...t,limit:i}),children:[e.jsx(P,{className:"w-[180px]",children:e.jsx(N,{placeholder:(t==null?void 0:t.limit)??10})}),e.jsxs(S,{children:[e.jsx(n,{value:"10",children:"10"}),e.jsx(n,{value:"25",children:"25"}),e.jsx(n,{value:"50",children:"50"}),e.jsx(n,{value:"75",children:"75"}),e.jsx(n,{value:"100",children:"100"})]})]})}),e.jsx("div",{className:"w-72",children:e.jsx(E,{type:"text",value:t==null?void 0:t.search,onChange:i=>x(o=>({...o,search:i.target.value})),placeholder:"Pencarian..."})})]}),e.jsxs(T,{children:[e.jsx(I,{children:e.jsxs(a,{children:[e.jsx(d,{className:"w-[50px] text-center",children:"#"}),e.jsx(d,{onClick:()=>l("product_code"),children:e.jsx(c,{label:"Product Code",column:"product_code",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(d,{onClick:()=>l("product_name"),children:e.jsx(c,{label:"Product Name",column:"product_name",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(d,{onClick:()=>l("product_price"),children:e.jsx(c,{label:"Product Price",column:"product_price",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(d,{onClick:()=>l("product_profit_price"),children:e.jsx(c,{label:"Product Profit Price",column:"product_profit_price",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(d,{onClick:()=>l("product_stock"),children:e.jsx(c,{label:"Product Stock",column:"product_stock",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(d,{onClick:()=>l("product_periode"),children:e.jsx(c,{label:"Product Periode",column:"product_periode",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(d,{onClick:()=>l("status"),children:e.jsx(c,{label:"status",column:"status",field:t==null?void 0:t.field,direction:t==null?void 0:t.direction})}),e.jsx(d,{})]})}),e.jsx(A,{children:h.length>0?e.jsx(e.Fragment,{children:h.map((i,o)=>e.jsxs(a,{children:[e.jsx(r,{className:"w-0 py-7 text-center",children:j.from+o}),e.jsx(r,{children:i.product_code}),e.jsx(r,{children:i.product_name}),e.jsx(r,{children:i.product_price}),e.jsx(r,{children:i.product_profit_price}),e.jsx(r,{children:i.product_stock}),e.jsx(r,{children:i.product_periode}),e.jsx(r,{children:i.status=="Aktif"?e.jsx("span",{class:"me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",children:i.status}):e.jsx("span",{class:"me-2 rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300",children:i.status})}),e.jsxs(r,{children:[e.jsxs(u,{href:route("products.edit",[i.id]),className:"mb-2 me-2 inline-flex items-center rounded-lg bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 px-5 py-2.5 text-center text-sm font-medium text-gray-900 shadow-lg shadow-lime-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-lime-300 dark:shadow-lg dark:shadow-lime-800/80 dark:focus:ring-lime-800",children:[e.jsx(f,{icon:"IconLogin2"})," Edit"]}),e.jsxs(u,{as:"button",method:"delete",href:route("products.destroy",[i.id]),className:"mb-2 mb-2 me-2 me-2 inline-flex rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-red-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300 dark:shadow-lg dark:shadow-red-800/80 dark:focus:ring-red-800",children:[e.jsx(f,{icon:"IconTrash"})," Delete"]})]})]},o))}):e.jsx(a,{children:e.jsx(r,{colSpan:8,className:"animate-pulse py-5 text-center text-base font-semibold text-destructive",children:"No Products."})})})]})]}),e.jsx(C,{className:"flex items-center justify-between pt-6",children:e.jsx(D,{links:m,meta:j})})]})}F.layout=s=>e.jsx(H,{title:"Categories",children:s});export{F as default};
