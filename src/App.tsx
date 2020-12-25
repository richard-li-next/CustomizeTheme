import {
  Calendar,
  Checkbox,
  DatePicker,
  Input,
  Radio,
  Select,
  Tag,
  Timeline,
  TimePicker,
} from 'antd';
import React, { useState } from 'react';
import './styles.less';

export default function App() {
  const [select, setSelect] = useState('');

  return (
    <div className={'container'}>
      <section className={'box'}>
        <Input />
      </section>
      <section className={'box'}>
        <Input.Search />
      </section>
      <section className="box">
        <Select placeholder="Select" style={{ width: '100%' }}>
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="disabled" disabled>
            Disabled
          </Select.Option>
        </Select>
      </section>
      <section className={'box'}>
        <Calendar />
      </section>
      <section className={'box'}>
        <DatePicker />
      </section>
      <section className={'box'}>
        <TimePicker />
      </section>
      <section className={'box'}>
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>
      </section>
      <section className={'box'}>
        <Radio>Radio</Radio>
      </section>
      <section className="box">
        <Tag>Tag 1</Tag>
      </section>
      <section className="box">
        <Checkbox>Checkbox</Checkbox>
      </section>
    </div>
  );
}
