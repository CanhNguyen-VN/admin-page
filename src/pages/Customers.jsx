import React from 'react'
import {GridComponent, ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter} from "@syncfusion/ej2-react-grids"
import {customersData, customersGrid} from "../data/dummy"
import { Helmet } from 'react-helmet';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-s md:p-10 bg-white rounded-3xl">
      <Helmet>
        <title>Customers</title>
          <meta
            name="description"
            content={`customers`}
          />
          <meta
            name="keywords"
            content="customers"
          />
          <meta property="og:image"
    content="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*" />
        </Helmet>
      <GridComponent id="gridcomp"
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={["Delete"]}
      editSettings={{allowDeleting: true,allowEditing: true}}
      width="auto"
      >
        <ColumnsDirective>
        {customersGrid.map((item,index) => (
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
        <Inject services={[ Page,Toolbar,Selection, Edit, Sort, Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers