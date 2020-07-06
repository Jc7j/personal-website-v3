import React from 'react';
import { useTabs } from './Tabs';

export interface ITabProps {
  label: string;
}

/**
 * This component allows changing of the active Tab.
 */
export const Tab: React.FC<ITabProps> = (props) => {
  const { setActiveTab } = useTabs();
  return (
    <div className="tab">
      <button onClick={() => setActiveTab(props.label)}>
        {props.children}
      </button>
    </div>
  );
};
