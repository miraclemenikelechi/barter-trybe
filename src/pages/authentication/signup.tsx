import { Link } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import { useDropzone } from "react-dropzone";
import Select, { SingleValue } from "react-select";

import { BusinessLogoUpload } from "@/assets/icons";
import { APP_CONSTANTS } from "@/lib/constants";

import FormButton from "./components/button";
import FormInput from "./components/input";
import { dropdownStyles } from "./config";
import { useForm } from "./hooks/useForm";
import { businessOption, SignupRequest } from "./types";
import { API } from "./utils/endpoints";
import { SignupSchema } from "./utils/validation";

export default function Page() {
    const { mutate, isPending } = API.SIGN_UP();

    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const { errors, formData, handleChange, handleSubmit, setFormData } =
        useForm<SignupRequest>({
            initialData: {
                businessEmail: "",
                businessLocation: "",
                businessLogo: new File([], ""),
                businessName: "",
                businessType: "",
                password: "",
            },
            schema: SignupSchema,
            onSubmit: (data) => mutate(data),
        });

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        /**
         * Handles the file upload event by setting the selected image file in state, creating a preview URL, and updating the form data.
         * @param acceptedFiles - Array of File objects selected by the user.
         */
        onDrop: function (acceptedFiles: File[]) {
            if (acceptedFiles.length > 0) {
                setImage(acceptedFiles[0]);
                setImagePreview(URL.createObjectURL(acceptedFiles[0]));
                setFormData((previous) => ({
                    ...previous,
                    businessLogo: acceptedFiles[0],
                }));
                errors.businessLogo = "";
            } else {
                errors.businessLogo = "Please select a valid image";
            }
        },
        accept: { "image/*": [".png", ".jpg", ".jpeg"] },
        multiple: false,
    });

    /**
     * business type options for select input.
     */
    const businessTypeOptions: businessOption[] = [
        { label: "oo", value: "oo" },
    ];

    /**
     * Handle business type change.
     */
    function handlebusinessTypeChange(option: SingleValue<businessOption>) {
        setFormData((previous) => ({
            ...previous,
            businessType: option?.value ?? "",
        }));
        errors.businessType = "";
    }

    return (
        <section className="signup">
            <div className="signup__wrapper">
                <header>
                    <h1>Sign Up</h1>
                    <span>Get Started with {APP_CONSTANTS.NAME}</span>
                </header>

                <footer>
                    <form onSubmit={handleSubmit}>
                        <div className="signup__logo">
                            <label htmlFor="businessLogo">business Logo</label>

                            <div
                                {...getRootProps({
                                    className: "signup__dropzone",
                                })}
                            >
                                <input {...getInputProps()} />

                                {image ? (
                                    <span className="signup__preview">
                                        <img src={imagePreview!} alt="" />
                                    </span>
                                ) : isDragActive ? (
                                    <p>Drop your file here...</p>
                                ) : (
                                    <Fragment>
                                        <i>
                                            <BusinessLogoUpload />
                                        </i>

                                        <p>
                                            Drop your file here, or{" "}
                                            <span>browse</span>
                                        </p>

                                        <span>
                                            Only JPG, PNG and JPEG files are
                                            allowed
                                        </span>
                                    </Fragment>
                                )}
                            </div>

                            {errors.businessLogo ? (
                                <span className="-mt-2 text-sm text-red-400">
                                    {errors.businessLogo}
                                </span>
                            ) : null}
                        </div>

                        <FormInput
                            className="signup__input"
                            error={errors.businessEmail}
                            label="business Email"
                            name="businessEmail"
                            onChange={handleChange}
                            placeholder="Enter your business email"
                            type="email"
                            value={formData.businessEmail}
                        />

                        <FormInput
                            className="signup__input"
                            error={errors.businessName}
                            label="business Name"
                            name="businessName"
                            onChange={handleChange}
                            placeholder="Enter your business name"
                            type="email"
                            value={formData.businessName}
                        />

                        <div className="signup__input">
                            <label htmlFor="businessType">business Type</label>

                            <Select
                                onChange={handlebusinessTypeChange}
                                options={businessTypeOptions}
                                placeholder="Select your business type"
                                styles={dropdownStyles}
                                value={businessTypeOptions.find(
                                    (option) =>
                                        option.value === formData.businessType
                                )}
                            />

                            {errors.businessType ? (
                                <span className="-mt-2 text-sm text-red-400">
                                    {errors.businessType}
                                </span>
                            ) : null}
                        </div>

                        <FormInput
                            className="signup__input"
                            error={errors.password}
                            label="password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Enter your password"
                            type="password"
                            value={formData.password}
                        />

                        <FormInput
                            className="signup__input"
                            error={errors.businessLocation}
                            label="business Location"
                            name="businessLocation"
                            onChange={handleChange}
                            placeholder="Enter your business location"
                            type="text"
                            value={formData.businessLocation ?? ""}
                        />

                        <FormButton
                            className="signup__button"
                            disabled={isPending}
                            filled={true}
                            label="Sign Up"
                            type="submit"
                        />
                    </form>

                    <div>
                        <span>Already have an account?</span>
                        <Link to={"/login"}>Sign In</Link>
                    </div>
                </footer>
            </div>
        </section>
    );
}
