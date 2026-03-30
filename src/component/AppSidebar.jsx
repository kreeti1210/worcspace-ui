import {
  Bot,
  Brain,
  BookOpen,
  FolderUp,
  Monitor,
  MailWarning,
  Zap,
  CirclePlay,
  Lock,
  Database,
  BarChart3,
  Settings,
  Plug,
} from "lucide-react";

const sidebarSections = [
  {
    label: "MY PROJECTS",
    items: [
      { icon: Bot, label: "Agents" },
      { icon: Brain, label: "AI Models" },
      { icon: BookOpen, label: "Library" },
    ],
  },
  {
    label: "ORCHESTRATOR",
    items: [
      { icon: FolderUp, label: "Published" },
      { icon: Monitor, label: "Machines" },
      { icon: MailWarning, label: "Queues" },
      { icon: Zap, label: "Triggers" },
      { icon: CirclePlay, label: "Jobs" },
      { icon: Database, label: "Executions" },
      { icon: Lock, label: "Vault" },
      { icon: BarChart3, label: "Knowledge Base", active: true },
      { icon: Settings, label: "Key Store" },
    ],
  },
  {
    label: "ADMIN",
    items: [
      { icon: Settings, label: "Tenant" },
      { icon: Plug, label: "Integrations" },
    ],
  },
];

const AppSidebar = () => {
  return (
    <div className="flex flex-col h-screen">
      <aside className="w-56 min-h-screen bg-white border-r flex flex-col">

        <nav className="flex-1 py-2 px-2">
          {sidebarSections.map((section) => (
            <div key={section.label} className="mb-2">
              <p className="px-4 py-2 text-sm font-semibold text-gray-400 uppercase">
                {section.label}
              </p>

              {section.items.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 px-4 py-2 text-sm ${
                    item.active
                      ? "bg-indigo-50 text-indigo-600 border-l-2 border-indigo-600 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
              ))}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default AppSidebar;
