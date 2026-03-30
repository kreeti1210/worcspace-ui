import { useState } from "react";
import AppSidebar from "../component/AppSidebar";
import AppHeader from "../component/AppHeader";
import CreateKnowledgeBaseModal from "../component/CreateKnowledgeBaseModal";
import KnowledgeBaseCard from "../component/KnowledgBaseCard";
import PaginationBar from "../component/Pagination";
import Header from "../component/Header";

const dummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

const knowledgeBases = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "Test",
  description: dummyText,
  createdOn: "29/03/25",
}));

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Header />
      <div className="flex bg-gray-50 ">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <AppHeader onCreateNew={() => setModalOpen(true)} />
          <div className="p-2 m-4 border rounded-lg">
            <div className="grid p-2 grid-cols-3 gap-4">
              {knowledgeBases.map((kb) => (
                <KnowledgeBaseCard key={kb.id} {...kb} />
              ))}
            </div>
          </div>

          <PaginationBar />
        </main>

        <CreateKnowledgeBaseModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Index;
