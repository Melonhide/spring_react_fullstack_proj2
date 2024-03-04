import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div); // 使用createRoot
  root.render(<App />);
  root.unmount(); // 卸载组件
});
