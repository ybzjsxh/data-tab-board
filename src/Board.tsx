import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import DatePicker from 'antd/es/date-picker';
import Line, { LineConfig } from '@ant-design/charts/es/line';
import 'moment/locale/zh-cn';
import moment, { Moment } from 'moment';

import zhCN from 'antd/es/date-picker/locale/zh_CN';
import 'antd/dist/antd.css';
import './index.css';

export interface BoardProps {
  style?: React.CSSProperties;
  title?: string;
  description?: string;
  active: number | string;
  dateType: number | string;
  dataSource: [];
  rangeValue: [Moment, Moment];
  showExport?: boolean;
  onTabChange: (activeKey: number) => void;
  onDateChange: (date: Moment, dateString?: string) => void;
  onDatesChange: (date: Moment, dateString?: string) => void;
  onDateOpenChange: () => void;
  onDateTypeChange: (activeKey: number | string) => void;
  onExport: () => void;
}

const Board = (props: BoardProps, ref: any) => {
  const {
    style,
    active = 2,
    dataSource = [],
    dateType = 1,
    title = '',
    description = '',
    showExport = true,
    rangeValue = [moment().subtract(8, 'days'), moment().subtract(1, 'day')],
  } = props;
  const domRef = useRef(null);
  useImperativeHandle(ref, () => domRef.current);

  const config: LineConfig = {
    title: {
      visible: true,
      text: title,
    },
    description: {
      visible: true,
      text: description,
    },
    padding: 'auto',
    forceFit: true,
    data: dataSource,
    xField: 'date',
    yField: 'value',
    seriesField: 'type',
    yAxis: {
      label: {
        formatter: (v: number | string) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`),
      },
    },
    legend: { position: 'right-top' },
    responsive: true,
    point: {
      visible: true,
      size: 4,
    },
  };

  // 处理左侧tab变化
  const handleTabChange = (activeKey: number) => {
    const { onTabChange } = props;
    if (onTabChange) {
      onTabChange(activeKey);
    }
  };

  // dateType: 2时处理时间范围改变
  const handleDateRangeChange = (dates: Moment, dateString?: string) => {
    const { onDatesChange } = props;
    if (onDatesChange) {
      onDatesChange(dates, dateString);
    }
  };

  // dateType: 1时处理时间变化
  const handleDateChange = (date: Moment, dateString?: string) => {
    const { onDateChange } = props;
    if (onDateChange) {
      onDateChange(date, dateString);
    }
  };

  // 处理所有日期面板打开时的变化
  const handleDateOpenChange = () => {
    const { onDateOpenChange } = props;
    if (onDateOpenChange) {
      onDateOpenChange();
    }
  };

  // 处理dateType胶囊改变时的变化
  const handleDateTypeChange = (activeKey: number | string) => {
    const { onDateTypeChange } = props;
    if (onDateTypeChange) {
      onDateTypeChange(activeKey);
    }
  };

  const handleExport = () => {
    const { onExport } = props;
    if (onExport) {
      onExport();
    }
  };

  return (
    <div className='container' style={style}>
      <div className='header'>
        <div className='days'>
          {['昨日', '近7日', '近30日'].map((item, index) => {
            if (active === index + 1) {
              return (
                <div className='day active' key={index}>
                  {item}
                </div>
              );
            }
            return (
              <div className='day' key={index} onClick={() => handleTabChange(index + 1)}>
                {item}
              </div>
            );
          })}
        </div>
        <div className='range'>
          {dateType === 1 ? (
            <>
              <DatePicker.RangePicker
                locale={zhCN}
                onChange={(e: any) => handleDateRangeChange(e)}
                onOpenChange={() => handleDateOpenChange()}
                disabledDate={current => current && current > moment().subtract(1, 'day')}
                value={rangeValue}
              />
            </>
          ) : (
            <DatePicker
              locale={zhCN}
              defaultValue={moment().subtract(1, 'day')}
              onChange={(e: any) => handleDateChange(e)}
              onOpenChange={() => handleDateOpenChange()}
              disabledDate={current => current && current > moment().subtract(1, 'day')}
            />
          )}
        </div>
        <div className='stats-type'>
          {['按日', '按小时'].map((i, index) => {
            if (dateType === index + 1) {
              return (
                <div className='stat stat-active' key={index}>
                  {i}
                </div>
              );
            }
            return (
              <div className='stat' key={index} onClick={() => handleDateTypeChange(index + 1)}>
                {i}
              </div>
            );
          })}
        </div>
        {showExport && (
          <div className='export'>
            <button onClick={() => handleExport()}>导&nbsp;出</button>
          </div>
        )}
      </div>
      <div className='chart'>
        {dataSource.length > 0 ? (
          <Line {...config} />
        ) : (
          <span className='chart__empty'>暂无数据</span>
        )}
      </div>
    </div>
  );
};

export default forwardRef(Board);
