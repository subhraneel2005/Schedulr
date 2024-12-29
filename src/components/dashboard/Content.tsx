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
    <div className="lg:w-[70%] w-[90%] h-full rounded-[28px] lg:rounded-[40px] bg-[#061741] border-[#1452EB] border-2 border-opacity-[50%] flex justify-center items-center">
      {renderContent()}
    </div>
  );
}
