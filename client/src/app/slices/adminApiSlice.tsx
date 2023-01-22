import { apiSlice } from '../apiSlice';

const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (formData) => ({
        url: '/admin/createUser',
        method: 'POST',
        body: {
          ...formData,
        },
      }),
    }),
  }),
});

export const { useCreateUserMutation } = adminApiSlice;
