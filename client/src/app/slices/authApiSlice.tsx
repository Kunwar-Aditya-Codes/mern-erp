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

    studentLogin: builder.mutation({
      query: ({ sId, sPassword }: { sId: string; sPassword: string }) => ({
        url: '/auth/login-student',
        method: 'POST',
        body: { sId, sPassword },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useTeacherLoginMutation,
  useStudentLoginMutation,
} = authApiSlice;
