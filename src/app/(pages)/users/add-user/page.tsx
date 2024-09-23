'use client'
import React, { useState, ChangeEvent, useEffect } from "react";
import { Select, MenuItem, Checkbox, FormControl, InputLabel, Modal, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";

interface FormData {
    name: string;
    email: string;
    role: string[];
}

// Custom styles for the checkbox
// eslint-disable-next-line @typescript-eslint/prefer-as-const
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    width: "16px",
    height: "16px",
    borderRadius: theme.shape.borderRadius,

    "&.Mui-checked": {
        color: "#CD5712",
    },
}));

// Custom styles for the select menu item on hover
// eslint-disable-next-line   @typescript-eslint/no-unused-vars
const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    "&:hover": {
        backgroundColor: "#FEF7EC",
    },
}));
const CloseButton = styled(Button)({
    backgroundColor: "#CD5712",
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid",
    gap: "8px",
    float: 'right',
    color: "#FFF",
    "&:hover": {
        backgroundColor: "#CD5712",
    },
});
//eslint-disable-next-line @typescript-eslint/prefer-as-const
const style = {
    //eslint-disable-next-line @typescript-eslint/prefer-as-const
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "0.5rem",
    boxShadow: 24,
    p: 4,
};

const AddUser: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        role: [],
    });
    const router = useRouter();
    const [isValidEmail, setIsValidEmail] = useState(true);
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
    const handleSave = () => {
        if (isFormValid) {
            setOpen(true); // Open the modal
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
        console.log(formData.role);
    }, [formData.role])

    return (
        <div className="p-6 gap-6 rounded-lg border border-solid border-gray-300 opacity-100 bg-white grid">
            {/* First Div - Input Fields */}
            <div className="gap-4 grid">
                {/* Name Input */}
                <div className="gap-8 flex items-center">
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
                        className="border border-solid border-gray-300 p-2 rounded-md w-[20%]"
                    />
                </div>

                {/* Email Input */}
                <div className="gap-8 flex items-center">
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
                        className={`border p-2 rounded-md  w-[20%] ${isValidEmail ? "border-gray-300" : "border-red-500"
                            }`}
                    />
                </div>

                {/* Role Select with MUI */}
                <div className="gap-9 flex items-center">
                    <InputLabel
                        htmlFor="role"
                        className="font-sans text-sm font-medium leading-5 tracking-normal text-left text-gray-500"
                    >
                        Role
                    </InputLabel>
                    <div className="grid gap-2  w-[20%]">

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
                                formData.role.map((role) => <span key={Math.random()} className="bg-[#F5F5F5] rounded-2xl py-1 px-2 text-[#525252] font-sans font-[600] text-[12px]">{role}</span>)
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
