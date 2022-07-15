import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Schedule() {
    const args = [{
                    title: "Opening Ceremony",
                    description: "Starting the hackathon with a Welcoming introduction to EcoHacks, sponsors, and a talk from a guest speaker.",
                    time: "9/3 10:00 am - 11:30 am"
                }, {
                    title: "Workshop: Web Development",
                    description: "An introduction to creating a fully-static & fully-responsive website.",
                    time: "9/3 5 pm - 6 pm"
                }, {
                    title: "Guest Speaker: Dr. Charlie Brucker, PhD in Computer Science from Cornell University",
                    description: "Countering global warming and sea level rise. Pursuing innovative and technological fixes to save the environment.",
                    time: "9/4 12:30 pm - 1:30 pm"
                }, {
                    title: "Workshop: IOS App Development",
                    description: "An introduction to how to start an IOS application using swift.",
                    time: "9/4 1:30 pm - 2:30 pm"
                }, {
                    title: "Project Deadline",
                    description: "Final time stamp to submit projects",
                    time: "9/5 2:00 pm"
                }, {
                    title: "Workshop: Machine Learning",
                    description: "An introduction to the fundamentals of Machine Learning, including both theoretical and practical applications.",
                    time: "9/5 2:00 pm - 3:00 pm"
                }, {
                    title: "Closing Ceremony",
                    description: "Annoucing the winners, prizes, and thanks.",
                    time: "9/5 3:00 pm - 3:30 pm"
                }
                ]

    return (
        <div id="schedule" className="my-5 py-5">
            <div className="text-center mb-5" style={{ color: "#90745E"}}>
                <div className="title-font" style={{ fontSize: "4em", textShadow: "0 0 25px #90745E" }}>
                    Event Schedule
                </div>
                <div className="text-font">
                    (Time in PDT)
                </div>
            </div>
            <VerticalTimeline lineColor="#a7e1a7">
                {(() => {
                    let fields = [];
                    for (let arg in args) {
                        fields.push(
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work "
                                contentStyle={{ background: '#fff', color: '#90745E'}}
                                contentArrowStyle={{ borderRight: '7px solid  #a7e1a7' }}
                                date={args[arg].time}
                                iconStyle={{ background: '#a7e1a7', color: '#a7e1a7' }}
                            >
                                <h3 className="vertical-timeline-element-title" style={{ fontFamily: "Amatic SC, cursive", fontSize: "2.5em"}}>
                                    {args[arg].title}
                                </h3>
                                <p>
                                    {args[arg].description}
                                </p>
                            </VerticalTimelineElement>
                        )
                    }
                    return (<>{fields}</>);
                }
                )()}
            </VerticalTimeline>
        </div>
    );
}

export default Schedule;