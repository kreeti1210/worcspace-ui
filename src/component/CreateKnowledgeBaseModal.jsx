import { X } from "lucide-react";

const CreateKnowledgeBaseModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      <div className="relative w-full max-w-md h-full bg-white shadow-xl flex flex-col">

        <div className="flex justify-between p-6 border-b ">
          <div className="mr-6">
            <h2 className="text-lg font-semibold">Create New Knowledge Base</h2>
            <p className="text-sm text-gray-500">
              Best from quick answers from documents, websites and text files
            </p>
          </div>

          <button onClick={onClose} className="text-gray-700">
            <X />
          </button>
        </div>

        <div className="flex-1 px-6 space-y-4 mt-5">
          <div>
            <label className="text-sm font-medium text-gray-700 ">
              Name (Cannot be edited later)
              <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Name"
              className="w-full border  text-sm rounded px-3 py-2 mt-2"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 ">
              Description
            </label>
            <textarea
              placeholder="Description"
              className="w-full border text-sm rounded px-3 py-2 mt-2 h-42"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 ">
              Vector Store<span className="text-red-500">*</span>
            </label>
            <select
              required
              className="w-full border text-gray-600 text-sm rounded px-3 py-2 mt-2"
            >
              <option>Qdrant</option>
              <option>Pinecone</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 ">
              LLM Embedding Model<span className="text-red-500">*</span>
            </label>
            <select
              required
              className="w-full border text-gray-600 text-sm rounded px-3 py-2 mt-2"
            >
              <option>text-embedding-ada-002</option>
              <option>GPT-4.0</option>
              <option>Gemini2.0</option>
            </select>
          </div>
        </div>

        <div className="p-6 border-t flex justify-end">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateKnowledgeBaseModal;
