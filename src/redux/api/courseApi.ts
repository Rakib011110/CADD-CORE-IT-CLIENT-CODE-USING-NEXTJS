import { use } from "react";
import baseApi from "../baseApi";


export const UserApi = baseApi.injectEndpoints({

endpoints: (builder)=>({
    getAllCourse: builder.query({
        query: () => ({
          url: `/courses`,
          method: "GET",
       
        }),
        providesTags: ["Course"],
      }),

      createCourse: builder.mutation({
        query: (courseData) => ({
          url: "/courses/create-course",
          method: "POST",
          body: courseData,
        }),
        invalidatesTags: ["Course"],
      }),

      deleteCourse: builder.mutation({
        query: (id) => ({
          url: `/courses/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Course"],
      }),

})


})
export const {
    useGetAllCourseQuery,
    useCreateCourseMutation,
    useDeleteCourseMutation
  } = UserApi;

