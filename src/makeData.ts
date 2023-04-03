export type Person = {
  id: number;
  subID: number;
  status: string;
  scores: number;
  taskName: string;
};

export const data: Person[] = [
  {
    id: 1,
    subID: 1.1,
    status: "todo",
    scores: 10,
    taskName: 'task1',
  },
  {
    id: 2,
    subID: 2.1,
    status: "doing",
    scores: 30,
    taskName: 'task2',
  },
  {
    id: 3,
    subID: 3.4,
    status: "done",
    scores: 50,
    taskName: 'task3',
  },
];
