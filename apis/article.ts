
// client/all/article/tree
export const getMenuTree = () => {
    const { $useFetch } = useNuxtApp()
    return $useFetch<any>('/api/client/all/article/tree', { method: 'GET' })
}