import type { ReactElement } from "react"

export interface Page {
    page: string,
    link: string,
    element: ReactElement
}

export interface NavBarProps { 
    current_page: Page
}