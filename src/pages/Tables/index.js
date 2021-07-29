import React, { useMemo, useState, useEffect } from "react";
import { useTable } from 'react-table';
import { usuarios } from '../User/datosUsuarios';
import { Link } from 'react-router-dom'
import axios from 'axios';

const COLUMS = [
    {
        Header:'id',
        accessor:'id'
    },
    {
        Header:'Nombre',
        accessor:'first_name'
    },
    {
        Header:'Apellido',
        accessor:'last_name'
    },
    {
        Header:'Bloquear',
        accessor:'state',
        Cell: props => {
           console.log(props);
            return props.value == false ? (
            <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id={"customSwitches"+props.row.values.id} defaultChecked={true} />
                <label className="custom-control-label" htmlFor={"customSwitches"+props.row.values.id}  ></label>
            </div>
            ) : (
            <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id={"customSwitches"+props.row.values.id} defaultChecked={false} />
                <label className="custom-control-label" htmlFor={"customSwitches"+props.row.values.id}  ></label>
            </div>
            );
            
          }
    },
    {
        Header:'Detalles',
        accessor:'detalles',
        Cell: props => {
            return(
                <Link to={`/users/${props.row.values.id}`} className="button muted-button">
                    Ver Usuario
                </Link>

            )
        }
    },
]

export const BasicTable = () => {
    
    
    const colums = useMemo(() => COLUMS, [])
    
    const [data, setData] = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
      async function getData() {
        await axios
          .get("http://147.182.178.147:3000/all-users?Security-Token=51H59M5AM6STiGkOsA9g7oVSU4QCaxGQF5949OJn3RT0bK0jF8hrN1YP8TmVQG4Aix4eM7mRRzSSGX1OsYfQqKpVh00lpPWzsJe")
          .then((response) => {
            // check if the data is populated
            console.log(response.data);
            setData(response.data);
            // you tell it that you had the result
            setLoadingData(false);
          });
      }
      if (loadingData) {
        // if the result is not ready so you make the axios call
        getData();
      }
    }, []);

    const tableInstance = useTable({
        columns:colums,
        data:data,
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    return(
        <table {...getTableBodyProps()} id="example" className="table table-striped table-bordered" style={{width:"100%"}}>
            <thead>
                {
                    headerGroups.map((headerGroup)=> (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map( column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>) )}
                    </tr>))
                }
                
            </thead>

            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps}>
                                {
                                    row.cells.map((cell)=>{
                                        return <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                            {} 
                                        </td>
                                    })
                                }
                        </tr>
                        )
                    })
                }
            </tbody>

        </table>
    )
}
