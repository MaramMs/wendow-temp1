import { Pagination } from 'antd';

const style ={
  color:'red',
  textAlign:'center',
  border:'none'
}
const CustomPagination = () => {
  return (
    <Pagination defaultCurrent={1} total={50} style={style}/>
  )
}

export default CustomPagination