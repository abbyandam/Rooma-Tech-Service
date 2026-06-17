import { contact_info, hours } from "../globals";
import '../styles/quote.scss'
import { FaUpload } from "react-icons/fa";
import { useForm, type SubmitHandler } from "react-hook-form"
import { service_options } from "../globals";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import type { FormInputs } from "../types/types";

export default function Quote() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({mode: 'onSubmit', defaultValues: {service: ''}});
    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        console.log(data);

        const formData = new FormData()
  
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value)
        })

        const response = await fetch('/api/formSubmission', {
            method: 'POST',
            body: formData
        })

        if (response.ok) {
            console.log(`SUCCESS: ${await response.json()}`)
        } else {
            console.error('ERROR:', await response.json())
        }
    }

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
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <button className="upload-button">
                    <FaUpload />
                    Upload Photos
                </button>
                {Object.keys(errors).length > 0 ? <span className="errors">* Please fill out the required fields</span> 
                        : <span className="errors">&nbsp;</span>}
                <button 
                    className="secondary-button"
                    type="submit"
                >
                    <h4>Submit Request</h4>
                </button>
            </form>
        </div>
    )
}