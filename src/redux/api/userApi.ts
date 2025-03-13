import baseApi from "../baseApi";


export const UserApi = baseApi.injectEndpoints({

endpoints: (builder)=>({

    getAllUsers: builder.query({
        query: () => ({
          url: `/user`,
          method: "GET",
        //   headers: {
        //     Authorization: `${Cookies.get("accessToken")}`,
        //   },
        }),
        providesTags: ["User"],
      }),
})


})
export const {
    useGetAllUsersQuery,
  
  } = UserApi;