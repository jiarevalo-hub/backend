export class CreateTaskDto {
  title!: string;
  priority!: string; // or number, depending on your schema
  completed!: boolean;
}
