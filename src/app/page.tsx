"use client";

import { useState } from "react";
import { LuChevronRight } from "react-icons/lu";

import PaginatedTemplateList from "../components/PaginatedTemplateList";
import TemplatePreview from "../components/TemplatePreview";
import { Template } from "./index";

const templates: Template[] = [
  {
    id: 1,
    name: "Welcome - No Image",
    thumbnail: "/path/to/image1.jpg",
    htmlContent: "<p>HTML content for template 1</p>",
  },
  {
    id: 2,
    name: "Welcome - Image",
    thumbnail: "/path/to/image2.jpg",
    htmlContent: "<p>HTML content for template 2</p>",
  },
  {
    id: 3,
    name: "Reset Password - No Image",
    thumbnail: "/path/to/image3.jpg",
    htmlContent: "<p>HTML content for template 3</p>",
  },
  {
    id: 4,
    name: "Reset Password - Image",
    thumbnail: "/path/to/image4.jpg",
    htmlContent: "<p>HTML content for template 4</p>",
  },
  {
    id: 5,
    name: "Password Reset Complete - No Image",
    thumbnail: "/path/to/image5.jpg",
    htmlContent: "<p>HTML content for template 5</p>",
  },
];

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState<"manage" | "new">("new");

  return (
    <div className="p-8">
      <nav className="mb-[24px] rounded-[9px] border-[1px]">
        <button
          className={`border-r-[1px] px-[14px] py-[16px] text-[14px] ${activeTab === "manage" ? "text-[#F97316]" : "text-gray-[#8e8e93]"}`}
          onClick={() => setActiveTab("manage")}
        >
          New Template
        </button>
        <button
          className={`border-l-[1px] px-[14px] py-[16px] text-[14px] ${activeTab === "new" ? "text-[#F97316]" : "text-gray-[#8e8e93]"}`}
          onClick={() => setActiveTab("new")}
        >
          Manage Templates
        </button>
      </nav>

      <h1 className="mb-[12px] text-[24px] font-bold text-[#0A0A0A]">
        Choose In-built Template
      </h1>
      <p className="mb-[24px] font-normal text-[#0A0A0A]">
        Explore our library of custom templates.
      </p>
      <div className="mb-[36px] flex flex-row items-center gap-[20px]">
        <p className="text-[12px] font-normal text-[#525252]">Email</p>
        <p>></p>
        <p className="text-[12px] font-normal text-[#525252]">New Template</p>
        <p>></p>
        <p className="text-[12px] font-normal text-[#525252]">
          Edit In-built Template
        </p>
      </div>

      {activeTab === "manage" && (
        <div className="flex space-x-4">
          <PaginatedTemplateList
            templates={templates}
            onPreview={setSelectedTemplate}
          />
          {selectedTemplate && <TemplatePreview template={selectedTemplate} />}
        </div>
      )}
    </div>
  );
}
