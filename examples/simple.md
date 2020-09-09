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

export default () => (
  <div>
    <Board title='test' active={1} dataSource={[]} />
  </div>
);
```