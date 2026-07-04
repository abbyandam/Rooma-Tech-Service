import type { ReactElement } from "react"

export interface Page {
    page: string,
    link: string,
    element: ReactElement
}

export interface NavBarProps { 
    current_page: Page
}

export interface FormInputs {
    name: string,
    phone: string,
    email: string,
    address: string,
    city: string, 
    state: string,
    zipcode: number,
    service: string,
    message: string,
    photos: FileList
}
