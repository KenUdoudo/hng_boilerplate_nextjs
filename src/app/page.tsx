import { useState } from 'react';
import PaginatedTemplateList from '../components/PaginatedTemplateList';
import TemplatePreview from '../components/TemplatePreview';
import { Template } from './index';

const templates: Template[] = [
  { id: 1, name: 'Welcome - No Image', thumbnail: '/path/to/image1.jpg', htmlContent: '<p>HTML content for template 1</p>' },
  { id: 2, name: 'Welcome - Image', thumbnail: '/path/to/image2.jpg', htmlContent: '<p>HTML content for template 2</p>' },
  { id: 3, name: 'Reset Password - No Image', thumbnail: '/path/to/image3.jpg', htmlContent: '<p>HTML content for template 3</p>' },
  { id: 4, name: 'Reset Password - Image', thumbnail: '/path/to/image4.jpg', htmlContent: '<p>HTML content for template 4</p>' },
  { id: 5, name: 'Password Reset Complete - No Image', thumbnail: '/path/to/image5.jpg', htmlContent: '<p>HTML content for template 5</p>' },
  
];

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [activeTab, setActiveTab] = useState<'new' | 'manage'>('manage');

  return (
    <div className="p-8">
      <nav className="mb-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'new' ? 'bg-orange-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('new')}
        >
          New Template
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'manage' ? 'bg-orange-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setActiveTab('manage')}
        >
          Manage Templates
        </button>
      </nav>

      <h1 className="text-2xl font-bold mb-2">Choose In-built Template</h1>
      <p className="mb-4">Explore our library of custom templates.</p>
      <div className="mb-4">
        <span className="text-gray-600">Email > New Template > Edit In-built Template</span>
      </div>

      {activeTab === 'manage' && (
        <div className="flex space-x-4">
          <PaginatedTemplateList templates={templates} onPreview={setSelectedTemplate} />
          {selectedTemplate && <TemplatePreview template={selectedTemplate} />}
        </div>
      )}
    </div>
  );
}
