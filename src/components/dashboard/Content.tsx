import React from 'react';
import Profile from './tabs/Profile';
import Doc from './tabs/Doc';
import MyEvents from './tabs/MyEvents';

interface ContentProps {
  currentContent: 'profile' | 'doc' | 'time' | '';
}

export default function Content({ currentContent }: ContentProps) {
  const renderContent = () => {
    switch (currentContent) {
      case 'profile':
        return <Profile/>;
      case 'doc':
        return <Doc/>;
      case 'time':
        return <MyEvents/>;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="lg:w-[70%] dark:text-[#8FBFFA] w-[90%] min-h-screen rounded-[28px] lg:rounded-[40px] bg-[#f6f7f9] dark:bg-[#061741] border-[#ebedf1] dark:border-[#1452EB] border-2 dark:border-opacity-[30%] flex justify-center items-center">
      {renderContent()}
    </div>
  );
}
