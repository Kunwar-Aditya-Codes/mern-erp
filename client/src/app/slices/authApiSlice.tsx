import { apiSlice } from '../apiSlice';

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }: { email: string; password: string }) => ({
        url: '/auth/login',
        method: 'POST',
        body: { email, password },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
