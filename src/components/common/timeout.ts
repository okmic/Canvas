
export const timeout = (
    setLoading:(b: boolean) => void,
    setCompleted: (b: boolean) => void,
    timeL: number,
    timeC: number
    ) => {
    const loading = setTimeout(
        () => {
            setLoading(true)
            const completed = setTimeout(
                () => {
                   setCompleted(true)
                }, timeL)
                return () => clearTimeout(completed)
        }, timeC)
    return () => clearTimeout(loading)
}
export const timeoutOne = (
    setLoading:(b: boolean) => void,
    timeL: number,
    ) => {
    const loading = setTimeout(
        () => {
            setLoading(false)
        }, timeL)
    return () => clearTimeout(loading)
} 