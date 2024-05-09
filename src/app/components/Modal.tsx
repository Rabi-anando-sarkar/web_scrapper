'use client'

import { Dialog,Transition, TransitionChild } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'

const Modal = () => {
    let [isOpen, setIsOpen] = useState(true)
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [email, setEmail] = useState('')

    const handleSubmit = async () => {
        // 3:11:29
    }

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    return (
        <>
            <button type="button" className="btn" onClick={openModal}>
                Track
            </button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" onClose={closeModal} className="dialog-container">
                    <div className="min-h-screen px-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
                        </TransitionChild>
                        <span
                            className='inline-block h-screen align-middle'
                            aria-hidden="true"
                        />
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="dialog-content">
                                <div className='flex flex-col'>
                                    <div className='flex justify-between'>
                                        <div className='p-3 border-gray-200 rounded-10'>
                                            <Image
                                                src="/assets/icons/logo.svg"
                                                alt='logo'
                                                width={28}
                                                height={28}
                                            />
                                        </div>
                                        <Image
                                            src="/assets/icons/x-close.svg"
                                            alt='close'
                                            width={24}
                                            height={24}
                                            className='cursor-pointer'
                                            onClick={closeModal}
                                        />
                                    </div>
                                    <h4 className='dialog-head_text'>Stay updated with product pricing alerts right in your inbox!</h4>
                                    <p className='text-sm text-gray-600 mt-2'>Never miss a bargain again with our timely alerts!</p>
                                </div>
                                <form 
                                    onSubmit={handleSubmit}
                                    className='flex flex-col mt-5'
                                >
                                    <label htmlFor='email' className='text-sm font-medium text-gray-700'>Email Address</label>
                                    <div className='dialog-input_container'>
                                        <Image
                                            src='/assets/icons/mail.svg'
                                            alt='mail'
                                            height={18}
                                            width={18}
                                        />
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            type='email'
                                            id='email'
                                            placeholder='Enter your email address'
                                            className='dialog-in'
                                        />
                                    </div>
                                    <button 
                                        type='submit'
                                        className='dialog-btn'
                                    >{isSubmitting ? 'Submitting...' : 'Track'}</button>
                                </form>
                            </div>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal