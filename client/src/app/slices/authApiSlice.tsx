import { apiSlice } from '../apiSlice';
import { setToken } from './authSlice';

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

    refresh: builder.mutation({
      query: () => ({
        url: '/auth/refresh-token',
        method: 'GET',
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const res = await queryFulfilled;
        const accessToken = res.data.accessToken;
        dispatch(setToken(accessToken));
      },
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'GET',
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(setToken(null));
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useTeacherLoginMutation,
  useStudentLoginMutation,
  useRefreshMutation,
  useLogoutMutation,
} = authApiSlice;
