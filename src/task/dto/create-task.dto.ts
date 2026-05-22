export class CreateTaskDto {
  title!: string;
  description?: string;
  priority!: string; // or number, depending on your schema
  completed?: boolean;
}
