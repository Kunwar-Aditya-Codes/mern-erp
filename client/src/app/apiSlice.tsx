import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setToken } from './slices/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }: any) => {
    const token = getState()?.auth?.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.log('Reauthenticating...');
    const refreshResult = await baseQuery(
      '/auth/refresh-token',
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      api.dispatch(setToken({ ...refreshResult.data }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      return refreshResult;
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Teacher', 'Student', 'Admin'],
  endpoints: (builder) => ({}),
});
