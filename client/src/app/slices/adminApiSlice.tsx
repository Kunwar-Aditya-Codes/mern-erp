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

    getUsers: builder.mutation({
      query: (role) => ({
        url: `/admin/getUsers/${role}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateUserMutation } = adminApiSlice;
