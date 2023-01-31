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

      invalidatesTags: ['Student', 'Teacher'],
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
            role: student.role,
            _id: student._id,
          };
        });

        return response;
      },

      providesTags: ['Student'],
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
            role: teacher.role,
            _id: teacher._id,
          };
        });

        return response;
      },

      providesTags: ['Teacher'],
    }),

    deleteUser: builder.mutation({
      query: (data) => ({
        url: '/admin/deleteUser',
        method: 'DELETE',
        body: {
          id: data._id,
          role: data.role,
        },
      }),

      invalidatesTags: ['Student', 'Teacher'],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetStudentsQuery,
  useGetTeachersQuery,
  useDeleteUserMutation,
} = adminApiSlice;
