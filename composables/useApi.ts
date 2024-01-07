export const useCustomFetch = <ResponseType>(request: string, options?: any) => {
    const config = useRuntimeConfig()
    const headers = useRequestHeaders()
    return useFetch<ResponseType>(request, {
        baseURL: config.public.baseURL,
        // server: false,
        ...headers,
        ...options
    })
}