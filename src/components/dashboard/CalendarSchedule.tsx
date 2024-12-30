import React, { useState, useEffect } from 'react';
import { format, addDays } from 'date-fns';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '../ui/button';

interface CalendarScheduleProps {
  topics: Array<{ topic: string; description: string }>;
  dateRange: { from: Date; to: Date } | undefined;
  selectedTime: string;
  weekends: boolean;
  showTable: boolean;
  studyHours: number;
}

const CalendarSchedule: React.FC<CalendarScheduleProps> = ({
  topics,
  dateRange,
  selectedTime,
  weekends,
  showTable,
  studyHours,
}) => {
  const [schedule, setSchedule] = useState<Array<{
    topic: string;
    description: string;
    date: Date;
    formattedDate: string;
    formattedTime: string;
  }>>([]);

  const generateSchedule = () => {
    if (!dateRange?.from || !topics.length || !selectedTime) return;
  
    const events = [];
    let currentDate = new Date(dateRange.from);
    let topicIndex = 0;
  
    while (topicIndex < topics.length) {
      // Skip weekends if not allowed
      if (!weekends && (currentDate.getDay() === 0 || currentDate.getDay() === 6)) {
        currentDate = addDays(currentDate, 1);
        continue;
      }
  
      const topic = topics[topicIndex];
      const [hours, minutes] = selectedTime.split(":");
      const eventDate = new Date(currentDate);
      eventDate.setHours(parseInt(hours), parseInt(minutes));
  
      events.push({
        topic: topic.topic,
        description: topic.description,
        date: eventDate,
        formattedDate: format(eventDate, "yyyy-MM-dd"),
        formattedTime: format(eventDate, "HH:mm"),
      });
  
      currentDate = addDays(currentDate, 1);
      topicIndex++;
    }
  
    setSchedule(events);
  };
  
  const downloadICS = () => {
    if (!schedule.length) return;
  
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Study Schedule//EN',
      ...schedule.map(event => [
        'BEGIN:VEVENT',
        `DTSTART:${format(event.date, "yyyyMMdd'T'HHmmss")}`,
        `DTEND:${format(new Date(event.date.getTime() + studyHours * 3600000), "yyyyMMdd'T'HHmmss")}`, // Event duration based on studyHours
        `SUMMARY:${event.topic}`,
        `DESCRIPTION:${event.description || 'No description'}`,
        'END:VEVENT'
      ]).flat(),
      'END:VCALENDAR'
    ].join('\r\n');
  
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'study-schedule.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };
  
  

  useEffect(() => {
    generateSchedule();
  }, [topics, dateRange, selectedTime, weekends, studyHours]);

  return (
    <div className={`mt-8 ${showTable ? "" : "hidden"}`}>
      {showTable && (
        <div className='flex flex-col justify-center items-center space-y-4 mt-8'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Topic</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((event, index) => (
                <TableRow key={index}>
                  <TableCell>{event.topic}</TableCell>
                  <TableCell>{event.formattedDate}</TableCell>
                  <TableCell>{event.formattedTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            onClick={downloadICS}
          >
            Download Schedule
          </Button>
        </div>
      )}
    </div>
  );
};

export default CalendarSchedule;
