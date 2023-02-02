import { apiSlice } from '../apiSlice';

const teacherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLoggedInTeacher: builder.query({
      query: () => ({
        url: '/teacher',
        method: 'GET',
      }),

      providesTags: ['Teacher'],

      transformResponse: (response: any) => {
        response.teacher = {
          name: response.teacher.tName,
          email: response.teacher.tEmail,
          id: response.teacher.tId,
          role: response.teacher.role,
          _id: response.teacher._id,
          image: response.teacher.tImage,
        };

        return response;
      },
    }),
  }),
});

export const { useGetLoggedInTeacherQuery } = teacherApiSlice;
