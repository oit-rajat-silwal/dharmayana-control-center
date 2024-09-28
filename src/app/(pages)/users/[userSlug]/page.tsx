'use client'
import { UserDetails } from '@/globalTypes'
import { Box, FormControl, InputLabel, Modal, Select, Switch, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { CustomMenuItem, CustomCheckbox, CloseButton, style } from '@/globalConstants'
import { useUserContext } from '@/contexts/UserContext'
import Link from 'next/link'
import { getCookie } from '@/app/utils/auth'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserUpdate = ({ params: { customerSlug } }: { params: { customerSlug: string } }) => {
    const { selectedUser } = useUserContext();
    console.log(selectedUser);
    const [userDetails, setuserDetails] = useState<UserDetails>({
        id: '',
        name: '',
        email: '',
        created_on: '',
        role: [],
        last_login: '',
        status: false,
    });
    const [modalMessage, setModalMessage] = useState('')
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false); // Close the modal
        router.push("/users")
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRoleChange = (event: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { target: { value } } = event;
        setuserDetails((prevData) => ({
            ...prevData,
            role: typeof value === "string" ? value.split(",") : value,
        }));
    };

    const isFormValid = userDetails.role.length > 0;
    const updateUser = async () => {
        const updatedUserData = {
            id: userDetails.id,  // The user ID of the user you want to update
            role: userDetails.role,
            status: userDetails.status,
        };

        const url = `${process.env.NEXT_PUBLIC_CC_BACKEND_BASE_URL}user/v1/users`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${getCookie('access_token')}`,
            },
            body: JSON.stringify({ ...updatedUserData, role: updatedUserData.role })
        });

        if (response.ok) {
            const data = await response.json();

            setModalMessage(data.message);
        } else {
            console.error('Failed to add user:', response.status);
        }
    };
    useEffect(() => {
        if (modalMessage.length) {
            setOpen(true); // Open the modal
        }
    }, [modalMessage])
    useEffect(() => {
        if(selectedUser.id.length)
        {
            setuserDetails(selectedUser);
        }else{
            router.back();
        }
    }, [selectedUser])
    return (
        <div className=' grid gap-[40px] font-sans'>
            <div className='grid gap-[8px]'>
                <h1 className="font-sans font-bold text-[40px]  text-[#171717]">
                    {userDetails.name}
                </h1>
            </div>
            <div className='grid lg:grid-cols-2 gap-[24px]'>
                <div className='bg-[#FFFFFF] flex flex-col  gap-[24px] p-4 border-2 rounded-lg border-[#D4D4D4]'>
                    <h3 className='font-[600] text-[22px] text-[#171717]'>Basic Details</h3>
                    <div className='grid gap-[1rem]'>
                        <p className='grid grid-cols-2'>
                            <span className='text-[16px] text-[#737373] '>Email</span>
                            <span className='text-[20px] text-[#171717] whitespace-normal break-words'>{userDetails.email}</span>
                        </p>
                        <p className='grid grid-cols-2'>
                            <span className='text-[16px] text-[#737373] '>Created On</span>
                            <span className='text-[20px] text-[#171717]  '>{dayjs(userDetails.created_on).format('DD MMM, YYYY')}</span>
                        </p>
                        <p className='grid grid-cols-2'>
                            <span className='text-[16px] text-[#737373] '>Last Login</span>
                            <span className='text-[20px] text-[#171717]  '>{dayjs(userDetails.last_login).format('DD MMM, YYYY hh:mm a')}</span>
                        </p>
                    </div>
                </div>
                <div className='bg-[#FFFFFF] flex flex-col gap-[24px] p-4 border-2 rounded-lg border-[#D4D4D4]'>
                    <h3 className='font-[600] text-[22px] text-[#171717]'>Manage Access</h3>
                    <div className='grid gap-[1rem]'>
                        <p className='grid '>
                            <span className='text-[16px] text-[#737373] '>Role</span>
                            <div className="grid gap-2  lg:w-[50%] ">

                                <FormControl className=" w-full relative bottom-1   " >
                                    <InputLabel variant="standard" htmlFor="role" className="px-3 relative top-2">
                                        Select a Role
                                    </InputLabel>
                                    <Select
                                        labelId="role-label"
                                        id="role"
                                        multiple
                                        value={Array.isArray(userDetails.role) ? userDetails.role : [userDetails.role]}
                                        onChange={handleRoleChange}
                                        placeholder="Select a role"
                                        className="  p-0 rounded-md"
                                        renderValue={(selected) => selected.length + " Selected"
                                        }

                                    >
                                        {["admin", "user"].map((role) => (
                                            <CustomMenuItem key={role} value={role} className="flex gap-3">
                                                <CustomCheckbox
                                                    checked={(Array.isArray(userDetails.role) ? userDetails.role : [userDetails.role]).indexOf(role) > -1}
                                                />
                                                {role}
                                            </CustomMenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <div className="flex gap-2">
                                    {
                                        Array.isArray(userDetails.role) ?
                                            userDetails.role.map((role) => <span key={Math.random()} className="bg-[#F5F5F5] rounded-2xl py-1 px-2 text-[#525252] font-sans font-[600] text-[12px]">
                                                {role}</span>) : <span className="bg-[#F5F5F5] rounded-2xl py-1 px-2 text-[#525252] font-sans font-[600] text-[12px]">
                                                {userDetails.role}</span>
                                    }
                                </div>
                            </div>
                        </p>

                        <p className='grid '>
                            <span className='text-[16px] text-[#737373] '>Status</span>
                            <span className='flex gap-4 items-center'>
                                <span className='text-[20px] text-[#171717]  '>
                                    <Switch checked={userDetails.status} onChange={(event) => {
                                        setuserDetails((prevData) => ({
                                            ...prevData,
                                            status: event.target.checked
                                        }))
                                    }} />
                                </span>
                                <span>{userDetails.status ? 'Active' : 'Inactive'}</span>
                            </span>
                        </p>
                        {/* Second Div - Buttons */}
                        <div className="gap-3 flex">
                            {/* Save Button */}
                            <button
                                disabled={!isFormValid}
                                className={`p-2 px-4 rounded-md border border-solid ${isFormValid
                                    ? "bg-[#CD5712] text-white"
                                    : "bg-[#CD5712] opacity-50 cursor-not-allowed"
                                    }`}
                                onClick={updateUser}
                            >
                                Update
                            </button>

                            {/* Cancel Button */}
                            <Link href='/users'>
                                <button className="p-2 px-4 gap-2 rounded-md border border-solid border-gray-300 bg-white">
                                    Cancel
                                </button>
                            </Link>
                        </div>
                        {/* Modal Implementation */}
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" className="text-[#171717] font-[600]">
                                    User Access Updated
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }} className="text-[#525252]">
                                    {`User access has been updated for `}<span className="font-[600]">{userDetails.name}</span>
                                </Typography>
                                <CloseButton onClick={handleClose}>Close</CloseButton>
                            </Box>
                        </Modal>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserUpdate