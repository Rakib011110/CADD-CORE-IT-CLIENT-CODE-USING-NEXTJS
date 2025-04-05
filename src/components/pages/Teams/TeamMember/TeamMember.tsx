"use client";

import { useGetAllTeamQuery } from "@/redux/api/teamApi";
import { teamCategories } from "@/lib/types/TTeam";
import LoadingSpinner from "@/components/UI/LoadingSpinner/LoadingSpinner";


export default function TeamMembers() {
  const { data: Teams, error, isLoading } = useGetAllTeamQuery({});
  
if (isLoading) return <div className="">
<LoadingSpinner/>
</div>;


if (error) return <div className="text-center py-10 text-red-500">Error loading team members.</div>;


  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error loading team members.</div>;


  const categorizedTeams = teamCategories.map((category) => ({
    category,
    members: Teams?.data?.filter((member: any) => member.category === category) || [],
  }));

  return (
   <div className="max-w-6xl mx-auto" >
     <div className=" max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Team Members <br /> 
      
        </h2>
<div className="text-center">


</div>
      {categorizedTeams.map(({ category, members }) =>
        members.length > 0 && (
          <div key={category} className="mb-8">
           


            <div className=" w-96 -top-6 left-0 bg-red-500 text-white px-3 py-1 rounded-br-lg text-3xl z-10">
                <h1>{category}</h1>
              </div>



            
            <div className="pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {members?.map((member: any) => (
                    <div
                      key={member._id}
                      className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/75 to-transparent text-white p-4 rounded-b-lg transition-all">
                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <p className="text-sm opacity-90">{member.title}</p>
                        {/* {member.location && (
                          <p className="text-xs opacity-80">{member.location}</p>
                        )} */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        )
      )}
      <div>
   

      </div>
    </div> 
   </div>


  );
}
