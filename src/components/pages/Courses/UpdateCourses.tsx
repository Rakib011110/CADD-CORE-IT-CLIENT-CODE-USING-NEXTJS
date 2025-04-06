"use client";
import { Button } from "@/components/UI/button";

export default function UpdateCourse({ formData, setFormData, setSelectedCourses, handleUpdate }: any) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleScheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      schedule: {
        ...prev.schedule,
        [name]: value,
      },
    }));
  };

  const handleOverviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      overview: {
        ...prev.overview,
        [name]: value,
      },
    }));
  };

  const handleCourseIncludesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      courseIncludes: {
        ...prev.courseIncludes,
        [name]: value,
      },
    }));
  };

  const handleTopicChange = (index: number, field: string, value: string) => {
    const updated = [...formData.topicsCovered];
    updated[index][field] = value;
    setFormData((prev: any) => ({
      ...prev,
      topicsCovered: updated,
    }));
  };

  const handleAddTopic = () => {
    setFormData((prev: any) => ({
      ...prev,
      topicsCovered: [...prev.topicsCovered, { topicTitle: "", topicDescription: "" }],
    }));
  };

  const handleSoftwareChange = (index: number, field: string, value: string) => {
    const updated = [...formData.softwaresTaught];
    updated[index][field] = value;
    setFormData((prev: any) => ({
      ...prev,
      softwaresTaught: updated,
    }));
  };

  const handleAddSoftware = () => {
    setFormData((prev: any) => ({
      ...prev,
      softwaresTaught: [...prev.softwaresTaught, { softwareTitle: "", photoUrl: "" }],
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50 p-6 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Update Course</h2>

        {/* Main Fields */}
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full border p-2 rounded" />
        <input name="slug" value={formData.slug} onChange={handleChange} placeholder="Slug" className="w-full border p-2 rounded" />
        <input name="categories" value={formData.categories} onChange={handleChange} placeholder="Categories" className="w-full border p-2 rounded" />
        <input name="duration" value={formData.duration} onChange={handleChange} placeholder="Duration" className="w-full border p-2 rounded" />
        <input name="lessons" value={formData.lessons} onChange={handleChange} placeholder="Lessons" className="w-full border p-2 rounded" />
        <input name="photoUrl" value={formData.photoUrl} onChange={handleChange} placeholder="Photo URL" className="w-full border p-2 rounded" />
        <input name="projects" value={formData.projects} onChange={handleChange} placeholder="Projects" className="w-full border p-2 rounded" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full border p-2 rounded" />
        <input name="courseFee" value={formData.courseFee} onChange={handleChange} placeholder="Course Fee" className="w-full border p-2 rounded" />

        {/* Schedule */}
        <h3 className="text-lg font-semibold">Schedule</h3>
        <input name="startingDate" value={formData.schedule.startingDate} onChange={handleScheduleChange} placeholder="Starting Date" className="w-full border p-2 rounded" />
        <input name="mode" value={formData.schedule.mode} onChange={handleScheduleChange} placeholder="Mode" className="w-full border p-2 rounded" />
        <input name="days" value={formData.schedule.days} onChange={handleScheduleChange} placeholder="Days" className="w-full border p-2 rounded" />
        <input name="time" value={formData.schedule.time} onChange={handleScheduleChange} placeholder="Time" className="w-full border p-2 rounded" />

        {/* Overview */}
        <h3 className="text-lg font-semibold">Overview</h3>
        <textarea name="overviewDescription" value={formData.overview.overviewDescription} onChange={handleOverviewChange} placeholder="Overview Description" className="w-full border p-2 rounded" />
        <input name="videoUrl" value={formData.overview.videoUrl} onChange={handleOverviewChange} placeholder="Video URL" className="w-full border p-2 rounded" />

        {/* Course Includes */}
        <h3 className="text-lg font-semibold">Course Includes</h3>
        <input name="duration" value={formData.courseIncludes.duration} onChange={handleCourseIncludesChange} placeholder="Duration" className="w-full border p-2 rounded" />
        <input name="weeklyLiveClasses" value={formData.courseIncludes.weeklyLiveClasses} onChange={handleCourseIncludesChange} placeholder="Weekly Live Classes" className="w-full border p-2 rounded" />
        <input name="weeklyClassHours" value={formData.courseIncludes.weeklyClassHours} onChange={handleCourseIncludesChange} placeholder="Weekly Class Hours" className="w-full border p-2 rounded" />

        {/* Topics Covered */}
        <h3 className="text-lg font-semibold">Topics Covered</h3>
        {formData.topicsCovered.map((topic: any, index: number) => (
          <div key={index} className="grid grid-cols-2 gap-2 mb-2">
            <input
              value={topic.topicTitle}
              onChange={(e) => handleTopicChange(index, "topicTitle", e.target.value)}
              placeholder="Topic Title"
              className="border p-2 rounded"
            />
            <input
              value={topic.topicDescription}
              onChange={(e) => handleTopicChange(index, "topicDescription", e.target.value)}
              placeholder="Topic Description"
              className="border p-2 rounded"
            />
          </div>
        ))}
        <Button variant="outline" onClick={handleAddTopic}>Add Topic</Button>

        {/* Softwares Taught */}
        <h3 className="text-lg font-semibold">Softwares Taught</h3>
        {formData.softwaresTaught.map((software: any, index: number) => (
          <div key={index} className="grid grid-cols-2 gap-2 mb-2">
            <input
              value={software.softwareTitle}
              onChange={(e) => handleSoftwareChange(index, "softwareTitle", e.target.value)}
              placeholder="Software Title"
              className="border p-2 rounded"
            />
            <input
              value={software.photoUrl}
              onChange={(e) => handleSoftwareChange(index, "photoUrl", e.target.value)}
              placeholder="Photo URL"
              className="border p-2 rounded"
            />
          </div>
        ))}
        <Button variant="outline" onClick={handleAddSoftware}>Add Software</Button>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-6">
          <Button variant="outline" onClick={() => setSelectedCourses(null)}>
            Cancel
          </Button>
          <Button onClick={handleUpdate}>Update</Button>
        </div>
      </div>
    </div>
  );
}
