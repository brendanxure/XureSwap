import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {SlArrowDown} from 'react-icons/sl'
import {MdArrowForwardIos} from 'react-icons/md'

const Swap = () => {
  return (
    <div>
        <div className='w-full grid p-4 gap-4'>
            <button className='bg-[#3898FF] justify-self-end px-4 py-2 font-bold relative text-[14px] text-white rounded-lg hover:scale-105 duration-200 ease-in'>Connect Wallet</button>
            <h1 className='text-white text-[30px] md:text-[36px] font-bold mt-4 text-center'>Arbitrum Airdrop X DefiLlama</h1>
            <p className='text-[#ED8936] text-center'>To get your tsx accepted you need to increase priority fee and max fee in metamask</p>
            <div className='grid p-4 lg:max-w-[60%] w-full mx-auto border-[rgb(47,51,60)] border-[1px] items-center justify-center w-full mx-auto text-white '>
                <div className='flex flex-col text-center gap-4 font-bold'>
                    <h2>Step 1.</h2>
                    <h3 className='bg-[#A2CDFF] text-[#1A202C] py-2 rounded-lg cursor-pointer hover:bg-[#7ABBFF] duration-200'>Connect</h3>
                    <div className='flex flex-wrap items-center md:flex-nowrap text-[#1A202C] '>
                        <h3 className='bg-[#A2CDFF] rounded-lg contrast-150 opacity-40 px-4 w-full py-2 cursor-pointer'>Approve 11k</h3>
                        <h4 className='text-white w-full py-2'>OR</h4>
                        <h3 className='bg-[#A2CDFF] rounded-lg contrast-150 opacity-40 px-4 w-full py-2 cursor-pointer'>Approve 30k</h3>
                        <p className='text-white w-full my-2 font-bold flex justify-center w-full md:hidden'><SlArrowDown /></p>
                        <p className='text-white w-full my-2 font-bold justify-center w-full hidden md:flex'><MdArrowForwardIos /></p>
                        <h3 className='bg-[#A2CDFF] rounded-lg contrast-150 opacity-40 px-4 w-full py-2 cursor-pointer'>Nothing to claim</h3>
                    </div>
                </div>
                <div className='my-6 text-center flex flex-col w-full'>
                    <h2 className=''>Step 2.</h2>
                    <h3 className='my-2'>Current price 1 ARb = 1.229$</h3>
                    <h3 className='bg-[#A2CDFF] rounded-lg contrast-150 opacity-40 px-4 py-2 text-[#1A202C] mt-2 w-full mx-auto font-semibold cursor-pointer'>Sell all ARb (Degen mode)</h3>
                </div>
                <div className='w-full relative'>
                    <h2 className='text-center my-2'>OR</h2>
                    <section className='w-full mx-auto'>
                        <div className='bg-[#141619] p-4 rounded-lg'>
                            <h3 className='text-[#A2A2A2]'>You sell</h3>
                            <div className='md:flex md:justify-between gap-4'>
                                <h3 className='bg-[#222429] py-2 px-4 text-center rounded-md my-2 max-w-[20%]'>ARb</h3>
                                <input type='number' placeholder='10' className='text-[40px] bg-transparent outline-none w-full md:justify-end' />
                            </div>
                            <p className='text-[#A2A2A2]'>~$12.3</p>
                        </div>
                        <div className='bg-[#222429] py-3 px-4 absolute top-[50%] left-[47%] rounded-lg'><AiOutlineArrowDown size={20}/></div>
                        <div className='bg-[#141619] p-4 mt-2 rounded-lg'>
                            <h3 className='text-[#A2A2A2]'>You buy</h3>
                            <div className='md:flex md:justify-between gap-4'>
                                <h3 className='bg-[#222429] py-2 px-4 text-center rounded-md my-2 max-w-[20%]'>ETH</h3>
                                <input type='number' placeholder='0.0067873949' className='text-[40px] bg-transparent outline-none w-full md:justify-end scrollbar-hide' />
                            </div>
                            <p className='text-[#A2A2A2]'>~$12.3(-0.16%)</p>
                        </div>
                    </section>
                </div>
                <button className='justify-self-end bg-[#A2CDFF] px-4 py-2 my-2 rounded-lg text-[#1A202C] font-semibold hover:bg-[#7ABBFF] duration-200'>Refresh Price</button>
                <div>
                    <p>Swap Spillage</p>
                    <div className='flex gap-4'>
                        <p className='bg-[#38393E] px-2 rounded-md py-1 cursor-pointer opacity-70 duration-200 hover:opacity-100'>0.1%</p>
                        <p className='bg-[#38393E] px-2 rounded-md py-1 cursor-pointer opacity-70 duration-200 hover:opacity-100'>0.5%</p>
                        <p className='bg-[#38393E] px-2 rounded-md py-1 cursor-pointer opacity-70 duration-200 hover:opacity-100'>1%</p>
                        <p className='bg-[#38393E] px-2 rounded-md py-1 cursor-pointer opacity-70 duration-200 hover:opacity-100'>5%</p>
                    </div>
                </div>
                <button className='bg-[#A2CDFF] py-2 text-[#1A202C] font-semibold my-4 rounded-lg hover:bg-[#7ABBFF] duration-200'>Connect Wallet</button>
            </div>
        </div>
    </div>
  )
}

export default Swap