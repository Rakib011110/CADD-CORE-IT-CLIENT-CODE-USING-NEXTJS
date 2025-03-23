import { useState } from "react";
import { useUpdateTeamMutation } from "@/redux/api/teamApi";
import { Button } from "@/components/UI/button";

interface UpdateTeamFormProps {
  team: any;
  onClose: () => void;
}

export default function UpdateTeamForm({ team, onClose }: UpdateTeamFormProps) {
  const [updateTeam, { isLoading }] = useUpdateTeamMutation();
  const [formData, setFormData] = useState({
    name: team.name,
    title: team.title,
    category: team.category,
    photoUrl: team.photoUrl,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateTeam({ id: team._id, TeamData: formData }).unwrap();
      onClose();
    } catch (error) {
      console.error("Error updating team:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Update Team Member</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            placeholder="Name"
          />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            placeholder="Title"
          />
          <input
            type="text"
            name="photoUrl"
            value={formData.photoUrl}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            placeholder="Photo URL"
          />
          <div className="flex justify-end mt-4 space-x-2">
            <Button onClick={onClose} variant="outline">Cancel</Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
