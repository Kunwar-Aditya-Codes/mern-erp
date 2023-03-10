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

    getStudentsMarks: builder.query({
      query: () => ({
        url: '/teacher/marks-list',
        method: 'GET',
      }),

      providesTags: ['StudentMarks'],
    }),

    getStudentMarksById: builder.query({
      query: (id) => ({
        url: `/teacher/marks-list/${id}`,
        method: 'GET',
      }),

      providesTags: ['StudentMarks'],
    }),

    addStudentMarks: builder.mutation({
      query: ({ studentId, subjectMarks }) => ({
        url: `/teacher/marks-list/${studentId}`,
        method: 'POST',
        body: { subjectMarks },
      }),

      invalidatesTags: ['StudentMarks'],
    }),
  }),
});

export const {
  useGetLoggedInTeacherQuery,
  useGetStudentsMarksQuery,
  useGetStudentMarksByIdQuery,
  useAddStudentMarksMutation,
} = teacherApiSlice;
