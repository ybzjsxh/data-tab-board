---
title: simple demo
order: 1
group:
  title: demo
  path: examples
---

## simple demo

```jsx
import React from 'react';
import Board from '../src';

const data = [
  { type: 'aa', value: 200, date: '2020-09-08' },
  { type: 'bb', value: 1223, date: '2020-09-08' },
  { type: 'cc', value: 1004, date: '2020-09-08' },
  { type: 'aa', value: 600, date: '2020-09-09' },
  { type: 'bb', value: 123, date: '2020-09-09' },
  { type: 'cc', value: 1225, date: '2020-09-09' },
  { type: 'aa', value: 800, date: '2020-09-10' },
  { type: 'bb', value: 1224, date: '2020-09-10' },
  { type: 'cc', value: 102, date: '2020-09-10' },
  { type: 'aa', value: 1011, date: '2020-09-11' },
  { type: 'bb', value: 1332, date: '2020-09-11' },
  { type: 'cc', value: 193, date: '2020-09-11' },
];
export default () => {
  const [active, setActiveTab] = React.useState(1);
  const [dateType, setDateType] = React.useState(1);

  const handleTabChange = activeTab => {
    setActiveTab(activeTab);
    // do something...
  };

  return (
    <div>
      <Board
        title='demo'
        description='a demonstration'
        active={active}
        dataSource={data}
        dateType={dateType}
        onDateTypeChange={() => setDateType(dateType === 1 ? 2 : 1)}
        onTabChange={e => handleTabChange(e)}
        showExport={true}
      />
    </div>
  );
};
```
