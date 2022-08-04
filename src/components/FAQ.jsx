import React from "react";
import { v4 as uuid } from "uuid";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import FadeIn from "react-fade-in";
import ReactMarkdown from "react-markdown";

function FAQ() {
    const args = [{
            question: "What is a hackathon?",
            response: "A hackathon is an event where students come together to design and build awesome projects for a period of time. A great opportunity for students to gather up, learn, and make friends!"
        }, {
            question: "Who is allowed to participate?",
      response: "Anyone age 13 and up are elegible to compete and earn prizes. If a winning participant is living outside of the US and the physical prizes cannot be shipped to their location, they will be notified ahead of time through [email](mailto:eco.hacks.22@gmail.com) and/or [discord](https://discord.gg/2EvZkYEeyk)."
        }, {
            question: "How many people are allowed on each team?",
            response: "A team should consist of 1-4 people."
        }, {
            question: "Do I need to know how to code?",
            response: "Not a lot actually! If this is your first time participating in a hackathon, this can be a great opportunity to learn!"
        }, {
            question: "I am a complete beginner, what do I do?",
            response: "No worries at all! Here is a list of resources to get you started: \n\t [1] [Github student developer pack](https://education.github.com/pack), limitless free resources. \n\t [2] [Machine Learning Specialization](https://www.deeplearning.ai/courses/machine-learning-specialization/), a new revamped AI course for beginners by pioneer Andrew Ng. \n\t [3] [How to survive a hackathon](https://hackernoon.com/how-to-survive-a-hackathon-41318e925d32), quick guide to keep sanity in check under a competitive environment!"
        }, {
            question: "What is the format of the hackathon?",
            response: "Our hackathon runs online from 9/2 - 9/4. Anyone age 13 and up who are interested in learning about coding and environmental issues are allowed to participate. Each participant can form a team of 1 to 4 people. Teams will be given a theme at the start of the hackathon, where they will use to develop a project through the medium of their choice. At the end, each team should attach a GitHub link to their product as well as a video presentation describing the product and its purpose. Open sourced packages are permitted, but no code should be written prior to the hackathon."
        }, {
            question: "Do we get to keep our projects after the event ends?",
            response: "Yes! The project you built is yours to keep. We will only have the permission to display your work and ideas on our website."
        }, {
            question: "Got more questions?",
            response: "Feel free to contact us at [eco.hacks.22@gmail.com](mailto:eco.hacks.22@gmail.com)! Better yet, join our [discord community](https://discord.gg/2EvZkYEeyk)!"
        }];

    return (
        <div id="faq" className="py-5 my-5">
            <span><br /></span>

            <Container>
                <Card className="shadow my-5 mx-4">
                    <Card.Header className="p-4 d-flex justify-content-center">
                        <h6 className="m-0"  style={{ color: "#90745E", fontFamily: "Amatic SC, cursive", fontSize: "3rem", textShadow: "0 0 25px #90745E" }}>
                            Frequently Asked Questions
                        </h6>
                    </Card.Header>
                    <Card.Body className="p-0">
                        <Accordion>
                            {(() => {
                                let fields = [];
                                for (let arg in args) {
                                    fields.push(
                                        <Accordion.Item eventKey={arg}>
                                            <Accordion.Header>
                                                <div style={{ color: "#000", fontFamily: "Amatic SC, cursive", fontSize: "2rem"}}>
                                                    {args[arg].question}
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body className="p-4">
                                                <div className="py-3" style={{ fontFamily: "Open Sans, sans-serif", whiteSpace: "pre-wrap" }}>
                                                    <ReactMarkdown>
                                                        {args[arg].response}
                                                    </ReactMarkdown>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>);
                                }
                                return (<>{fields}</>);
                            })()}
                        </Accordion>
                    </Card.Body>
                </Card>
            </Container>

            <span><br /></span>

        </div>
    );
}

export default FAQ;
