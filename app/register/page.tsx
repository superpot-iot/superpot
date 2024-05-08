"use server";
import React, { FormEvent } from "react";
import Form from "./form";

async function Register() {
    return (
        <div className="flex flex-auto align-middle items-center justify-center h-screen">
            <div className="m-auto">
                <Form />
            </div>
        </div>
    )
}

export default Register;