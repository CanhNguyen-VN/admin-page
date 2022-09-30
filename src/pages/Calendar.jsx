import React from 'react'
import {ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop} from '@syncfusion/ej2-react-schedule'


import { scheduleData } from '../data/dummy'
import { Helmet } from 'react-helmet';
const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Helmet>
        <title>Calendar</title>
          <meta
            name="description"
            content={`calendar`}
          />
          <meta
            name="keywords"
            content="calendar"
          />
          <meta property="og:image"
    content="https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg" />
        </Helmet>
      <ScheduleComponent
      height="650px"
      eventSettings={{dataSource: scheduleData}}
      selectedDate = {new Date(2021,0,10)}
      >
        <Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calendar