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

    teacherLogin: builder.mutation({
      query: ({ tId, tPassword }: { tId: string; tPassword: string }) => ({
        url: '/auth/login-teacher',
        method: 'POST',
        body: { tId, tPassword },
      }),
    }),
  }),
});

export const { useLoginMutation, useTeacherLoginMutation } = authApiSlice;
