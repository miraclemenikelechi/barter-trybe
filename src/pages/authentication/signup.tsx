import { Fragment, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import Select, {
    CSSObjectWithLabel,
    SingleValue,
    StylesConfig,
} from "react-select";

import { BusinessLogoUpload } from "@/assets/icons";
import { APP_CONSTANTS } from "@/lib/constants";

import FormButton from "./components/button";
import FormInput from "./components/input";
import { useForm } from "./hooks/useForm";
import { BusniessOption, SignupRequest } from "./types";
import { SignupSchema } from "./utils/validation";

export default function Page() {
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const { errors, formData, handleChange, handleSubmit, setFormData } =
        useForm<SignupRequest>({
            initialData: {
                busniessEmail: "",
                busniessLocation: "",
                busniessLogo: new File([], ""),
                busniessName: "",
                busniessType: "",
                password: "",
            },
            schema: SignupSchema,
            onSubmit: () => {},
        });

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: function (acceptedFiles: File[]) {
            if (acceptedFiles.length > 0) {
                setImage(acceptedFiles[0]);
                setImagePreview(URL.createObjectURL(acceptedFiles[0]));
                setFormData((previous) => ({
                    ...previous,
                    busniessLogo: acceptedFiles[0],
                }));
            }
        },
        accept: { "image/*": [".png", ".jpg", ".jpeg"] },
        multiple: false,
    });

    const busniessTypeOptions: BusniessOption[] = [
        { label: "oo", value: "oo" },
    ];

    function handleBusniessTypeChange(option: SingleValue<BusniessOption>) {
        setFormData((previous) => ({
            ...previous,
            busniessType: option?.value ?? "",
        }));
    }

    const dropdownStyles: StylesConfig<BusniessOption, false> = {
        container: function (base: CSSObjectWithLabel) {
            return {
                ...base,
                width: "100%",
                height: "3rem",
            };
        },
        control: (base: CSSObjectWithLabel) => ({
            ...base,
            height: "3rem",
        }),
        valueContainer: (base: CSSObjectWithLabel) => ({
            ...base,
            height: "3rem",
            alignContent: "center",
        }),
        indicatorsContainer: (base: CSSObjectWithLabel) => ({
            ...base,
            height: "100%",
        }),
        indicatorSeparator: (base: CSSObjectWithLabel) => ({
            ...base,
            display: "none",
        }),
    };

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
                            <label htmlFor="busniessLogo">Busniess Logo</label>

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

                            {errors.busniessLogo ? (
                                <span className="-mt-2 text-sm text-red-400">
                                    {errors.busniessLogo}
                                </span>
                            ) : null}
                        </div>

                        <FormInput
                            className="signup__input"
                            error={errors.busniessEmail}
                            label="busniess Email"
                            name="busniessEmail"
                            onChange={handleChange}
                            placeholder="Enter your Busniess email"
                            type="email"
                            value={formData.busniessEmail}
                        />

                        <FormInput
                            className="signup__input"
                            error={errors.busniessName}
                            label="busniess Name"
                            name="busniessName"
                            onChange={handleChange}
                            placeholder="Enter your Busniess name"
                            type="email"
                            value={formData.busniessName}
                        />

                        <div className="signup__input">
                            <label htmlFor="busniessType">Busniess Type</label>

                            <Select
                                options={busniessTypeOptions}
                                value={busniessTypeOptions.find(
                                    (option) =>
                                        option.value === formData.busniessType
                                )}
                                onChange={handleBusniessTypeChange}
                                placeholder="Select your Busniess type"
                                styles={dropdownStyles}
                            />

                            {errors.busniessType ? (
                                <span className="-mt-2 text-sm text-red-400">
                                    {errors.busniessType}
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
                            error={errors.busniessLocation}
                            label="busniess Location"
                            name="busniessLocation"
                            onChange={handleChange}
                            placeholder="Enter your Busniess location"
                            type="text"
                            value={formData.busniessLocation}
                        />

                        <FormButton
                            className="signup__button"
                            label="Sign Up"
                            type="submit"
                            filled={true}
                        />
                    </form>

                    <div>
                        <span>Already have an account?</span>
                        <Link to={"../login"}>Sign In</Link>
                    </div>
                </footer>
            </div>
        </section>
    );
}
