import React from 'react'
import {GridComponent, ColumnsDirective,ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, Excel, PdfExport, Edit, Inject, ExcelExport} from "@syncfusion/ej2-react-grids"

import {ordersData, contextMenuItems, ordersGrid} from "../data/dummy"
import { Header } from '../components'
import { Helmet } from 'react-helmet';

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-s md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders"/>
      <GridComponent id="gridcomponent"
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        <ColumnsDirective>
        {ordersGrid.map((item,index) => (
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Orders