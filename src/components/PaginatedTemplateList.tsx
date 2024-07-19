"use client";

import { FC, useState } from "react";

import { Template } from "../app/index";

interface PaginatedTemplateListProperties {
  templates: Template[];
  onPreview: (template: Template) => void;
}

const PaginatedTemplateList: FC<PaginatedTemplateListProperties> = ({
  templates,
  onPreview,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const templatesPerPage = 5;

  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
  const currentTemplates = templates.slice(
    indexOfFirstTemplate,
    indexOfLastTemplate,
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full">
      <table className="min-w-full rounded bg-white shadow">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="px-4 py-2 text-left">Template</th>
            <th className="px-4 py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTemplates.map((template) => (
            <tr key={template.id} className="border-b hover:bg-gray-50">
              <td className="flex items-center px-4 py-2">
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="mr-4 h-12 w-12"
                />
                {template.name}
              </td>
              <td className="px-4 py-2 text-right">
                <button
                  className="mr-2 text-blue-500"
                  onClick={() => onPreview(template)}
                >
                  Preview
                </button>
                <button className="text-gray-600">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center space-x-2">
        {[
          ...Array.from({
            length: Math.ceil(templates.length / templatesPerPage),
          }).keys(),
        ].map((number) => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`rounded px-4 py-2 ${currentPage === number + 1 ? "bg-orange-500 text-white" : "bg-gray-300"}`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginatedTemplateList;
