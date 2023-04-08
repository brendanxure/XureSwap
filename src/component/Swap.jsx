import React, { useEffect, useState } from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {SlArrowDown} from 'react-icons/sl'
import {MdArrowForwardIos} from 'react-icons/md'
import tokenList from '../tokenList.json'
import { Modal } from 'antd'
import axios from 'axios'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Swap = () => {
    const [tokenOne , setTokenOne] = useState(tokenList[0])
    const [tokenTwo, setTokenTwo] = useState(tokenList[1])
    const [tokens, setTokens] = useState(tokenList)
    const [tokenPort, setTokenPort] = useState(null)
    const [spillage, setSpillage] = useState()
    const [tokenValue1, setTokenValue1] = useState()
    const [tokenValue2, setTokenValue2] = useState()
    const [price, setPrice] = useState([])
    console.log(tokenValue1)
    console.log(price?.ratio)

    const [isModalOpen, setIsModalOpen] = useState(false)


    const showModal =(id)=> {
        setIsModalOpen(true)
        setTokenPort(id)
    }

    const closeModal =()=> {
        setIsModalOpen(false)
        setTokenPort(null)
    }

    const inputOnChange = (e) => {
        setTokenValue1(e.target.value)
        fetchPrice(tokenOne.address, tokenTwo.address)
        if(e.target.value && price) {
            setTokenValue2((e.target.value * price?.ratio).toFixed(2))
        } else {
            setTokenValue2(0)
        }
        
    }
    console.log(tokenOne)

    const setModifyToken =(index) => {
        setTokenValue1(0)
        setTokenValue2(0)
        setPrice(null)
        if (tokenPort === 1) {
        setTokenOne(index)
        fetchPrice(index.address, tokenTwo.address)
        } else {
        setTokenTwo(index)
        fetchPrice(tokenOne.address, index.address)
        }
        setIsModalOpen(false)
        setTokenPort(null)
    }
    const tokenChange= () => {
        setTokenValue1(0)
        setTokenValue2(0)
        setPrice(null)
        const one = tokenOne
        const two = tokenTwo
        setTokenOne(two)
        setTokenTwo(one)
        fetchPrice(two.address, one.address)
    }

    const fetchPrice = async(one, two)=> {
        try {
            const response = await axios.get('http://localhost:4001/tokenPrice', {
                params: {addressOne: one, addressTwo: two}
            })
            console.log(response.data)
            setPrice(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=> {
        fetchPrice(tokenOne.address, tokenTwo.address)

    },[])
  return (
    <div>
        <div className='w-full grid p-4 gap-4'>
            <button className='justify-self-end'><ConnectButton /></button>
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
                    <h3 className='my-2'>Current price 1 ARB = 1.229$</h3>
                    <h3 className='bg-[#A2CDFF] rounded-lg contrast-150 opacity-40 px-4 py-2 text-[#1A202C] mt-2 w-full mx-auto font-semibold cursor-pointer'>Sell all ARB (Degen mode)</h3>
                </div>
                <div className='w-full relative'>
                    <h2 className='text-center my-2'>OR</h2>
                    <section className='w-full mx-auto'>
                        <div className='bg-[#141619] p-4 rounded-lg'>
                            <h3 className='text-[#A2A2A2]'>You sell</h3>
                            <Modal open={isModalOpen} onCancel={closeModal} title="Tokens" className='text-white' >
                                {tokens.map((each, index)=> (
                                    <ul key={index} className='flex gap-4 cursor-pointer items-center my-4' onClick={()=>setModifyToken(each)}>
                                        <img src={each.img} alt={each.ticker} className='w-6 h-6' />
                                        <div>
                                            {console.log(index)}
                                        <li>{each.ticker}</li>
                                        <li>{each.name}</li>
                                        </div>
                                    </ul>
                                ))}
                            </Modal>
                            <div className='md:flex md:justify-between gap-4 w-full flex-row-reverse'>
                                <div className='flex w-full bg-[#222429] py-2 gap-2 px-4 items-center text-center rounded-md my-2 max-w-[30%]'>
                                    <img src={tokenOne?.img} className='w-8 h-8' alt={tokenOne?.ticker} />
                                    <h4>{tokenOne?.ticker}</h4><SlArrowDown onClick={()=>showModal(1)} />
                                </div>
                                <input type='number' placeholder='0' value={tokenValue1} onChange={inputOnChange} disabled={!price} className='text-[40px] bg-transparent outline-none md:justify-end' />
                            </div>
                            {/* <p className='text-[#A2A2A2]'>~$12.3</p> */}
                        </div>
                        <div onClick={()=> tokenChange()} className='bg-[#222429] py-3 px-4 absolute top-[50%] left-[47%] rounded-lg'><AiOutlineArrowDown size={20}/></div>
                        <div className='bg-[#141619] p-4 mt-2 rounded-lg w-full'>
                            <h3 className='text-[#A2A2A2]'>You buy</h3>
                            <div className='md:flex md:justify-between gap-4 flex-row-reverse'>
                                <div className='flex bg-[#222429] gap-2 py-2 px-4 text-center rounded-md my-2 w-full max-w-[30%] items-center'>
                                    <img src={tokenTwo?.img} className='w-8 h-8' alt={tokenTwo?.ticker} />
                                    <h4>{tokenTwo?.ticker}</h4><SlArrowDown onClick={()=>showModal(2)}/>
                                </div>
                                <input type='number' placeholder='0' value={tokenValue2} disabled={true} className='text-[40px] bg-transparent outline-none md:justify-end scrollbar-hide' />
                            </div>
                            {/* <p className='text-[#A2A2A2]'>~$12.3(-0.16%)</p> */}
                        </div>
                    </section>
                </div>
                <button className='justify-self-end bg-[#A2CDFF] px-4 py-2 my-2 rounded-lg text-[#1A202C] font-semibold hover:bg-[#7ABBFF] duration-200'>Refresh Price</button>
                <div>
                    <p>Swap Spillage</p>
                    <div className='flex gap-4'>
                        <p onClick={()=> setSpillage(0.1)} className='bg-[#38393E] px-2 rounded-md py-1 cursor-pointer opacity-70 duration-200 hover:opacity-100'>0.1%</p>
                        <p className='bg-[#38393E] px-2 rounded-md py-1 cursor-pointer opacity-70 duration-200 hover:opacity-100'>0.5%</p>
                        <p className='bg-[#38393E] px-2 rounded-md py-1 cursor-pointer opacity-70 duration-200 hover:opacity-100'>1%</p>
                        <p className='bg-[#38393E] px-2 rounded-md py-1 cursor-pointer opacity-70 duration-200 hover:opacity-100'>5%</p>
                    </div>
                </div>
                <button className='bg-[#A2CDFF] py-2 text-[#1A202C] font-semibold my-4 rounded-lg hover:bg-[#7ABBFF] duration-200'>Swap</button>
            </div>
        </div>
    </div>
  )
}

export default Swap