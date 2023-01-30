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

      transformResponse: (response: any) => {
        response.students = response.students.map((student: any) => {
          return {
            name: student.sName,
            email: student.sEmail,
            id: student.sId,
            _id: student._id,
          };
        });

        return response;
      },
    }),

    getTeachers: builder.query({
      query: () => ({
        url: '/admin/getUsers/teachers',
        method: 'GET',
      }),

      transformResponse: (response: any) => {
        response.teachers = response.teachers.map((teacher: any) => {
          return {
            name: teacher.tName,
            email: teacher.tEmail,
            id: teacher.tId,
            _id: teacher._id,
          };
        });

        return response;
      },
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetStudentsQuery,
  useGetTeachersQuery,
} = adminApiSlice;
