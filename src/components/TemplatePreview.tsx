"use client";

import { FC } from "react";

import { Template } from "../app/index";

interface TemplatePreviewProperties {
  template: Template;
}

const TemplatePreview: FC<TemplatePreviewProperties> = ({ template }) => {
  return (
    <div className="w-full rounded bg-white p-4 shadow">
      <h2 className="mb-4 font-normal text-[#525252]">{template.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: template.htmlContent }} />
    </div>
  );
};

export default TemplatePreview;
