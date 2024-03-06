"use client"
import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
import Image from "next/image"
const Listproducts = ({produits}) => {
const columns = useMemo(
() => [
{
accessorKey: 'imageart', //access nested data with dot notation
header: 'Image',
Cell: ({ cell}) => (
<Box
sx={{
    display: 'flex',
alignItems: 'center',
gap: '1rem',
}}
>
<Image
src={cell.getValue()}
alt="product anme"
height="50"
width="50"
/>

</Box>),
},
{
accessorKey: 'reference', //access nested data with dot notation
header: 'Référence',
size: 100,
},
{
accessorKey: 'designation',
header: 'Désignation',
size: 100,
},
{
accessorKey: 'marque', //normal accessorKey
header: 'Marque',
size: 100,
},
{
accessorKey: 'prix',
header: 'Prix',
size: 100,
},
{
accessorKey: 'qtestock',
header: 'Stock',
size: 100,
},
],
[produits],
);
return (
<div>
<MaterialReactTable columns={columns} data={produits} />;
</div>
)
}
export default Listproducts