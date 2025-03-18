import baseApi from "../baseApi";


export const UserApi = baseApi.injectEndpoints({

endpoints: (builder)=>({
    getAllCourse: builder.query({
        query: () => ({
          url: `/courses`,
          method: "GET",
       
        }),
        providesTags: ["User"],
      }),

      createCourse: builder.mutation({
        query: (courseData) => ({
          url: "/courses/create-course",
          method: "POST",
          body: courseData,
        }),
        invalidatesTags: ["Course"],
      }),

})


})
export const {
    useGetAllCourseQuery,
    useCreateCourseMutation
  
  } = UserApi;

