export const setUrl = (url: string) => {
    console.log("Setting url", url)
    localStorage.setItem("url", url)
}

export const getUrl = (): string | null => {
    return localStorage.getItem("url")
}
