import { useQuery } from '@tanstack/react-query'
import { fetchRandomUser } from '@/services/randomUserService'

export const useRandomUser = (params) => {
  return useQuery({
    queryKey: ['randomUser', params],
    queryFn: () => fetchRandomUser(params),
    staleTime: Infinity, // Don't refetch unless manually triggered
  })
}
