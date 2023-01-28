import { apiSlice } from '../apiSlice';

export const adminApiSlice = apiSlice.injectEndpoints({
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

    getStudents: builder.query({
      query: () => ({
        url: '/admin/getUsers/students',
        method: 'GET',
      }),
    }),
  }),
});

export const { useCreateUserMutation, useGetStudentsQuery } = adminApiSlice;
