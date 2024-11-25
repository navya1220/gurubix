import React from 'react';
import { Card, CardTitle, TopicList, Topic } from '../styles/StyledComponents.js';
import { Link } from 'react-router-dom';

const DesignSingleBox = ({ card }) => {
  return (
    <Card>
      <CardTitle>{card.name}</CardTitle>
      <TopicList>
        {card.topics.map((topic, index) => {
          if (typeof topic === "object" && topic.subtopics) {
            return (
              <div key={index}>
                <Topic>
                  <Link to={`/tests/${topic.name.replace(/\s+/g, "-").toLowerCase()}`}>
                    &gt; {topic.name}
                  </Link>
                </Topic>
              </div>
            );
          } else {
            return (
              <Topic key={index}>
                <a href={`#${topic.replace(/\s+/g, "-").toLowerCase()}`}> &gt; {topic}</a>
              </Topic>
            );
          }
        })}
      </TopicList>
    </Card>
  );
};

export default DesignSingleBox;
