import React from 'react';

interface ContentProps {
  currentContent: 'profile' | 'doc' | 'time' | '';
}

export default function Content({ currentContent }: ContentProps) {
  const renderContent = () => {
    switch (currentContent) {
      case 'profile':
        return <div>Profile Content</div>;
      case 'doc':
        return <div>Upload a Doc Content</div>;
      case 'time':
        return <div>Scheduled Posts Content</div>;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="w-[55%] h-full rounded-[60px] bg-[#061741] border-[#1452EB] border-2 border-opacity-[50%] flex justify-center items-center">
      {renderContent()}
    </div>
  );
}
