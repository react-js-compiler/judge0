import { Table, Divider, Tag } from 'antd';
import React from 'react';


export default class SubAntd extends React.Component{
    state ={
        color :'red'
    };
    render(){
        const columns = [
            {
              title: 'Time',
              dataIndex: 'time',
              key: 'time',
            },
            {
              title: 'Status',
              key: 'status',
              dataIndex: 'status',
              status: 1,
            },
            {
              title: 'Memory',
              dataIndex: 'memory',
              key: 'memory',
            },
            {
              title: 'RunTime',
              dataIndex: 'runtime',
              key: 'runtime',
            },
            {
              title: 'Language',
              dataIndex: 'language',
              key: 'language',
            },
          ];
          
          
          const data = [
            {
              key: '1',
              time: '10 days ago',
              status: 'Accepted',
              runtime: '1 ms',
              memory: '10 MB',
              language: 'java',
            },
            {
              key: '2',
              time: '10 days ago',
              status: 'Wrong Answer',
              runtime: 'N/A',
              memory: 'N/A',
              language: 'java',
            },
          ];

          const listRow = data.map(item => {
              return (
                <tr>
                    <td>{item.time}</td>
                    <td><span className="accept">{item.status}</span></td>
                    <td>{item.memory}</td>
                    <td>{item.runtime}</td>
                    <td>{item.language}</td>
                </tr>
              );
          });
        return (
            <table className="table-antd">
                <tr>
                    <th>Time</th>
                    <th>Status</th>
                    <th>RunTime</th>
                    <th>Memory</th>
                    <th>Language</th>
                </tr>
                {listRow}
            </table>
        );
    }
}
