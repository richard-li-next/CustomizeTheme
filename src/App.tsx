import { Input, Select } from 'antd';
import React, { useState } from 'react';

export default function App() {
  const [select, setSelect] = useState('');

  return (
    <div style={{ padding: '30px', display: 'flex' }}>
      <section style={{ border: '1px solid', padding: '100px', width: '500px' }}>
        <Input.Search />
      </section>
      <section style={{ border: '1px solid', padding: '100px', width: '500px' }}>
        <Select placeholder="Select" style={{ width: '100%' }}>
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="disabled" disabled>
            Disabled
          </Select.Option>
        </Select>
      </section>
    </div>
  );
}
