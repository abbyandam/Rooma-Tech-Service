import { contact_info, hours } from "../globals";
import '../styles/quote.scss'
import { FaPlusCircle, FaTimes } from "react-icons/fa";
import { useForm, type SubmitHandler } from "react-hook-form"
import { service_options } from "../globals";
import { FaAngleDown } from "react-icons/fa";
import { useRef, useState } from "react";
import type { FormInputs } from "../types/types";
import { OrbitProgress } from "react-loading-indicators"

export default function Quote() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formLoadTime] = useState(Date.now())
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        setValue,
        getValues,
        watch,
        trigger
        } = useForm<FormInputs>({mode: 'onSubmit', defaultValues: {service: ''}});
    
    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        setIsLoading(true)
        try {
            const formData = new FormData()
    
            Object.entries(data).forEach(([key, value]) => {
                if (key === 'photos') {
                    Array.from(value as FileList).forEach((file) => {
                        formData.append('photos', file)
                    })
                } else {
                    formData.append(key, value)
                }
    
            })

            formData.append('formLoadTime', formLoadTime.toString())
    
            const response = await fetch('/api/formSubmission', {
                method: 'POST',
                body: formData
            })
    
            if (response.ok) {
                setIsSubmitted(true)
            } else {
                console.error('ERROR:', await response.json())
            }
        } catch(err) {
            console.error('NETWORK ERROR:', err)
        } finally {
            setIsLoading(false)
        }
    }

    // Input formatting
    const formatPhone = (phone: string) => {
        const digits = phone.replace(/\D/g, '').slice(0, 10)
        if (digits.length <= 3) return digits
        if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    }

    const formatZip = (zip: string) => {
        const digits = zip.replace(/[^0-9\-]/g, '')
        return digits
    }

    const [charCount, setCharCount] = useState(0)
    const updateCount = (msg: string) => { setCharCount(msg.length) }

    // Photo Uploading
    const photos = watch('photos');
    const [prevPhotos, setPrevPhotos] = useState<FileList>((new DataTransfer()).files);
    const maxPhotosSize = 10 * 1024 * 1024 // 10 MB
    const maxPhotoSize = 4 * 1024 * 1024
    const maxPhotos = 5
    const validateUpload = (files?: FileList) => {
        if (!files) { return true }
        // Validate Total Size
        const size = [...files].reduce((size, file) => size + file.size, 0)
        if (size > maxPhotosSize) {
            setValue('photos', prevPhotos)
            return "Photos exceed 10 MB limit"
        }
        
        // Validate Individual Size
        const largeFiles = [...files].filter((file) => file.size > maxPhotoSize)
        if (largeFiles.length > 0) {
            setValue('photos', prevPhotos)
            return "File too large — max size is 4MB per photo"
        }

        // Validate # of Photos
        if (files.length > maxPhotos) {
            setValue('photos', prevPhotos)
            return "Exceeded maximum of 5 photos"
        }

        setPrevPhotos(getValues('photos'));
        return true;
    }

    const updatePhotos = (newFiles : FileList) => {
        const newPhotos = [...newFiles, ...photos];
        const dt = new DataTransfer();
        newPhotos.forEach((file) => dt.items.add(file));
        setValue('photos', dt.files);
    }

    const { ref: registerRef, ...rest } = register('photos', {
        validate: (files) => { return validateUpload(files) },
        onChange: async (e) => {
            updatePhotos(e.target.files as FileList);
            await trigger('photos')
        }
    })

    const removePhoto = (idx: number) => {
        const newPhotos = [...photos].filter((_, i) => i != idx)
        const dt = new DataTransfer();
        newPhotos.forEach((file) => dt.items.add(file));
        setValue('photos', dt.files);
    } 

    const uploadRef = useRef<HTMLInputElement>(null);

    return (
        <div className="quote">
            <div className="contact">
                <img src="/quote_background.png"/>
                <h2>Contact Us</h2>
                <div className="gap"/>
                <p><span className="bold">Phone</span>: {contact_info.phone}</p>
                <p><span className="bold">Email</span>: {contact_info.email}</p>
                <p><span className="bold">Location</span>: {contact_info.location}</p>
                <p><span className="bold">Hours</span>: {hours.open_days} {hours.open_hours}</p>
            </div>
            { isLoading ?
            <div className="loading">
                <OrbitProgress 
                    variant="spokes" 
                    speedPlus={1} 
                    easing="linear" 
                    color={"#932833"}
                    size="small"
                />
            </div>
            : !isSubmitted ?
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    {...register('website')}
                    style={{ position: 'absolute', left: '-9999px' }}
                    tabIndex={-1}
                    autoComplete="off"
                />
                <div>
                    <input 
                        placeholder={errors.name ? 'Name *' : 'Name'}
                        autoComplete="name"
                        maxLength={50}
                        className={errors.name && 'required'}
                        {...register("name", { required: true })}
                    />

                    <input 
                        placeholder={errors.phone ? 'Phone *' : 'Phone'}
                        type="tel"
                        autoComplete="tel"
                        className={errors.phone && 'required'}
                        {...register("phone", { required: true, onChange: (e) => {
                            e.target.value = formatPhone(e.target.value)
                        } })}
                        />
                </div>
                <div>
                    <div className="input">
                        <input 
                            placeholder={errors.email ? 'Email *' : 'Email'}
                            autoComplete="email"
                            maxLength={254}
                            className={errors.email && 'required'}
                            {...register("email", { 
                                required: true, 
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                        {errors.email?.message === 'Invalid email address' ? 
                            <span className="required">Please enter a valid email address</span>
                        :   <span className="required">&nbsp;</span>
                        }
                    </div>
                    <input 
                        placeholder={errors.address ? 'Address *' : 'Address'}
                        autoComplete="street-address"
                        maxLength={100}
                        className={errors.address && 'required'}
                        {...register("address", { required: true })}
                    />
                </div>
                <div>
                    <input 
                        placeholder={errors.city ? 'City *' : 'City'}
                        autoComplete="address-level2"
                        className={errors.city && 'required'}
                        maxLength={50}
                        {...register("city", { required: true })}
                    />
                    <input 
                        placeholder={errors.state ? 'State *' : 'State'}
                        autoComplete="address-level1"
                        className={errors.state && 'required'}
                        maxLength={50}
                        {...register("state", { required: true})}
                    />
                    <input 
                        placeholder={errors.state ? 'Zipcode *' : 'Zipcode'}
                        autoComplete="postal-code"
                        maxLength={10}
                        className={errors.zipcode && 'required'}
                        {...register("zipcode", { 
                            required: true, 
                            onChange: (e) => { e.target.value = formatZip(e.target.value)} })}
                    />
                </div>
                <div className="select-wrapper">
                    <select 
                        className={errors.service && 'required'}
                        {...register("service", {required: true})}
                    >
                        <option value={""} disabled className="placeholder">
                            {errors.service ? "Service *" : 'Service'}
                        </option>
                        {service_options.map((service) => (
                            <option key={service} value={service}>{service}</option>
                        ))}
                    </select>
                    <FaAngleDown />
                </div>
                <div className="textarea-wrapper">
                    <textarea 
                        placeholder="Message"
                        maxLength={2000}
                        {...register('message', { onChange: (e) => {updateCount(e.target.value)}})}
                    />
                    <p>{charCount}/2000</p>
                </div>
                {photos && photos.length != 0 && <div className="photos">
                { [...photos].map((file, i) => {
                    return (
                    <div className="upload-wrapper" key={i}> 
                        <div className="file-name-wrapper">
                            <p className="italic">{file.name}</p>
                            <button
                                type="button"
                                onClick={() => removePhoto(i)}
                            
                            >
                                <FaTimes />
                            </button>
                        </div>
                        {i != photos.length - 1 && <hr/>}
                    </div>)
                })}
                </div> }
                <button 
                    className="upload-button"
                    onClick={() => uploadRef.current?.click()}
                    type="button"
                >
                    <FaPlusCircle />
                    {photos && photos.length <= 0 ? "Upload Photos" : "Add Photos"}
                </button>
                {errors.photos ? (<span className="errors">{errors.photos.message}</span>)
                               : (<span className="errors">&nbsp;</span>)}
                <input 
                    type="file" 
                    accept="image/*" 
                    style={{display: 'none'}}
                    multiple 
                    ref={(e) => {
                        registerRef(e)
                        uploadRef.current = e
                    }} 
                    {...rest}
                />
                {Object.keys(errors).filter(key => key !== 'photos').length > 0  ? <span className="errors">* Please fill out the required fields</span> 
                        : <span className="errors">&nbsp;</span>}
                <button 
                    className="secondary-button"
                    type="submit"
                >
                    <h4>Submit Request</h4>
                </button>
            </form>
            : <div className="submission">
                <p>
                    <span className="bold">Your response has been received. </span>
                    I will be in contact with you shortly.
                </p>
                <p>
                    If you’d like to 
                    <span className="bold"> book an appointment </span>
                    please call or email.
                </p>
            </div>
            }
        </div>
    )
}
