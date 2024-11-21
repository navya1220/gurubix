import React from 'react';
import {Card, CardTitle, TopicList, Topic  } from '../styles/StyledComponents.js';

const DesignSingleBox = ({ card }) => {
    return (
      <Card>
        <CardTitle>{card.name}</CardTitle>
        <TopicList>
          {card.topics.map((topic, index) => (
            <Topic key={index}>
             <a href={`#${topic.replace(/\s+/g, "-").toLowerCase()}`}> &gt; {topic}</a>
            </Topic>
          ))}
        </TopicList>
      </Card>
    );
  };

export default DesignSingleBox;