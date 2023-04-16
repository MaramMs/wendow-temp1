import { Space, Table, Tag } from 'antd';


const columns = [
    {
      title: 'The product',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div className='flex gap-2 items-center'>
          <img src={record.image} alt={record.name} width={50} />
          <span>{record.name}</span>
        </div>
      ),
      className:'text-[#323232] text-[24px] font-[400]'
     
    },
    {
      title: 'The Price',
      dataIndex: 'price',
      key: 'price',
      className:'text-[#67C6B0] text-[24px] font-[600]'
     
    },
    {
      title: 'The amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (_, record) => (
        <Space size="middle">
            <div className="border border-[#E8E8E8] w-[101px] h-[38px] flex justify-between items-center px-5">
           <span className="cursor-pointer">+</span>
           <span className="">1</span>
           <span className="cursor-pointer">-</span>
           </div>
        </Space>
      ),
    },
    {
      title: 'The total',
      key: 'total',
      dataIndex: 'total',
      className:'text-[#67C6B0] text-[24px] font-[600]'
     
    },
   
  ];
  const data = [
    {
      key: '1',
      name: 'iphone 12 pro',
      image:'/images/products/cart-product.png',
      price: '60 $',
      total: '60 $'
    },
    {
        key: '2',
        name: 'iphone 12 pro',
        image:'/images/products/cart-product.png',
        price: '60 $',
        total: '60 $'
      },
      {
        key: '3',
        name: 'iphone 12 pro',
        image:'/images/products/cart-product.png',
        price: '60 $',
        total: '60 $'
      },
  ];

const CustomTable = () => {
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default CustomTable
