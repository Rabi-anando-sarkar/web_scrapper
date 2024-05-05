'use client'

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react"

const isValidAmazonProductUrl = (url: string) => {
    try {
        const parsedURl = new URL(url)
        const hostname = parsedURl.hostname;
        
        //check if hostname contains amazon.com or amazon.countrycode
        if(
            hostname.includes('amazon.com') || 
            hostname.includes('amazon.') || 
            hostname.endsWith('amazon')) {
                return true
        }
    } catch (error) {
        return false
    }
}

const SearchBar = () => {
    const [searchPrompt, setSearchPrompt] = useState('')
    const [isLoading, setIsloading] = useState(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidLink = isValidAmazonProductUrl(searchPrompt)

        if(!isValidLink) return alert(`Please provide a valid Amazon Link`)

        try {
            setIsloading(true)

            //Scrape the product page
            const product = await scrapeAndStoreProduct(searchPrompt)
        } catch (error) {
            console.log(error);
            
        } finally {
            setIsloading(false)
        }
    }

    return (
        <form
            className="flex flex-wrap gap-4 mt-12"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}
                placeholder="Enter product link"
                className="searchbar-input"
            />
            <button 
                type="submit"
                className="searchbar-btn"
                disabled={searchPrompt === ''}
            >
                {isLoading ? 'Searching...' : 'Search'}
            </button>
        </form>
    )
}

export default SearchBar