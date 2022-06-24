import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Schedule() {
    const args = [{
                    title: "Event One Placeholder",
                    description: "A quick fox jumped over a lazy dog",
                    time: "9/2 10:00 am"
                }, {
                    title: "Event Two Placeholder",
                    description: "A lazy dog got jumped over by a quick fox",
                    time: "9/2 12:00 pm"
                }, {
                    title: "Event Three Placeholder",
                    description: "The quick fox don't want to jump over the lazy dog anymore",
                    time: "9/3 12:00 pm"
                }, {
                    title: "Event Four Placeholder",
                    description: "The dog don't want to get jumped by a quick fox anymore",
                    time: "9/4 12:00 pm"
                }, {
                    title: "Event Five Placeholder",
                    description: "The dog and the fox lived happily ever after",
                    time: "9/5 8:00 pm"
                }
                ]

    return (
        <div id="schedule" className="my-5 py-5">
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