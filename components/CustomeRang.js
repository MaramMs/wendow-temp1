import React, { useState } from 'react'

import { Slider} from 'antd';

const CustomeRang = () => {
    const [disabled, setDisabled] = useState(false);
    const onChange = (checked) => {
      setDisabled(checked);
    };
    
  const sliderStyle = {
    margin: '20px',
    width: '80%'
  };

  const railStyle = {
    backgroundColor: '#CCCCCC'
  };

  const trackStyle = {
    backgroundColor: '#67C6B0'
  };



  return (
    <>
    <h1 className='text-black font-[500] text-[14px]'> Category of the price</h1>
   <Slider range defaultValue={[20, 50]} disabled={disabled}
   style={sliderStyle}
   railStyle={railStyle}
   trackStyle={trackStyle}
   />

   <p className='text-[#ACACAC] text-[14px] font-[400]'>the price :<span className='text-[#000] text-[14px]'> 25$ -90$</span>  </p>
     

  </>
  )
}

export default CustomeRang
