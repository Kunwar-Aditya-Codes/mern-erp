import { apiSlice } from '../apiSlice';

const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getLoggedInStudent: build.query({
      query: () => ({
        url: '/student',
        method: 'GET',
      }),

      providesTags: ['Student'],

      transformResponse: (response: any) => {
        response.student = {
          name: response.student.sName,
          email: response.student.sEmail,
          id: response.student.sId,
          role: response.student.role,
          _id: response.student._id,
          image: response.student.sImage,
        };

        return response;
      },
    }),

    getStudentMark: build.query({
      query: () => ({
        url: `/student/marks`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetLoggedInStudentQuery, useGetStudentMarkQuery } =
  studentApiSlice;
