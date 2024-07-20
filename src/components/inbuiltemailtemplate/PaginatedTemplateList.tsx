"use client";

import { FC, useState } from "react";

import { Template } from "./index";

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
        <tbody>
          {currentTemplates.map((template) => (
            <tr key={template.id} className="border-b hover:bg-gray-50">
              <td className="flex items-center px-[24px] py-[20px]">
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="mr-[21px] h-[120px] w-[120px] rounded-[8px] border-[1px]"
                />
                {template.name}
              </td>
              <td className="px-4 py-2 text-right">
                <button
                  className="mr-[32px] text-[12px]"
                  onClick={() => onPreview(template)}
                >
                  Preview
                </button>
                <button className="text-[12px]">Edit</button>
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
            className={`h-[36px] w-[35px] rounded text-center ${currentPage === number + 1 ? "border-[1px] border-[#F97316] bg-[#FFECE5]" : "bg-white"}`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginatedTemplateList;
