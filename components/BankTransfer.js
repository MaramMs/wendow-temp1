import { Col, Row } from 'antd'
import React from 'react'

const BankTransfer = () => {
    const data = [
        {
            bankName:'Palestine',
            branch:'0451',
            accountName:'Maram Ismail',
            swiftCode:'43563214',
            accountNumber:'152522'
        },
        {
            bankName:'Palestine',
            branch:'0451',
            accountName:'Maram Ismail',
            swiftCode:'43563214',
            accountNumber:'152522'
        },
        {
            bankName:'Palestine',
            branch:'0451',
            accountName:'Maram Ismail',
            swiftCode:'43563214',
            accountNumber:'152522'
        },
        {
            bankName:'Palestine',
            branch:'0451',
            accountName:'Maram Ismail',
            swiftCode:'43563214',
            accountNumber:'152522'
        }
    ]

    const userTransferData = () =>{
        return (
         <>
            {
                data.map((item , index) =>(
                    <div className=' flex bg-[#fff] shadow-md gap-[15px] rounded-[8px] p-[18px] mb-[13px]' key={index}>
                    <img src='/images/bank.png'/>
                    <Row >
               
                         <Col span={12} className='mb-[13px]'>
                        <p className='text-[#ACACAC] text-[10px] '>Bank Name : <span className='text-[#000]'>{item.bankName}</span></p>
                        </Col>
                        <Col span={12}>
                        <p className='text-[#ACACAC] text-[10px]'>The branch : <span className='text-[#000]'>{item.branch}</span></p>
                        </Col>
                        <Col span={12}>
                        <p className='text-[#ACACAC] text-[10px]'>Account Name : <span className='text-[#000]'>{item.accountName}</span></p>
                        </Col>
                        <Col span={12}>
                        <p className='text-[#ACACAC] text-[10px]'>Swift Code : <span className='text-[#000]'>{item.swiftCode}</span></p>
                        </Col>
                        <Col span={12}>
                        <p className='text-[#ACACAC] text-[10px]'>Account Number : <span className='text-[#000]'>{item.accountNumber}</span></p>
                        </Col> 
                        
                       
                    </Row>
                  
                  
                </div>

                ))
            }
         </>
        )
    }
  return <>{userTransferData()}</> ; 

}

export default BankTransfer
