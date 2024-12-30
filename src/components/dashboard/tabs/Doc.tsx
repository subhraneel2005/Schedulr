import React, { useState, ClipboardEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePickerWithRange } from "../DatePickerWithRange";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CalendarSchedule from "../CalendarSchedule";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

interface Topic {
  topic: string;
  description: string;
}

export default function Doc() {
  const [topics, setTopics] = useState<Topic[]>([{ topic: "", description: "" }]);
  const [selectedTime, setSelectedTime] = useState("09:00");
  const [weekendStudy, setWeekendStudy] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 21),
  });
  const [studyHours, setStudyHours] = useState(1); // Add state to manage study hours

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const topicList = pastedText
      .split(/[\n*]/)
      .map((topic) => topic.trim())
      .filter((topic) => topic)
      .map(
        (topic) =>
          topic
            .replace(/\*+/g, "")
            .replace(/^[*\s]+|[*\s]+$/g, "")
            .replace(/^\*\*|\*\*$/g, "")
      )
      .filter((topic) => topic);

    console.log("Parsed topics:", topicList); // For debugging

    const newTopics = topicList.map((topic) => ({
      topic,
      description: "",
    }));

    setTopics(newTopics);
  };

  const handleTopicChange = (index: number, field: keyof Topic, value: string) => {
    const newTopics = [...topics];
    newTopics[index] = {
      ...newTopics[index],
      [field]: value,
    };
    setTopics(newTopics);
  };

  const addTopic = () => {
    setTopics([...topics, { topic: "", description: "" }]);
  };

  const removeTopic = (index: number) => {
    const newTopics = topics.filter((_, i) => i !== index);
    setTopics(newTopics);
  };

  return (
    <div className="h-full w-full p-4 flex flex-col justify-center items-center space-y-6">
      <h3 className="text-3xl lg:text-5xl font-bold text-center">Events creator</h3>

      <div className="flex flex-col items-center w-full max-w-xl">
        <span className="border border-opacity-20 dark:border-opacity-20 dark:border-[] dark:bg-[] border-[#98999a] mt-12 w-full dark:hover:bg-[#030e2e] hover:bg-[#d6d7d9] duration-300 cursor-pointer px-6 py-3 rounded-xl">
          <Label htmlFor="range">Pick a range</Label>
          <DatePickerWithRange date={date} setDate={setDate} />
        </span>

        <div className="border border-opacity-20 dark:border-opacity-20 dark:border-[] dark:bg-[] border-[#98999a] w-full mt-6 dark:hover:bg-[#030e2e] rounded-xl px-4 py-3 hover:bg-[#d6d7d9] duration-300 space-y-4">
          <div className="scrollable-div overflow-y-auto max-h-60 scrollbar-hide py-4 px-2">
            {topics.map((topic, index) => (
              <span key={index} className="w-full">
                <Label htmlFor={`topic-${index}`}>Topic {index + 1}</Label>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 w-full items-center space-x-2">
                  <Input
                    id={`topic-${index}`}
                    placeholder="Topic"
                    value={topic.topic}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleTopicChange(index, "topic", e.target.value)
                    }
                    onPaste={index === 0 ? handlePaste : undefined}
                  />
                  <Input
                    placeholder="Description (optional)"
                    value={topic.description}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleTopicChange(index, "description", e.target.value)
                    }
                  />

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeTopic(index)}
                    className="px-2"
                  >
                    ❌
                  </Button>
                </div>
              </span>
            ))}
          </div>
        </div>

        <div className="border border-opacity-20 dark:border-opacity-20 dark:border-[] dark:bg-[] border-[#98999a] mt-6 flex flex-col md:flex-row gap-8 w-full dark:hover:bg-[#030e2e] rounded-xl px-6 py-6 hover:bg-[#d6d7d9]  duration-300">
          <div className="flex flex-col space-y-3 items-start">
            <Label htmlFor="time-picker">Select Time</Label>
            <Input
              type="time"
              id="time-picker"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full md:w-48"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <Label>Study on weekends</Label>
            <RadioGroup
              name="study-weekends"
              defaultValue="no"
              onValueChange={(value) => setWeekendStudy(value === "yes")}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Input to select study hours */}
        <div className="border border-opacity-20 dark:border-opacity-20 dark:border-[] dark:bg-[] border-[#98999a] mt-6 flex flex-col md:flex-row gap-8 w-full dark:hover:bg-[#030e2e] rounded-xl px-6 py-6 hover:bg-[#d6d7d9]  duration-300">
          <div className="flex flex-col space-y-3 items-start">
            <Label htmlFor="study-hours">Enter Study Hours</Label>
            <Input
              id="study-hours"
              type="number"
              value={studyHours}
              onChange={(e) => setStudyHours(Number(e.target.value))}
              className="w-full md:w-48"
              min={1}
              max={12}
            />
          </div>
        </div>

        <span className="mt-6 flex gap-2 md:gap-4 justify-center items-center px-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowSchedule(true)}
          >
            Create Calendar
          </Button>
          <Button type="button" variant="outline" onClick={addTopic}>
            <img src="/addTopic.png" alt="Add topic" className="mr-2" />
            Add More
          </Button>
        </span>
      </div>

      <CalendarSchedule
        dateRange={date ? { from: date.from!, to: date.to! } : undefined}
        topics={topics}
        selectedTime={selectedTime}
        weekends={weekendStudy}
        showTable={showSchedule}
        studyHours={studyHours} // Pass studyHours to CalendarSchedule
      />
    </div>
  );
}
