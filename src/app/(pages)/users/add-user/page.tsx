'use client'
import React, { useState, ChangeEvent, useEffect } from "react";
import { Select, FormControl, InputLabel, Modal, Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormData } from "@/globalTypes";
import { CustomMenuItem, CustomCheckbox, CloseButton, style } from "@/globalConstants";
import { getCookie } from "@/app/utils/auth";




const AddUser: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        role: [],
    });
    const router = useRouter();
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [modalMessage, setModalMessage] = useState('')
    const [open, setOpen] = useState(false);
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        if (name === "email") {
            setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSave = async () => {

        const url = `${process.env.NEXT_PUBLIC_CC_BACKEND_BASE_URL}user/v1/users`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${getCookie('access_token')}`,
            },
            body: JSON.stringify({ ...formData, role: formData.role[0] })
        });

        if (response.ok) {
            const data = await response.json();

            setModalMessage(data.message);
        } else {
            console.error('Failed to add user:', response.status);
        }

    };

    const handleClose = () => {
        setOpen(false); // Close the modal
        router.push("/users")
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRoleChange = (event: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { target: { value } } = event;
        setFormData((prevData) => ({
            ...prevData,
            role: typeof value === "string" ? value.split(",") : value,
        }));
    };

    const isFormValid =
        formData.name && formData.email && formData.role.length > 0 && isValidEmail;
    useEffect(() => {
        if (modalMessage.length) {
            setOpen(true); // Open the modal
        }
    }, [modalMessage])


    return (
        <div className="p-6 gap-6 rounded-lg border border-solid border-gray-300 opacity-100 bg-white grid">
            {/* First Div - Input Fields */}
            <div className="gap-4 grid">
                {/* Name Input */}
                <div className=" gap-2 md:gap-9 grid md:flex items-center">
                    <label
                        htmlFor="name"
                        className="font-sans text-sm font-medium leading-5 tracking-normal text-left text-gray-500"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border border-solid border-gray-300 p-2 rounded-md w-full lg:w-[20%]"
                    />
                </div>

                {/* Email Input */}
                <div className=" gap-2 md:gap-9 grid md:flex items-center">
                    <label
                        htmlFor="email"
                        className="font-sans text-sm font-medium leading-5 tracking-normal text-left text-gray-500"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter Email Id"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`border p-2 rounded-md w-full lg:w-[20%] ${isValidEmail ? "border-gray-300" : "border-red-500"
                            }`}
                    />
                </div>

                {/* Role Select with MUI */}
                <div className=" gap-2 md:gap-11 grid md:flex items-center">
                    <label
                        htmlFor="role"
                        className="font-sans text-sm font-medium leading-5 tracking-normal text-left text-gray-500"
                    >
                        Role
                    </label>
                    <div className="grid gap-2 w-full lg:w-[20%]">

                        <FormControl className=" w-full relative bottom-1   " >
                            <InputLabel variant="standard" htmlFor="role" className="px-3 relative top-3">
                                Select a Role
                            </InputLabel>
                            <Select
                                labelId="role-label"
                                id="role"
                                multiple
                                value={formData.role}
                                onChange={handleRoleChange}
                                placeholder="Select a role"
                                className="  p-0 rounded-md"
                                renderValue={(selected) => selected.length + " Selected"
                                }

                            >
                                {["Admin", "User"].map((role) => (
                                    <CustomMenuItem key={role} value={role} className="flex gap-3">
                                        <CustomCheckbox
                                            checked={formData.role.indexOf(role) > -1}
                                        />
                                        {role}
                                    </CustomMenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <div className="flex gap-2">
                            {
                                Array.isArray(formData.role) ?
                                    formData.role.map((role) => <span key={Math.random()} className="bg-[#F5F5F5] rounded-2xl py-1 px-2 text-[#525252] font-sans font-[600] text-[12px]">
                                        {role}</span>) : <span className="bg-[#F5F5F5] rounded-2xl py-1 px-2 text-[#525252] font-sans font-[600] text-[12px]">
                                        {formData.role}</span>
                            }
                        </div>
                    </div>
                </div>

            </div>

            {/* Second Div - Buttons */}
            <div className="gap-3 flex">
                {/* Save Button */}
                <button
                    disabled={!isFormValid}
                    className={`p-2 px-4 rounded-md border border-solid ${isFormValid
                        ? "bg-[#CD5712] text-white"
                        : "bg-[#CD5712] opacity-50 cursor-not-allowed"
                        }`}
                    onClick={handleSave}
                >
                    Save
                </button>

                {/* Cancel Button */}
                <button className="p-2 px-4 gap-2 rounded-md border border-solid border-gray-300 bg-white">
                    Cancel
                </button>
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
                        User Added
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className="text-[#525252]">
                        {`New user `}<span className="font-[600]">{formData.email}</span>{` has been added.`}
                    </Typography>
                    <CloseButton onClick={handleClose}>Close</CloseButton>
                </Box>
            </Modal>
        </div>
    );
};

export default AddUser;
