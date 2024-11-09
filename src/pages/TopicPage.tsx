import { useEffect, useState } from "react";
import { topics } from "@/components/Feed";
import { TopicItem, Topic } from "@/components/TopicItem";

export const TopicPage = () => {
  const [topic, setTopic] = useState<Topic | null>(null);

  useEffect(() => {
    const pathParts = window.location.pathname.split("/");
    const id = pathParts[pathParts.length - 1];
    const topicId = parseInt(id, 10);

    const foundTopic = topics.find((topic) => topic.id === topicId);
    setTopic(foundTopic || null);
  }, []);

  if (!topic) {
    return <div>Topic not found!</div>;
  }

  return <TopicItem topic={topic} />;
};