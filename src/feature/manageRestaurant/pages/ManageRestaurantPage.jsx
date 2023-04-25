import { BsPlus } from 'react-icons/bs';
import Tables from '../component/Table';
import { BsPencil, BsTrash } from 'react-icons/bs';

function ManageRestaurantPage() {
  console.log('Hi');
  const data = [
    { ResturantName: 'Aiarb plaza', OwnerName: 'Dipankar p', PhoneNumber: '+91 4444442131', Location: 'New York',image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holhttps://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
    { ResturantName: 'Biarb plaza', OwnerName: 'Dipankar p', PhoneNumber: '+91 4444442131', Location: 'Los Angeles',image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
    { ResturantName: 'Riarb plaza', OwnerName: 'Dipankar p', PhoneNumber: '+91 4444442131', Location: 'Chicago',image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
    { ResturantName: 'Riarb plaza', OwnerName: 'Dipankar p', PhoneNumber: '+91 4444442131', Location: 'Houston',image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
    { ResturantName: 'Riarb plaza', OwnerName: 'Dipankar p', PhoneNumber: '+91 4444442131', Location: 'Houston',image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
    { ResturantName: 'Riarb plaza', OwnerName: 'Dipankar p', PhoneNumber: '+91 4444442131', Location: 'Houston',image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
    { ResturantName: 'Riarb plaza', OwnerName: 'Dipankar p', PhoneNumber: '+91 4444442131', Location: 'Houston',image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
    { ResturantName: 'Riarb plaza', OwnerName: 'Dipankar p', PhoneNumber: '+91 4444442131', Location: 'Houston',image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
    { ResturantName: 'Riarb plaza', OwnerName: 'Dipankar p', PhoneNumber: '+91 4444442131', Location: 'Houston',image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
  ];
  const handleEdit = (id) => {
    console.log(`Edit row with id ${id}`);
  };
  const handleDelete = (id) => {
    console.log(`Delete row with id ${id}`);
  };
  const columns = [
    {id:'1',
      Header: 'Resturant name', accessor: 'ResturantName',
      Cell: ({ row }) => (
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={row.original.image}
          />
          <span>{row.original.ResturantName}</span>
        </div>
      ),
    },
    { id:'2',Header: 'Owner name', accessor: 'OwnerName' },
    { id:'3',Header: 'Phone number', accessor: 'PhoneNumber' },
    {id:'4', Header: 'Location', accessor: 'Location' },
    {
      Header: 'Edit',
      Cell: ({ row }) => (
        <div className="flex items-center justify-center space-x-4 -ml-8">
          <button onClick={() => handleEdit(row.id)}>
            <BsPencil />
          </button>
          <button onClick={() => handleDelete(row.id)}>
            <BsTrash />
          </button>
        </div>
      )
    },
  ]

  return (
    <div>
      <div className="my-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray5">All Restaurants</h1>

        <div
          onClick={() => console.log('Hellio')}
          className="flex cursor-pointer items-center rounded-md border-0 bg-blue9 px-4 py-1.5"
        >
          <button className=" text-white">Create new restaurant</button>
          <BsPlus className="fill-white text-lg" />
        </div>
      </div>

      <div className="mb-10 rounded-md border-0 bg-white px-12 py-14">
        <Tables columns={columns} data={data} />
      </div>
    </div>
  );
}

export default ManageRestaurantPage;
